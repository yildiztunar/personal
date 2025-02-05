import React from 'react'
import './App.css'
import { Route, Switch } from 'react-router-dom'
import Home from './pages/Home'
import Login from './pages/Login'
import Resume from './pages/Resume'
import ProtectedRoute from './components/ProtectedRoute'
import {ToastContainer} from "react-toastify";
import "react-toastify/dist/ReactToastify.css";

function App() {
  

  return (
    <>
    <Switch>

      <Route exact path="/">
      <Home />
      </Route>

      <Route path="/login">
      <Login/>
      </Route>

      <ProtectedRoute exact path="/resume">
        <Resume/>
      </ProtectedRoute>
      
      
    </Switch>
    <ToastContainer />
    </>
  )
}

export default App
