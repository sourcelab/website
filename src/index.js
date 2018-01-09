import React from 'react'
import ReactDOM from 'react-dom'
import './index.css'
import App from './App'
import registerServiceWorker from './registerServiceWorker'
import { unregister } from './registerServiceWorker'

ReactDOM.render(<App />, document.getElementById('root'))

unregister() // disable until we can put more time into this
// registerServiceWorker()
