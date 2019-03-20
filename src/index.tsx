import React from 'react'
import ReactDOM from 'react-dom'
import theme from './theme'
import SapphireSelect from './SapphireSelect'
import { MuiThemeProvider } from '@material-ui/core'

function App() {
  return (
    <MuiThemeProvider theme={theme}>
      <div style={{ width: '500px', margin: '24px auto' }}>
        <SapphireSelect />
      </div>
    </MuiThemeProvider>
  )
}

const rootElement = document.getElementById('root')
ReactDOM.render(<App />, rootElement)
