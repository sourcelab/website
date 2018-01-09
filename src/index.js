import React from 'react'
import ReactDOM from 'react-dom'
import './index.css'
import App from './App'
import { unregister } from './registerServiceWorker'
// import registerServiceWorker from './registerServiceWorker'
// registerServiceWorker()

ReactDOM.render(<App />, document.getElementById('root'))

unregister() // disable until we can put more time into this
