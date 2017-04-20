import React from 'react'
import { View } from 'rencap'

const GetContextTheme = (props, context) => {
  console.log(context)
  return <View />
}

const UseContextTheme = (props) => (
  <View>
    <GetContextTheme />
  </View>
)

export default UseContextTheme
