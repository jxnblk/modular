
import React from 'react'

class Arrange extends React.Component {

  render () {
    let props = this.props
    let style = {
      display: 'table',
      width: '100%',
    }
    return (
      <div style={style}>
        {props.children}
      </div>
    )
  }

}

class Item extends React.Component {

  render () {
    let props = this.props
    let style = {
      display: 'table-cell',
      width: props.fill ? '100%' : 'auto',
    }
    if (props.middle) {
      style.verticalAlign = 'middle'
    } else if (props.bottom) {
      style.verticalAlign = 'bottom'
    } else {
      style.verticalAlign = 'top'
    }

    return (
      <div style={style}>
        {props.children}
      </div>
    )
  }

}

Arrange.Item = Item

export default Arrange

