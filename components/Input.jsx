
import React from 'react'
import styles from '../styles'

class Input extends React.Component {

  render () {
    let props = this.props
    let s = {
      label: {
        fontSize: styles.scale[2],
        fontWeight: 'bold',
        display: 'block',
      },
      input: {
        fontSize: 16,
        width: '100%',
        height: styles.scale[6],
        padding: '0 ' + styles.scale[1] + 'px',
        boxSizing: 'border-box',
        borderColor: styles.darken[3],
        borderWidth: 1,
        boxShadow: 'none',
        borderRadius: styles.scale[0] / 2,
        WebkitAppearance: 'none',
      }
    }
    let type = props.type || 'text'

    return (
      <div>
        <label
          htmlFor={props.name}
          style={s.label}>
          {props.label}
        </label>
        <input
          {...props}
          type={type}
          style={s.input} />
      </div>
    )
  }

}

export default Input

