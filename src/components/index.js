import PropTypes from 'prop-types'
import React, { PureComponent } from 'react'
import InfoView from './Info/InfoView'

class Info extends PureComponent {
  static propTypes = {
    name: PropTypes.string.isRequired
  }

  state = {
    open: false
  }

  handleClick = () => {
    this.setState(
      ({ open }) => ({ open: !open })
    )
  }

  render() {
    const { name } = this.props;
    const { open } = this.state;

    return (
      <InfoView
        name={name}
        open={open}
        onClick={this.handleClick}
      />
    )
  }

}

export default Info