
import React from 'react'
import styles from '../styles'

class NumberScale extends React.Component {

  render () {
    let props = this.props
    let style = {
      fontSize: styles.h5,
      fontWeight: 'bold',
      textAlign: 'right'
    }
    return (
      <div style={style}>
        {props.scale.map(function(n, i, arr) {
          return (
            <span key={i}>
              {Math.round(n * 100) / 100}
              {i === arr.length - 1 ? false : ' : '}
            </span>
          )
        })}
      </div>
    )
  }

}

export default NumberScale

