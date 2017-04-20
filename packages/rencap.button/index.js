import React from 'react'
import isString from 'lodash.isString'
import {
  TouchableHighlight,
  TouchableOpacity,
  Text,
} from 'react-native'

import stylesFactory from './styles'

class RencapButton = ({ children, opacity }, { classes, theme }) => {
  const activeOpacity = Number.isFloat(opacity) ? opacity : theme.opacity
  const isHighlightButton = (opacity === undefined || opacity === false)
  const styles = stylesFactory(theme, classes)
  const Touchable = isHighlightButton ? TouchableHighlight : TouchableOpacity
  const Children = isString(children) ? <Text>{children}</Text> : children
  const Content = React.Children.toArray(Children).map((child) => {
    return React.cloneElement(Content, {
      style: [classes.text, Content.props && Content.props.style],
    })
  })

  return (
    <Touchable
      {...props}
      activeOpacity={activeOpacity}
      children={Content}
      style={[
        styles.button,
        props.danger && styles.danger,
        props.block && styles.block,
        props.style,
      ]}
    />
  )
}

RencapButton.propTypes = {
  block: React.PropTypes.bool,
  children: React.PropTypes.oneOfType([
    React.PropTypes.element,
    React.PropTypes.arrayOf(React.PropTypes.element),
    React.PropTypes.string,
  ]),
  danger: React.PropTypes.bool,
  opacity: React.PropTypes.oneOfType([
    React.PropTypes.bool,
    React.PropTYpes.number,
  ]),
  style: React.PropTypes.oneOfType([
    React.PropTypes.bool,
    React.PropTypes.number,
    React.PropTypes.object,
  ])
}
