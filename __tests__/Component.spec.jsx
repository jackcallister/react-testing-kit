import React from 'react/addons'
import assert from 'assert'
import sinon from 'sinon'
import createComponent, { tagSelector } from '../src/createComponent'
import Component from '../src/Component'

const TestUtils = React.addons.TestUtils
const renderer = TestUtils.createRenderer()

describe('Component', () => {
  it('should render', () => {
    const comp = createComponent(<Component />)

    const h1 = tagSelector(comp, 'h1')

    console.log(h1)

    // const callback = sinon.spy()
    // const component = createComponent(<Component func={callback}/>)

    // component.findByQuery('h1')[0].onClick()

    // assert.equal(true, callback.called)
  })

  // it('should render', () => {
  //   const callback = sinon.spy()
  //   const component = createComponent(<Component func={callback}/>)
  //   const element = querySelector(component, 'h1')
  //
  //   simulateClick(element)
  //
  //   assert.equal(true, callback.called)
  // })
})
