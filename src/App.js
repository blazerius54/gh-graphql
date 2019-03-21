import React, { Component } from 'react';
import { Provider } from 'react-redux';
import { store } from './utils/store';
import MainPage from './containers/MainPage';

class App extends Component {
  render() {
    return (
      <Provider store={store}>
        <div className="App-wapper">
          <MainPage />
        </div>
      </Provider>
    );
  }
}

export default App;
