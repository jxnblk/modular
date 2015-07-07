
import React from 'react'
import { assign } from 'lodash'
import styles from '../styles'

class Button extends React.Component {

  render () {
    let props = this.props
    let text = props.text || props.children
    let s = assign({
      fontSize: 14,
      fontWeight: 'bold',
      fontFamily: 'inherit',
      lineHeight: (styles.scale[6] - 2 * styles.scale[1]) + 'px',
      height: styles.scale[6],
      margin: 0,
      padding: styles.scale[1],
      boxSizing: 'border-box',
      border: '1px solid',
      borderRadius: styles.scale[0] / 2,
      color: props.primary ? 'white' : 'inherit',
      backgroundColor: props.primary ? styles.blue : 'white',
      borderColor: props.primary ? 'transparent' : styles.darken[3],
      cursor: 'pointer'
    }, props.style)

    return (
      <button
        {...props}
        style={s}>
        {text}
      </button>
    )
  }

}

export default Button

