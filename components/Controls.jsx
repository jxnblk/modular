
import React from 'react'
import styles from '../styles'
import Arrange from './Arrange.jsx'
import Range from './Range.jsx'
import Input from './Input.jsx'
import Select from './Select.jsx'
import Stepper from './Stepper.jsx'
import Button from './Button.jsx'

class Controls extends React.Component {

  render () {
    let props = this.props

    return (
      <div>
        <Arrange>
          <Arrange.Item fill>
            <div style={{ paddingRight: 8 }}>
              <Input
                type='number'
                name='base'
                label='Base'
                value={props.base}
                min={2}
                max={32}
                onChange={props.onChange} />
            </div>
          </Arrange.Item>
          <Arrange.Item bottom>
            <Stepper
              min={2}
              max={32}
              value={props.base}
              onChange={props.changeBase} />
          </Arrange.Item>
        </Arrange>
        <hr style={styles.hr} />
        <div>
          <Arrange>
            <Arrange.Item fill middle>
              <h4>Ratios</h4>
            </Arrange.Item>
            <Arrange.Item middle>
              <Stepper
                min={1}
                max={4}
                value={props.ratios.length}
                onChange={props.addRemoveRatio} />
            </Arrange.Item>
          </Arrange>
          {props.ratios.map(function(r, i) {
            return (
              <div key={i}
                style={{ marginBottom: 8 }}>
                <Select
                  label={'R' + (i + 1)}
                  name={'ratio-' + i}
                  value={r}
                  onChange={props.changeRatio}
                  options={props.defaultRatios} />
              </div>
            )
          })}
        </div>
        <Arrange>
          <Arrange.Item fill>
            <div style={{ paddingRight: 8 }}>
              <Select
                label='Font'
                name='font'
                value={props.font}
                onChange={props.changeFont}
                options={props.fonts} />
            </div>
          </Arrange.Item>
          <Arrange.Item bottom>
            <Button
              text='Bold'
              primary={props.bold}
              onClick={props.toggleBold} />
          </Arrange.Item>
        </Arrange>
        <div style={{ marginTop: 8, fontSize: 12 }}>Note: some fonts may not be available on all operating systems.</div>
      </div>
    )
  }

}

export default Controls

