import React from 'react'
import { Button } from 'rencap'

const UseButtons = (props) => (
  <View>
    <Button onPress={() => console.log('Normal button')}>
      Press me, we accept direct strings as children!
    </Button>
    <Button opacity={0.5}>
      Buttons are deterministic. Given some props return different Touchables
    </Button>
    <Button block danger>Declarative FTW!</Button>
  </View>
)

export default UseButtons
