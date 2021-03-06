import React from "react";
import Dashboard from "./pages/Dashboard";
import Header from "./components/Header";
import Footer from "./components/Footer";
import Standings from "./pages/Standings";
import About from "./pages/About";
import Rules from "./pages/Rules";
import Sponsors from "./pages/Sponsors";
import UpcomingMatches from "./pages/UpcomingMatches";
import Signup from "./pages/Signup";
import Profile from "./pages/Profile";
import Login from "./pages/Login";
import PrivateRoute from "./components/PrivateRoute";
import ForgotPassword from "./pages/ForgotPassword";
import UpdateProfile from "./pages/UpdateProfile";
import { AuthProvider } from "./contexts/AuthContext";
import { BrowserRouter as Router, Switch, Route } from "react-router-dom";

function App() {
  return (
    <>
      <Header />
      <Router>
        <AuthProvider>
          <Switch>
            <Route exact path="/" component={Dashboard} />
            <Route path="/matches" component={UpcomingMatches} />
            <Route path="/standings" component={Standings} />
            <Route path="/rules" component={Rules} />
            <Route path="/about" component={About} />
            <Route path="/sponsors" component={Sponsors} />
            <PrivateRoute path="/profile" component={Profile} />
            <PrivateRoute path="/update-profile" component={UpdateProfile} />
            <Route path="/signup" component={Signup} />
            <Route path="/login" component={Login} />
            <Route path="/forgot-password" component={ForgotPassword} />
          </Switch>
        </AuthProvider>
      </Router>
      <Footer />
    </>
  );
}

export default App;
