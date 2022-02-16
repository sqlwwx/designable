import React from 'react'
import { Form } from '@formily-x/core'
export interface ISettingFormProps {
  className?: string
  style?: React.CSSProperties
  uploadAction?: string
  components?: Record<string, React.FC<any>>
  effects?: (form: Form) => void
  scope?: any
}
