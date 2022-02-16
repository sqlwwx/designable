import React from 'react'
import { Upload as FormilyUpload } from '@formily-x/antd'
import { createBehavior, createResource } from '@designable/core'
import { DnFC } from '@designable/react'
import { createFieldSchema } from '../../Field'

export const ImageUploader = { ...FormilyUpload }

ImageUploader.Behavior = createBehavior({
  name: 'ImageUploader',
  extends: ['Field'],
  selector: (node) => node.props['x-component'] === 'ImageUploader',
  designerProps: {
    propsSchema: createFieldSchema({
      type: 'object',
      properties: {
        max: {
          title: '最大上传数量',
          type: 'number',
          'x-decorator': 'FormItem',
          'x-component': 'NumberPicker',
        },
        imageSizes: {
          title: '图片尺寸',
          type: 'string',
          'x-decorator': 'FormItem',
          'x-component': 'Input',
        },
        supportCropper: {
          title: '支持裁剪',
          type: 'boolean',
          'x-decorator': 'FormItem',
          'x-component': 'Switch',
        },
      },
    }),
  },
  designerLocales: {
    'zh-CN': {
      title: '图片',
      settings: {
        'x-component-props': {},
      },
    },
  },
})

ImageUploader.Resource = createResource({
  icon: 'UploadSource',
  elements: [
    {
      componentName: 'Field',
      props: {
        type: 'Array<object>',
        title: '图片',
        'x-decorator': 'FormItem',
        'x-component': 'ImageUploader',
        'x-component-props': {},
      },
    },
  ],
})
