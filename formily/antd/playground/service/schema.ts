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

export const publishSchema = async (designer: Engine) => {
  const blob = new Blob(
    [JSON.stringify(transformToSchema(designer.getCurrentTree()), null, 2)],
    { type: 'application/json;charset=utf-8' }
  )

  if (fileHandle) {
    const writable = await fileHandle.createWritable()
    await writable.write(blob)
    await writable.close()
    message.success('Publish Success')
  } else {
    const a = document.createElement('a')
    try {
      a.style.display = 'none'
      a.rel = 'noopener'
      a.href = URL.createObjectURL(blob)
      a.download = 'schema.json'
      document.body.appendChild(a)
      a.click()
    } catch (error) {
      console.error(error)
    } finally {
      URL.revokeObjectURL(a.href)
      document.body.removeChild(a)
    }
  }
}
