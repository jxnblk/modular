
import React from 'react'
import styles from '../styles'

class Range extends React.Component {

  render () {
    let props = this.props
    let s = {
      label: {
        fontSize: styles.scale[2],
        display: 'block',
      },
      input: {
        width: '100%',
        WebkitAppearance: 'none',
        backgroundColor: styles.darken[1]
      }
    }

    return (
      <div>
        <label
          htmlFor={props.name}
          style={s.label}>
          {props.label}
        </label>
        <input
          {...props}
          type='range'
          style={s.input} />
      </div>
    )
  }

}

export default Range

