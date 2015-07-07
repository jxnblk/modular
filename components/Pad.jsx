
import React from 'react'
import styles from '../styles'

class Pad extends React.Component {

  render () {
    let props = this.props
    let { x, y } = props
    let s = {
      paddingLeft: x ? styles.scale[x] : null,
      paddingRight: x ? styles.scale[x] : null,
      paddingTop: y ? styles.scale[y] : null,
      paddingBottom: y ? styles.scale[y] : null,
    }
    return (
      <div style={s}>
        {props.children}
      </div>
    )
  }

}

export default Pad

