import React, { Component } from 'react';
import { Switch, Route, Router } from 'react-router-dom';
import { Provider } from 'react-redux';
import { store } from './utils/store';
import history from './utils/history';
import MainPage from './containers/MainPage';

class App extends Component {
  render() {
    return (
      <Provider store={store}>
        <div className="App-wapper">
          <Router history={history}>
            <Switch>
              <Route exact path="/" component={MainPage} />
            </Switch>
          </Router>
        </div>
      </Provider>
    );
  }
}

export default App;
