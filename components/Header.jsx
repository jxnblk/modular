
import React from 'react'
import styles from '../styles'

class Header extends React.Component {

  render () {
    let s = {
      container: {
      },
      link: {
        fontWeight: 'bold',
        //textTransform: 'uppercase',
        //letterSpacing: '.1em',
        textDecoration: 'none',
        color: 'inherit'
      }
    }
    return (
      <header>
        {/*
        <a href='//jxnblk.com'
          style={s.link}>
          Jxnblk
        </a>
        {' / '}
        */}
        <a href='/modular'
          style={s.link}>
          Modular
        </a>
      </header>
    )
  }

}

export default Header

