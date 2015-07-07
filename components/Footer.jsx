
import React from 'react'
import styles from '../styles'

class Footer extends React.Component {
  
    render () {
      let s = {
        container: {
          paddingTop: styles.scale[3],
          paddingBottom: styles.scale[3],
          borderTop: '1px solid ' + styles.darken[3]
        },
        link: {
          fontSize: styles.h5,
          fontWeight: 'bold',
          textDecoration: 'none',
          color: 'inherit'
        }
      }
      return (
        <footer style={s.container}>
          <a href='//jxnblk.com'
            style={s.link}>
            Made by Jxnblk
          </a>
        </footer>
      )
    }

}

export default Footer

