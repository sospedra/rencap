import React from 'react'
import { Themer } from 'rencap'

import UseContextTheme from './UseContextTheme'
import UseButtons from './UseButtons'

const App = (props) => (
  <Themer theme={theme}>
    <UseButtons />
    <UseContextTheme />
  </Themer>
)

export default App
