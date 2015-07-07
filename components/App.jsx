
import React from 'react'
import { find } from 'lodash'
import ms from 'simple-modular-scale'
import { Grid, Cell } from 'rgx'
import { CarbonAd } from 'blk'
import styles from '../styles'
import Pad from './Pad.jsx'
import Header from './Header.jsx'
import TypeScale from './TypeScale.jsx'
import NumberScale from './NumberScale.jsx'
import Controls from './Controls.jsx'
import Social from './Social.jsx'
import Footer from './Footer.jsx'

class App extends React.Component {

  constructor () {
    super ()
    this.state = {
      font: 'serif',
      webfont: false,
      bold: false,
      base: 8,
      ratios: [9/8, 4/3, 4/3],
      length: 14,
    }
    this.handleChange = this.handleChange.bind(this)
    this.changeBase = this.changeBase.bind(this)
    this.changeRatio = this.changeRatio.bind(this)
    this.addRemoveRatio = this.addRemoveRatio.bind(this)
    this.changeFont = this.changeFont.bind(this)
    this.toggleBold = this.toggleBold.bind(this)
  }

  componentDidMount () {
    let props = this.props
    this.setState({ font: props.fonts[0].value })
  }

  handleChange (e) {
    let state = this.state
    state[e.target.name] = e.target.value
    this.setState(state)
  }

  changeBase (n) {
    this.setState({ base: n })
  }

  changeRatio (e) {
    let ratios = this.state.ratios
    let index = parseInt(e.target.name.split('ratio-')[1], 10)
    ratios[index] = e.target.value
    this.setState({ ratios: ratios })
  }

  addRemoveRatio (n) {
    let ratios = this.state.ratios
    if (n < ratios.length) {
      ratios.pop()
    } else if (n > ratios.length) {
      ratios.push(this.props.defaultRatios[1].value)
    }
    this.setState({ ratios: ratios })
  }

  changeFont (e) {
    let val = e.target.value
    let font = find(this.props.fonts, { value: val })
    if (font) {
      this.setState({
        font: font.value,
        webfont: font.webfont ? font.label : false
      })
    } else {
      console.error('font not found', e)
    }
  }

  toggleBold () {
    let bold = !this.state.bold 
    this.setState({ bold: bold })
  }

  render () {
    let props = this.props
    let state = this.state
    let scale = ms(state)
    let s = {
      container: {
        fontFamily: styles.fonts.Helvetica,
      },
      sidebar: {
        position: 'relative',
        boxSizing: 'border-box',
        paddingLeft: styles.scale[5],
        paddingRight: styles.scale[5],
        //paddingBottom: 128,
        height: '100vh',
        overflow: 'auto',
      },
      main: {
        position: 'relative',
        boxSizing: 'border-box',
        height: '100vh',
        padding: styles.scale[6],
        overflow: 'auto',
        borderRight: '1px solid',
        borderRightColor: styles.darken[1]
      },
      ad: {
        //position: 'absolute',
        bottom: 0,
        left: 0,
        right: 0,
        paddingTop: 64,
        paddingBottom: 8,
        backgroundColor: 'white'
      }
    }

    let wf = false
    if (state.webfont) {
      wf = (
        <div>
          <link
            href={'http://fonts.googleapis.com/css?family=' + state.webfont}
            rel='stylesheet'
            type='text/css' />
        </div>
      )
    }

    return (
      <div style={s.container}>
        <Grid>
          <Cell min={320}>
            <div style={s.main}>
              <NumberScale {...state} scale={scale} />
              <TypeScale {...state} scale={scale} />
            </div>
          </Cell>
          <Cell min={192} max={256}>
            <div style={s.sidebar}>
              <Pad y={3}>
                <Header />
              </Pad>
              <Controls
                {...props}
                {...state}
                onChange={this.handleChange}
                changeBase={this.changeBase}
                changeRatio={this.changeRatio}
                addRemoveRatio={this.addRemoveRatio}
                changeFont={this.changeFont}
                toggleBold={this.toggleBold} />
              <Pad y={5}>
                <Social />
              </Pad>
              <Footer />
              <div style={s.ad}>
                <CarbonAd />
                <style dangerouslySetInnerHTML={{ __html: '#carbonads { font-size: 12px }' }} />
              </div>
              {/*
              <pre>{JSON.stringify(state, null, '  ')}</pre>
              */}
            </div>
          </Cell>
        </Grid>
        {wf}
      </div>
    )
  }

}

export default App

