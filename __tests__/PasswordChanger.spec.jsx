import React from 'react/addons'
import assert from 'assert'
import sinon from 'sinon'
import { renderComponent, querySelector, dispatchEvent } from 'react-test-unit'
import PasswordChanger from '../src/PasswordChanger'

describe('PasswordChanger', () => {

  const defaultProps = {
    beginUpdatingPassword: () => {},
    updateNewPassword: () => {},
    updateConfirmationPassword: () => {},

    newPassword: '',
    confirmationPassword: '',
    disabled: false
  }

  context('while enabled', () => {
    const passwordChangerComponent = renderComponent(<PasswordChanger {...defaultProps} />)
    const button = querySelector(passwordChangerComponent, 'button')

    it('should have an onClick handler', () => {
      assert.equal(true, !!button.props.onClick)
    })

    describe('submitting', () => {
      const mock = sinon.spy()
      const props = {
        ...defaultProps,
        beginUpdatingPassword: mock
      }

      const passwordChangerComponent = renderComponent(<PasswordChanger {...props} />)
      const button = querySelector(passwordChangerComponent, 'button')

      dispatchEvent(button, 'onClick')

      it('calls beginUpdatingPassword', () => {
        assert.equal(true, mock.called)
      })
    })
  })

  context('while disabled', () => {
    const props = {
      ...defaultProps,
      disabled: true
    }

    const passwordChangerComponent = renderComponent(<PasswordChanger {...props} />)
    const button = querySelector(passwordChangerComponent, 'button')

    it('should not have an onClick handler', () => {
      assert.equal(undefined, button.props.onClick)
    })
  })
})
