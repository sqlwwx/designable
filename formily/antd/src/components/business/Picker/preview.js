import React from 'react'
import { Select as FormilySelect } from '@formily-x/antd'
import { createBehavior, createResource } from '@designable/core'
import { DnFC } from '@designable/react'
import { createFieldSchema } from '../../Field'
import { AllSchemas } from '../../../schemas'
import { AllLocales } from '../../../locales'

export const Picker = { ...FormilySelect }

Picker.Behavior = createBehavior({
  name: 'Picker',
  extends: ['Field'],
  selector: 'Picker',
  designerProps: {
    propsSchema: createFieldSchema({
      type: 'object',
      properties: {},
    }),
  },
  designerLocales: {
    'zh-CN': {
      title: 'Picker',
      settings: {
        'x-component-props': {},
      },
    },
  },
})

Picker.Resource = createResource({
  icon: 'SelectSource',
  elements: [
    {
      componentName: 'Field',
      props: {
        title: '选择',
        type: 'any',
        'x-decorator': 'FormItem',
        'x-component': 'Picker',
      },
    },
  ],
})
