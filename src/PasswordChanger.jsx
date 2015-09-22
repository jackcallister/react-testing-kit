import React, { PropTypes } from 'react'

export default class PasswordChanger {

  static propTypes = {
    beginUpdatingPassword: PropTypes.func.isRequired,
    updateNewPassword: PropTypes.func.isRequired,
    updateConfirmationPassword: PropTypes.func.isRequired,

    newPassword: PropTypes.string.isRequired,
    confirmationPassword: PropTypes.string.isRequired,

    disabled: PropTypes.bool.isRequired
  }

  submit(e) {
    this.props.beginUpdatingPassword()
  }

  updateConfirmationPassword(e) {
    this.props.updateConfirmationPassword(e.target.value)
  }

  updateNewPassword(e) {
    this.props.updateNewPassword(e.target.value)
  }

  renderUpdateButton() {
    if (this.props.disabled) {
      return (
        <button disabled={true}>
          Update password
        </button>
      )
    } else {
      return (
        <button onClick={(e) => { this.submit(e) }}>
          Update password
        </button>
      )
    }
  }

  render() {
    const updateButton = this.renderUpdateButton()

    return (
      <form>
        <h3 className='heading'>Change Password</h3>

        <input type='password'
               value={this.props.newPassword}
               onChange={(e) => { this.updateNewPassword(e) }} />

        <input type='password'
               value={this.props.confirmationPassword}
               onChange={(e) => { this.updateConfirmationPassword(e) }}/>

        {updateButton}
      </form>
    )
  }
}
