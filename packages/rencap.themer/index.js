import React from 'react'

import classes from './classes'
import template from './template'

export {
  classes,
  template,
}

class RencapThemer extends React.Component {
  getChildContext () {
    return {
      classes: classes(this.props.theme),
      theme: this.props.theme,
    }
  }

  render () {
    return this.props.children
  }
}

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
