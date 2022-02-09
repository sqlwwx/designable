import { Engine } from '@designable/core'
import {
  transformToSchema,
  transformToTreeNode,
} from '@designable/formily-transformer'
import { message } from 'antd'

let fileHandle

export const loadSchema = async (designer: Engine) => {
  ;[fileHandle] = await window.showOpenFilePicker({
    types: [
      {
        description: 'json',
        accept: {
          'application/json': ['.json'],
        },
      },
    ],
    multiple: false,
  })
  designer.setCurrentTree(
    transformToTreeNode(
      await fileHandle
        .getFile()
        .then((file) => file.text())
        .then(JSON.parse)
    )
  )
}

export const saveSchema = (designer: Engine) => {
  localStorage.setItem(
    'formily-schema',
    JSON.stringify(transformToSchema(designer.getCurrentTree()))
  )
  message.success('Save Success')
}

export const loadInitialSchema = (designer: Engine) => {
  try {
    designer.setCurrentTree(
      transformToTreeNode(JSON.parse(localStorage.getItem('formily-schema')))
    )
  } catch {}
}
