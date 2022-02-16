import type { ISchema } from '@formily-x/react'
import { Input } from './Input'

export const Password: ISchema = {
  type: 'object',
  properties: Input.properties,
}
