export const components = [
  {
    label: '输入框',
    name: 'ElInput',
    props: {
      type: 'text',
      placeholder: '请输入',
      clearable: false,
      disabled: false
    }
  },
  {
    label: '选择器',
    name: 'ElSelect',
    props: {
      placeholder: '请选择',
      multiple: false,
      filterable: true,
      clearable: true,
      disabled: false
    },
    extra: {
      name: 'ElOption',
      options: [
        { label: '选项1', value: 'option1' },
        { label: '选项2', value: 'option2' }
      ]
    }
  },
  {
    label: '单选框组',
    name: 'ElRadioGroup',
    extra: {
      name: 'ElRadio',
      options: [
        { label: '选项1', value: 'option1' },
        { label: '选项2', value: 'option2' }
      ]
    }
  },
  { label: '多选框', name: 'ElCheckbox' },
  { label: '日期选择器', name: 'ElDatePicker' },
  { label: '上传', name: 'ElUpload' }
]

export const componentProps = {
  ElInput: [
    {
      attr: 'type',
      default: 'text',
      label: '类型',
      options: [
        'text',
        'textarea',
        'password'
      ],
      component: 'ElSelect'
    },
    {
      attr: 'placeholder',
      label: '占位文本',
      default: '请输入'
    },
    {
      attr: 'clearable',
      label: '是否可清空',
      default: false,
      component: 'ElSwitch'
    },
    {
      attr: 'disabled',
      label: '是否禁用',
      default: false,
      component: 'ElSwitch'
    }
  ],
  ElSelect: [
    {
      attr: 'placeholder',
      label: '占位文本',
      default: '请输入'
    },
    {
      attr: 'multiple',
      label: '是否多选',
      default: false,
      component: 'ElSwitch'
    },
    {
      attr: 'filterable',
      label: '是否可搜索',
      default: false,
      component: 'ElSwitch'
    },
    {
      attr: 'clearable',
      label: '是否可清除',
      default: false,
      component: 'ElSwitch'
    },
    {
      attr: 'disabled',
      label: '是否禁用',
      default: false,
      component: 'ElSwitch'
    }
  ],
  ElRadioGroup: []
}

export const EventName = {
  activeComponent: 'activeComponentChange'
}
