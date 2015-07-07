
import React from 'react'
import styles from '../styles'

class Select extends React.Component {

  render () {
    let props = this.props
    let s = {
      label: {
        fontSize: styles.scale[2],
        fontWeight: 'bold',
        display: 'block'
      },
      select: {
        fontSize: 14,
        width: '100%',
        height: styles.scale[6],
        paddingLeft: styles.scale[1],
        paddingRight: styles.scale[1],
        boxSizing: 'border-box',
        borderColor: styles.darken[3],
        borderWidth: 1,
        boxShadow: 'none',
        borderRadius: styles.scale[0] / 2,
        backgroundColor: 'white',
        //WebkitAppearance: 'none',
      }
    }

    return (
      <div>
        <label htmlFor={props.name}
          style={s.label}>
          {props.label}
        </label>
        <select
          {...props}
          style={s.select}>
          {props.options.map(function(option, i) {
            return (
              <option
                key={i}
                {...option} />
              )
          })}
        </select>
      </div>
    )
  }

}

export default Select

