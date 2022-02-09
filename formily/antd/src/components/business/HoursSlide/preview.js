import React from 'react'
import { Input as FormilyInput } from '@formily/antd'
import { createBehavior, createResource } from '@designable/core'
import { DnFC } from '@designable/react'
import { createFieldSchema } from '../../Field'
import { AllSchemas } from '../../../schemas'
import { AllLocales } from '../../../locales'

export const HoursSlide = { ...FormilyInput }

HoursSlide.Behavior = createBehavior({
  name: 'HoursSlide',
  extends: ['Field'],
  selector: (node) => node.props['x-component'] === 'HoursSlide',
  designerProps: {
    propsSchema: createFieldSchema(AllSchemas.Input),
  },
  designerLocales: {
    'zh-CN': {
      title: '小时选择',
    },
  },
})

HoursSlide.Resource = createResource({
  elements: [
    {
      componentName: 'Field',
      props: {
        title: '时段',
        type: 'string',
        'x-decorator': 'FormItem',
        'x-component': 'HoursSlide',
      },
    },
  ],
})
