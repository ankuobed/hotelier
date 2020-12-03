import React from 'react'
import './App.css'
import { BrowserRouter as Router, Switch, Route } from 'react-router-dom'

// components
import { StateProvider } from './StateContext'
import Navbar from './components/Navbar/Navbar'
import Home from './components/Home/Home'
import SignIn from './components/SingIn/SignIn'
import User from './components/User/User'

function App() {
  return (
    <StateProvider>
      <Router>
        <Switch>
          <Route path='/signIn'>
            <SignIn />
          </Route>
          <Route path='/user'>
            <Navbar onUserPage/>
            <User />
          </Route>
          <Route path='/'>
            <Navbar />
            <Home />
          </Route>
        </Switch>
      </Router>
    </StateProvider>
  )
}

export default App

// color scheme
// #355070  - primary
// #e56b6f
// #b56576
