import React from 'react'
import {
  classes as defaultClasses,
  template as defaultTheme
} from 'rencap.themer'

export default (stylesFactory) => {
  return (WrappedComponent) => {
    return class RencapCore extends React.Component {
      constructor (props, context = {}) {
        super(props)

        const {
          classes = defaultClasses,
          theme = defaultTheme,
        } = context

        this.rencap = {
          classes,
          styles: stylesFactory && stylesFactory(classes, theme)
          theme,
        }
      }

      getChildContext () {
        return this.rencap
      }

      render () {
        return React.createElement(WrappedComponent, props)
      }
    }

    Rencap.contextTypes = {
      classes: React.PropTypes.object,
      theme: React.PropTypes.object,
    }

    RencapCore.childPropTypes = {
      classes: React.PropTypes.object.isRequired,
      styles: React.PropTypes.object,
      theme: React.PropTypes.object.isRequired,
    }
  }
}
