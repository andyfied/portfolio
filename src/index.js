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

import Navigation from './components/Navigation'

import Gallery from './pages/Gallery'
import About from './pages/About'
import Pricing from './pages/Pricing'
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
      <div>
        <Navigation />
        <Switch>
          <Route exact path="/" component={ App } />
          <Route path="/gallery" component={ Gallery } />
          <Route path="/about" component={ About } />
          <Route path="/pricing" component={ Pricing } />
          <Route path="/contact" component={ Contact } />
          <Route path="*" component={ NoMatch } />
        </Switch>
      </div>
    </BrowserRouter>
  </Provider>,
  document.getElementById('root')
);


