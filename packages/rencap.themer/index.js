import React from 'react'

import classes from './classes'
import template from './template'

class RencapThemer extends React.Component {
  getChildContext () {
    return {
      classes: classes(this.props.theme),
      theme: this.props.theme,
    }
  }

  render () {
    return React.Children.only(this.props.children)
  }
}

Themer.rencap = { template }

Themer.childPropTypes = {
  theme: React.PropTypes.object,
}

Themer.defaultProps = {
  theme: template,
}

Themer.propTypes = {
  children: React.PropTypes.element.isRequired,
  theme: React.PropTypes.object.isRequired,
}

export default Themer
