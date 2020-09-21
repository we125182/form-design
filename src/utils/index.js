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
  { label: '选择器', name: 'ElSelect' },
  { label: '单选框', name: 'ElRadio' },
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
      label: '禁用',
      default: false,
      component: 'ElSwitch'
    }
  ]
}

export const EventName = {
  activeComponent: 'activeComponentChange'
}
