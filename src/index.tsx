import React from 'react'
import ReactDOM from 'react-dom'
import theme from './theme'
import { MuiThemeProvider } from '@material-ui/core'
import Router from './Router'

function App() {
  return (
    <MuiThemeProvider theme={theme}>
      <div>
        <Router />
      </div>
    </MuiThemeProvider>
  )
}

const rootElement = document.getElementById('root')
ReactDOM.render(<App />, rootElement)
