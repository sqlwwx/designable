import React from 'react'
import { Cascader as FormilyCascader } from '@formily/next'
import { createFeature, createResource } from '@designable/core'
import { DnFC } from '@designable/react-page'
import { createFieldSchema } from '../Field'
import { AllSchemas } from '../../schemas'
import { AllLocales } from '../../locales'

export const Cascader: DnFC<React.ComponentProps<typeof FormilyCascader>> =
  FormilyCascader

Cascader.Feature = createFeature({
  name: 'Cascader',
  extends: ['Field'],
  selector: (node) => node.props['x-component'] === 'Cascader',
  descriptor: {
    propsSchema: createFieldSchema(AllSchemas.Cascader),
  },
  locales: AllLocales.Cascader,
})

Cascader.Resource = createResource({
  icon: 'CascaderSource',
  elements: [
    {
      componentName: 'Field',
      props: {
        title: 'Cascader',
        'x-decorator': 'FormItem',
        'x-component': 'Cascader',
      },
    },
  ],
})
