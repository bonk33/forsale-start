import React, { Component } from 'react';
import { BrowserRouter as Router, Route, Link } from 'react-router-dom';
import Items from './Components/Items';
import logo from './logo.svg';
import './App.css';

const Routes = () => (
  <div>
    <Route exact path="/" render={() => <h1>Home Page Here <Link to="/next">Check out the next page</Link> and you can see some items <Link to="/items">here</Link></h1>}/>
    <Route exact path="/next" render={()=><h1>Next Page Here <Link to="/">Go back Home</Link></h1>} />
    <Route exact path="/items" render={() => <Items />} />
  </div>
)

class App extends Component {
  render() {
    return (
      <Router>
        <div className="App">
          <header className="App-header">
            <img src={logo} className="App-logo" alt="logo" />
            <h1 className="App-title">Welcome to Danny's React App, testing Routing on netlify</h1>
          </header>
          <Routes />
        </div>
      </Router>
    );
  }
}

export default App;
