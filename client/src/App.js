import React, { Component } from 'react';
import { BrowserRouter as Router, Route, Switch } from "react-router-dom";
// components 
import Main from "./pages/Main";
import Nav from "./components/Nav";
// import TopNav from './components/Nav/TopNav';
import CprAndFirstAid from "./pages/classes/CprAndFirstAid";
import Cpr from "./pages/classes/Cpr";
import CprForm from "./pages/classes/CprForm";
import GroupClasses from "./pages/classes/GroupClasses";
import About from "./pages/About";
import HowWorks from "./pages/HowWorks";
import WhyCpr from "./pages/WhyCpr";
import Contact from "./pages/Contact";
import Footer from "./components/Footer";
import SimpleFooter from "./components/Footer/SimpleFooter";






class App extends Component {
  render() {
    return (
      <Router>
        <div>
          {/* <TopNav/> */}
          <Nav />
          <Switch>
            <Route exact path="/" component={Main} />
            <Route exact path="/classes/cpr" component={Cpr} />
            <Route exact path="/classes/cprform/:id" component={CprForm} />
            <Route exact path="/classes/cprandfirstaid" component={CprAndFirstAid} />
            <Route exact path="/classes/groupcprclasses" component={GroupClasses} />
            <Route exact path="/about" component={About} />
            <Route exact path="/howitworks" component={HowWorks} />
            <Route exact path="/whycpr" component={WhyCpr} />
            <Route exact path="/contact" component={Contact} />
          </Switch>
          <Switch>
            <Route exact path="/contact" component={SimpleFooter} />
            <Route component={Footer} />


          </Switch>

          {/* <Footer />
          <SimpleFooter /> */}

        </div>
      </Router>


    );
  }


}

export default App;


