import React from 'react/addons'

const TestUtils = React.addons.TestUtils

export function tagSelector(comp, tag, oldSelection) {
  // comp can be an array
  let selection = oldSelection || []

  if (comp.type === tag) {
    selection.push(comp)
  }

  if (!comp.props) {
    return selection
  }

  if (!comp.props.children) {
    return selection
  }

  return tagSelector(comp.props.children, tag, selection)
}

function mapComponent(comp, parent) {
  // Component is not a primitive element, recurse
  if (typeof comp.type === 'function') return createComponent(comp, parent)

  if (!comp.props) return comp

  const oldChildren = comp.props.children

  if (!oldChildren || oldChildren.length === 0) return comp

  let newChildren = []

  React.Children.forEach(comp.props.children, (c) => {
    return newChildren.push(mapComponent(c, comp))
  })

  comp.props.children = newChildren

  return comp
}

function createComponentInRenderer(renderer, comp, parent) {
  renderer.render(comp)

  return mapComponent(renderer.getRenderOutput(), parent)
}

export default function createComponent(comp, parent) {
  return createComponentInRenderer(TestUtils.createRenderer(), comp, parent)
}
