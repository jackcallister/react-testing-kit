import React from 'react'
import assert from 'assert'
import cheerio from 'cheerio'
import Component from '../src/Component'

describe('Component', () => {
  it('should render', () => {
    const string = React.renderToStaticMarkup(<Component />)
    const $ = cheerio.load(string)
    const componentDOM = $('h1')

    assert.equal('<h1>Hello, World</h1>', $.html())
  })
})
