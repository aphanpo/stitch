import React from "react"
import { BrowserRouter as Router, Route, Switch } from 'react-router-dom'
import CheckLogin from './CheckLogin'
import Login from './Login'

function App() {
  return (
    <div>
      <Router>
        <Switch>
          <Route path="/login" component={Login} />
          <Route path="*" component={CheckLogin} />
        </Switch>
      </Router>
    </div>
  )
}

export default App
