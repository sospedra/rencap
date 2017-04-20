import React from 'react'
import { View } from 'react-native'

/**
 * Use this component to pass the Rencap context down.
 * This allows to use the context.theme outside of Rencap components.
 */
const RencapView = (props) => (
  <View>{props.children}</View>
)

RencapView.propTypes = {
  children: React.PropTypes.any,
}

export default RencapView
