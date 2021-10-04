import './App.css';
import 'bootstrap/dist/css/bootstrap.min.css';
import Header from './component/Header/Header';
import React from "react";
import {
  BrowserRouter as Router,
  Switch,
  Route,
} from "react-router-dom";
import Home from './component/Home/Home';
import Service from './component/Service/Service';
import About from './component/About/About';
import Footer from './component/Footer/Footer';
import Contact from './component/Contact/Contact';
import NotFound from './component/NotFound/NotFound';
function App() {
  return (
    <div className="App">
            <Router>
              <Header/>
              <Switch>
                <Route exact path="/">
                        <Home></Home>
                </Route>
                <Route path="/home">
                        <Home></Home>
                </Route>
                <Route path="/Service">
                  <Service></Service>
                </Route>
                <Route path="/aboutus">
                  <About></About>
                </Route>
                <Route path="/contactus">
                  <Contact></Contact>
                </Route>
                <Route exact path="*">
                  <NotFound></NotFound>
                </Route>
              </Switch>
              <Footer></Footer>
            </Router>
      
    </div>
  );
}

export default App;
