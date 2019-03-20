import React, { Component } from 'react';
import { Switch, Route, Router } from 'react-router-dom';
import history from './utils/history';
import MainPage from './containers/MainPage';

class App extends Component {
  render() {
    return (
      <div className="App-wapper">
        <Router history={history}>
          <Switch>
            <Route exact path="/" component={MainPage} />
          </Switch>
        </Router>
      </div>
    );
  }
}

export default App;
