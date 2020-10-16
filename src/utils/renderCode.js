import { template, templateSettings } from 'lodash-es'

templateSettings.interpolate = /{{([\s\S]+?)}}/g

const templateMap = {
  ElInput: `
    <el-form-item label="{{label}}" prop="{{prop}}">
      <el-input {{attributes}} />
    </el-form-item>`,
  ElSelect: `
    <el-form-item label="{{label}}" prop="{{prop}}">
      <el-select {{attributes}}>
      <% options.forEach(function(option){ %><el-option label="<%-option.label%>" value="<%-option.value%>"></el-option> <% }) %>
      </el-select>
    </el-form-item>`,
  ElDatePicker: `
    <el-form-item label="{{label}}" prop="{{prop}}">
      <el-date-picker {{attributes}} />
    </el-form-item>`,
  ElRadioGroup: `
    <el-form-item label="{{label}}" prop="{{prop}}">
      <el-radio-group {{attributes}}>
      <% options.forEach(function(option){ %><el-radio label="<%-option.value%>"><%-option.label%></el-radio> <% }) %>
      </el-radio-group>
    </el-form-item>`,
  ElCheckboxGroup: `
    <el-form-item label="{{label}}" prop="{{prop}}">
      <el-checkbox-group {{attributes}}>
      <% options.forEach(function(option){ %><el-checkbox label="<%-option.value%>"><%-option.label%></el-checkbox> <% }) %>
      </el-checkbox-group>
    </el-form-item>`,
  container: `
    <template>
      <el-form {{attributes}}>{{template}}
      </el-form>
    </template>

    <script>
    export default {
      data() {
        return {
          {{model}}: {
            {{formItems}}
          }
        }
      }
    }
    </script>
  `
}

function camelCase2kebabCase(str) {
  return str.replace(/([A-Z])/g, '-$1').toLowerCase()
}

function generateAttributes(data) {
  const { prop, props = {} } = data
  if (prop) {
    props['v-model'] = `form.${prop}`
  }
  const attrs = Object.keys(props).reduce((attrArr, key) => {
    const needBind = key === 'model' || typeof props[key] !== 'string'
    let attr = `${camelCase2kebabCase(key)}="${props[key]}"`
    needBind && (attr = ':' + attr)
    attrArr.push(attr)
    return attrArr
  }, [])
  return attrs.join(' ')
}

function formatTemplateData(data) {
  let options = []
  const { label, prop, extra } = data
  if (extra) {
    options = extra.options
  }
  const attributes = generateAttributes(data)
  return {
    options,
    label,
    prop,
    attributes
  }
}

export function renderCode(formItem, otherKeys = {}) {
  const compiler = template(templateMap[formItem.name])
  return compiler(Object.assign(otherKeys, formatTemplateData(formItem)))
}

export function renderContainerCode(containerProp, nestedTemplate = '', formItems = '') {
  let model = ''
  const container = Object.keys(containerProp).reduce((pre, key) => {
    if (key === 'modelName') {
      model = containerProp[key]
      pre.props.model = containerProp[key]
    } else {
      pre.props[key] = containerProp[key]
    }
    return pre
  }, {
    name: 'container',
    props: {}
  })
  return renderCode(container, { template: nestedTemplate, formItems, model })
}
