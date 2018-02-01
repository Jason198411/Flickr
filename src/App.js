import React, {
  Component
} from 'react';
import './App.css';

import UrlError from './components/UrlError';
import Container from './components/Container';
import {
  BrowserRouter,
  Route,
  Switch,
  Redirect
} from 'react-router-dom';

class App extends Component {
  render() {
    return (
      <BrowserRouter>
        <div className="container">     
          <Switch>             
            <Route exact path="/flickr/" render={ () => <Redirect to="/search/cats"/> }/>
            <Route exact path="/search" render={ () => <Redirect to="/search/cats"/> }/>
            <Route exact path="/search/:name"  component={Container} /> 
            <Route component={} />
          </Switch>                             
        </div>
      </BrowserRouter>
    );
  }
}

export default App;
