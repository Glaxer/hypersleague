import React from "react";
import { AuthProvider } from "./contexts/AuthContext";
import { BrowserRouter as Router, Switch, Route } from "react-router-dom";
import PrivateRoute from "./components/PrivateRoute";
import Dashboard from "./pages/Dashboard";
import Header from "./components/Header";
import UpcomingMatches from "./pages/UpcomingMatches";
import Standings from "./pages/Standings";
import Rules from "./pages/Rules";
import About from "./pages/About";
import Sponsors from "./pages/Sponsors";
import Login from "./pages/Login";
import Footer from "./components/Footer";
import AdminPanel from "./pages/AdminPanel";
// import Profile from "./pages/Profile";
// import UpdateProfile from "./pages/UpdateProfile";
// import Signup from "./pages/Signup";
// import ForgotPassword from "./pages/ForgotPassword";

function App() {
  return (
    <>
      <AuthProvider>
        <Header />
        <Router>
          <Switch>
            <Route exact path="/" component={Dashboard} />
            <Route path="/matches" component={UpcomingMatches} />
            <Route path="/standings" component={Standings} />
            <Route path="/rules" component={Rules} />
            <Route path="/about" component={About} />
            <Route path="/sponsors" component={Sponsors} />
            <Route path="/login" component={Login} />
            <PrivateRoute path="/admin" component={AdminPanel} />
            {/* <PrivateRoute path="/profile" component={Profile} />
            <PrivateRoute path="/update-profile" component={UpdateProfile} /> */
            /* <Route path="/signup" component={Signup} />
            <Route path="/forgot-password" component={ForgotPassword} /> */}
          </Switch>
        </Router>
        <Footer />
      </AuthProvider>
    </>
  );
}

export default App;
