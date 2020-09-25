export const baseComponents = [
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
  {
    label: '多选框组',
    name: 'ElCheckboxGroup',
    value: [],
    extra: {
      name: 'ElCheckbox',
      options: [
        { label: '选项1', value: 'option1' },
        { label: '选项2', value: 'option2' }
      ]
    }
  },
  {
    label: '日期选择器',
    name: 'ElDatePicker',
    props: {
      type: 'date',
      placeholder: '请选择',
      startPlaceholder: '开始日期',
      endPlaceholder: '结束日期',
      clearable: true,
      valueFormat: 'yyyy-MM-dd'
    }
  }
]

export const componentPanelList = [
  {
    title: '基础组件',
    name: 'baseComponents',
    components: baseComponents
  }
]

export const componentProps = {
  ElInput: [
    {
      attr: 'type',
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
      label: '占位文本'
    },
    {
      attr: 'clearable',
      label: '是否可清空',
      component: 'ElSwitch'
    },
    {
      attr: 'disabled',
      label: '是否禁用',
      component: 'ElSwitch'
    }
  ],
  ElSelect: [
    {
      attr: 'placeholder',
      label: '占位文本'
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
      component: 'ElSwitch'
    },
    {
      attr: 'clearable',
      label: '是否可清除',
      component: 'ElSwitch'
    },
    {
      attr: 'disabled',
      label: '是否禁用',
      component: 'ElSwitch'
    }
  ],
  ElRadioGroup: [],
  ElCheckboxGroup: [],
  ElDatePicker: [
    {
      attr: 'type',
      label: '类型',
      options: [
        'date',
        'daterange'
      ],
      component: 'ElSelect'
    },
    {
      attr: 'placeholder',
      label: '占位文本'
    },
    {
      attr: 'valueFormat',
      label: '格式'
    },
    {
      attr: 'clearable',
      label: '是否可清空',
      component: 'ElSwitch'
    }
  ]
}

export const EventName = {
  activeComponent: 'activeComponentChange'
}
