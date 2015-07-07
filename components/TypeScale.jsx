
import React from 'react'

class TypeScale extends React.Component {

  render () {
    let props = this.props
    let styles = {
      container: {
        overflow: 'hidden'
      }
    }
    return (
      <div style={styles.container}>
        {props.scale.map(function(n, i) {
          let style = {
            fontSize: n,
            fontFamily: props.font,
            fontWeight: props.bold ? 'bold' : 'normal',
            lineHeight: 1.25,
            whiteSpace: 'nowrap',
            margin: 0
          }
          return (
            <h1 key={i}
              style={style}>
              {Math.round(n * 10) / 10} Hamburgefonstiv
            </h1>
          )
        }).reverse()}
      </div>
    )
  }
}

export default TypeScale
