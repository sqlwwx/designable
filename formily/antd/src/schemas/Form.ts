import { ISchema } from '@formily-x/react'
import { FormLayout } from './FormLayout'
import { CSSStyle } from './CSSStyle'

export const Form: ISchema = {
  type: 'object',
  properties: {
    ...(FormLayout.properties as any),
    style: CSSStyle,
  },
}
