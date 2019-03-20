import { createStore, applyMiddleware } from 'redux';
import { composeWithDevTools } from 'redux-devtools-extension';
import thunkMiddleware from 'redux-thunk';
import mainPageReducer from '../containers/MainPage/reducer';

export default function configureStore() {
  const store = createStore(
    mainPageReducer,
    composeWithDevTools(applyMiddleware(thunkMiddleware)),
  );

  if (module.hot) {
    module.hot.accept('../containers/MainPage/reducer', () => {
      store.replaceReducer(mainPageReducer(store.injectedReducers));
    });
  }

  return store;
}
