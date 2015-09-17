import React from 'react'

export default class Component {

  render() {
    return (
      <section>
        <MyComp />
      </section>
    )
  }
}


class MyComp {

  render() {
    return (
      <div>
        <h1>Hello</h1>
      </div>
    )
  }
}