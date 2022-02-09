import React, { Fragment } from 'react'
import { Card, CardProps } from 'antd'
import { createBehavior, TreeNode, createResource } from '@designable/core'
import {
  useTreeNode,
  TreeNodeWidget,
  DroppableWidget,
  useNodeIdProps,
  DnFC,
} from '@designable/react'
import { ArrayBase } from '@formily/antd'
import { observer } from '@formily/react'
import { LoadTemplate } from '../../common/LoadTemplate'
import { useDropTemplate } from '../../hooks'
import {
  queryNodesByComponentPath,
  createEnsureTypeItemsNode,
  createNodeId,
} from '../../shared'
import { createFieldSchema } from '../Field'
import cls from 'classnames'
import './styles.less'

const ensureObjectItemsNode = createEnsureTypeItemsNode('object')

export const ArrayTabs: DnFC<any> = observer((props) => {
  const node = useTreeNode()
  const nodeId = useNodeIdProps()
  const designer = useDropTemplate('ArrayTabs', (source) => {
    const objectNode = new TreeNode({
      componentName: node.componentName,
      props: {
        type: 'object',
      },
      children: [...source],
    })
    return [objectNode]
  })
  const renderCard = () => {
    if (node.children.length === 0) return <DroppableWidget />
    const operations = queryNodesByComponentPath(node, ['ArrayTabs', '*'])
    const children = queryNodesByComponentPath(node, [
      'ArrayTabs',
      '*',
      (name) => name.indexOf('ArrayTabs.') === -1,
    ])
    return (
      <ArrayBase disabled>
        <ArrayBase.Item index={0} record={null}>
          <Card
            {...props}
            className={cls('ant-formily-array-tabs-item', props.className)}
          >
            <div {...createNodeId(designer, ensureObjectItemsNode(node).id)}>
              {children.length ? (
                children.map((node) => (
                  <TreeNodeWidget key={node.id} node={node} />
                ))
              ) : (
                <DroppableWidget />
              )}
            </div>
          </Card>
        </ArrayBase.Item>
      </ArrayBase>
    )
  }

  return (
    <div {...nodeId} className="dn-array-tabs">
      {renderCard()}
      <LoadTemplate />
    </div>
  )
})

ArrayBase.mixin(ArrayTabs)

const propsSchema = createFieldSchema()
propsSchema.properties['field-group'].properties.maxItems = {
  type: 'number',
  'x-decorator': 'FormItem',
  'x-component': 'NumberPicker',
}

ArrayTabs.Behavior = createBehavior({
  name: 'ArrayTabs',
  extends: ['Field'],
  selector: (node) => node.props['x-component'] === 'ArrayTabs',
  designerProps: {
    droppable: true,
    propsSchema: propsSchema,
  },
  designerLocales: {
    'zh-CN': {
      title: 'ArrayTabs',
    },
  },
})

ArrayTabs.Resource = createResource({
  elements: [
    {
      componentName: 'Field',
      props: {
        type: 'array',
        'x-decorator': 'FormItem',
        'x-component': 'ArrayTabs',
        maxItems: 3,
        'x-decorator-props': {
          colon: false,
          labelWrap: false,
          wrapperWidth: 'auto',
          labelWidth: '0px',
        },
        title: 'ArrayTabs',
        required: true,
      },
    },
  ],
})
