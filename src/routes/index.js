import React from 'react'
import { BrowserRouter, Route, Switch } from 'react-router-dom'
import Home from '../pages/Home'
import Login from '../pages/Login'
import ForgotPassword from '../pages/ForgotPassword'
import SendEmail from '../pages/SendEmail'

function MainRoutes() {
  return (
    <BrowserRouter>
      <Switch>
        <Route exact path="/" component={Login} />
        <Route exact path="/home" component={Home} />
        <Route exact path="/forgotPassword" component={ForgotPassword} />
        <Route exact path="/sendEmail" component={SendEmail} />
      </Switch>
    </BrowserRouter>
  )
}
export default MainRoutes
