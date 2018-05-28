import React, { Component } from 'react';
import logo from './logo.svg';
import './App.css';
import {BrowserRouter as Router, Route} from 'react-router-dom';

// import component
import Header from './components/Header';
import Menu from './components/Menu';
import PortFolio from './components/PortFolio';
import About from './components/About';
import Contact from './components/Contact';

class App extends Component {
  render() {
    return (
      <Router className="App">
          <div>
              <Header/>
              <Menu/>
              <Route exact path="/" component={PortFolio} />
              <Route path="/about" component={About} />
              <Route path="/contact" component={Contact} />
          </div>
      </Router>
    );
  }
}

export default App;
