import React, {
  Component
} from 'react';
import './App.css';
import FetchData from './components/FetchData';
import MainNav from './components/MainNav';
import NotFound from './components/NotFound';
import SearchForm from './components/SearchForm';
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
          <SearchForm />
          <MainNav />
          <Switch>             
            <Route exact path="/" render={ () => <Redirect to="/cats"/> }/>
            <Route path="/:name"  component={FetchData} /> 
            <Route component={NotFound} />
          </Switch>                             
        </div>
      </BrowserRouter>
    );
  }
}

export default App;