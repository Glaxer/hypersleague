import React from 'react'
import Dashboard from './Dashboard'
import Header from './Header'
import Footer from './Footer'
import Standings from './Standings'
import UpcomingMatches from './UpcomingMatches'
import Signup from './Signup'
import Profile from './Profile'
import Login from './Login'
import PrivateRoute from './PrivateRoute'
import ForgotPassword from './ForgotPassword'
import UpdateProfile from './UpdateProfile'
import { Container } from 'react-bootstrap'
import { AuthProvider } from "../contexts/AuthContext"
import { BrowserRouter as Router, Switch, Route } from 'react-router-dom'

function App() {
  return (
    <div>
      <Header />
      <Container style={{ minHeight: "100vh" }} >
        <Router>
          <AuthProvider>
            <Switch>
              <Route exact path="/" component={Dashboard} />
              <Route path="/matches" component={UpcomingMatches} />
              <Route path="/top" component={Standings} />
              <PrivateRoute path="/profile" component={Profile} />
              <PrivateRoute path="/update-profile" component={UpdateProfile} />
              <Route path="/signup" component={Signup} />
              <Route path="/login" component={Login} />
              <Route path="/forgot-password" component={ForgotPassword} />
            </Switch>
          </AuthProvider>
        </Router>
      </Container>
      <Footer />
    </div >
  )
}

export default App