import React, { Component } from 'react';
import EventView from "./components/EventView";
import {BrowserRouter,Route} from 'react-router-dom';
import Details from './components/Details'

class App extends Component {
  render() {
    return (
      <BrowserRouter>
          <div>

              <Route exact path="/" component={EventView}/>
              <Route path="/details" component={Details} />
          </div>
      </BrowserRouter>
    );
  }
}

export default App;
