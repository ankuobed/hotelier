import React from 'react'
import './App.css'
import { BrowserRouter as Router, Switch, Route } from 'react-router-dom'

// components
import Navbar from './components/Navbar/Navbar'
import Home from './components/Home/Home'
import SignIn from './components/SingIn/SignIn'

function App() {
  return (
    <Router>
      <Switch>
        <Route path='/signIn'>
          <SignIn />
        </Route>
        <Route path='/'>
          <Navbar />
          <Home />
        </Route>
      </Switch>
    </Router>
  )
}

export default App

// color scheme
// #355070  - primary
// #e56b6f
// #b56576
