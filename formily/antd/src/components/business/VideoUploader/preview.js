import React from 'react'
import { Upload as FormilyUpload } from '@formily-x/antd'
import { createBehavior, createResource } from '@designable/core'
import { DnFC } from '@designable/react'
import { createFieldSchema } from '../../Field'
import { AllSchemas } from '../../../schemas'
import { AllLocales } from '../../../locales'

export const VideoUploader = { ...FormilyUpload }

VideoUploader.Behavior = createBehavior({
  name: 'VideoUploader',
  extends: ['Field'],
  selector: (node) => node.props['x-component'] === 'VideoUploader',
  designerProps: {
    propsSchema: createFieldSchema({
      type: 'object',
      properties: {
        max: {
          type: 'number',
          'x-decorator': 'FormItem',
          'x-component': 'NumberPicker',
        },
      },
    }),
  },
  designerLocales: {
    'zh-CN': {
      title: 'Video',
      settings: {
        'x-component-props': {},
      },
    },
  },
})

VideoUploader.Resource = createResource({
  elements: [
    {
      componentName: 'Field',
      props: {
        title: '视频',
        type: 'Array<object>',
        'x-decorator': 'FormItem',
        'x-component': 'VideoUploader',
      },
    },
  ],
})
