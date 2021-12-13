import React from 'react'
import { Rating as NextRating } from '@alifd/next'
import { createFeature, createResource } from '@designable/core'
import { DnComponent } from '@designable/react-page'
import { createFieldSchema } from '../Field'
import { AllSchemas } from '../../schemas'
import { AllLocales } from '../../locales'

export const Rating: DnComponent<React.ComponentProps<typeof NextRating>> =
  NextRating

Rating.Feature = createFeature({
  name: 'Rating',
  extends: ['Field'],
  selector: (node) => node.props['x-component'] === 'Rating',
  descriptor: {
    propsSchema: createFieldSchema(AllSchemas.Rating),
  },
  locales: AllLocales.Rating,
})

Rating.Resource = createResource({
  icon: 'RateSource',
  elements: [
    {
      componentName: 'Field',
      props: {
        type: 'number',
        title: 'Rating',
        'x-decorator': 'FormItem',
        'x-component': 'Rating',
      },
    },
  ],
})
