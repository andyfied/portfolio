import { spaceId, deliveryAccessToken } from './config'
import { initClient } from './services/contentfulClient'
import React from 'react';
import ReactDOM from 'react-dom';
import { Provider } from 'react-redux'
import { createStore, applyMiddleware } from 'redux'
import { Router, Route, BrowserRouter, Switch } from 'react-router-dom'
import thunk from 'redux-thunk'
import appReducer from './reducers/index'
import 'normalize.css'
import './index.css'

import App from './App';
import Contact from './pages/Contact'
import NoMatch from './pages/NoMatch'

initClient(spaceId, deliveryAccessToken)

const store = createStore(
  appReducer,
  window.__REDUX_DEVTOOLS_EXTENSION__ && window.__REDUX_DEVTOOLS_EXTENSION__(),
  applyMiddleware(thunk)
)

ReactDOM.render(
  <Provider store={ store }>
    <BrowserRouter>
      <Switch>
        <Route exact path="/" component={ App } />
        <Route path="/kontakt" component={ Contact } />
        <Route path="*" component={ NoMatch } />
      </Switch>
    </BrowserRouter>
  </Provider>,
  document.getElementById('root')
);


