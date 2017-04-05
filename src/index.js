import { spaceId, deliveryAccessToken } from './config'
import { initClient } from './services/contentfulClient'
import React from 'react';
import ReactDOM from 'react-dom';
import App from './App';
import { Provider } from 'react-redux'
import { createStore } from 'redux'
import { Router, Route, BrowserRouter } from 'react-router-dom'
import appReducer from './reducers/index'
import NoMatch from './components/NoMatch'
import './index.css';

initClient(spaceId, deliveryAccessToken)

const store = createStore(
  appReducer,
  window.__REDUX_DEVTOOLS_EXTENSION__ && window.__REDUX_DEVTOOLS_EXTENSION__()
)

ReactDOM.render(
  <Provider store={ store }>
    <BrowserRouter>
      <div>
        <Route path="/" component={ App } />
      </div>
    </BrowserRouter>
  </Provider>,
  document.getElementById('root')
);


