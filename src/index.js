import { spaceId, deliveryAccessToken } from './config'
import { initClient } from './services/contentfulClient'
import React from 'react'
import { spring } from 'react-motion'
import ReactDOM from 'react-dom'
import { AnimatedSwitch } from 'react-router-transition'
import { Provider } from 'react-redux'
import { createStore, applyMiddleware } from 'redux'
import { Router, Route, BrowserRouter, Switch } from 'react-router-dom'
import thunk from 'redux-thunk'
import appReducer from './reducers/index'
import { FeatureToggleProvider, FeatureToggle } from 'react-feature-toggles'
import 'normalize.css'
import './index.css'

import App from './App'

import Navigation from './components/Navigation'

import Gallery from './pages/Gallery'
import About from './pages/About'
import Pricing from './pages/Pricing'
import Contact from './pages/Contact'
import Merits from './pages/Merits'
import NoMatch from './pages/NoMatch'
import UnderConstruction from './pages/UnderConstruction'

const toggleNames = {
  SHOW_UNDER_CONSTRUCTION: 'showUnderConstruction',
}

const toggles = {
  [toggleNames.SHOW_UNDER_CONSTRUCTION]: false,
}

initClient(spaceId, deliveryAccessToken)

const store = createStore(
  appReducer,
  window.__REDUX_DEVTOOLS_EXTENSION__ && window.__REDUX_DEVTOOLS_EXTENSION__(),
  applyMiddleware(thunk),
)

const slide = val => {
  return spring(val, {
    stiffness: 125,
    damping: 16,
  })
}

ReactDOM.render(
  <FeatureToggleProvider featureToggleList={toggles}>
    <Provider store={store}>
      <BrowserRouter>
        <div>
          <FeatureToggle featureName={toggleNames.SHOW_UNDER_CONSTRUCTION}>
            <UnderConstruction />
          </FeatureToggle>
          <FeatureToggle featureName={toggleNames.SHOW_UNDER_CONSTRUCTION} showOnlyWhenDisabled>
            <Navigation />
            <div>
              <AnimatedSwitch
                className="switch-wrapper"
                atEnter={{ offset: -100 }}
                atLeave={{ offset: slide(-150) }}
                atActive={{ offset: slide(0) }}
                mapStyles={styles => ({
                  transform: `translateX(${styles.offset}%)`,
                })}
              >
                <Route exact path="/" component={App} onUpdate={() => window.scrollTo(0, 0)} />
                <Route path="/gallery" component={Gallery} onUpdate={() => window.scrollTo(0, 0)} />
                <Route path="/about" component={About} onUpdate={() => window.scrollTo(0, 0)} />
                <Route path="/pricing" component={Pricing} onUpdate={() => window.scrollTo(0, 0)} />
                <Route path="/contact" component={Contact} onUpdate={() => window.scrollTo(0, 0)} />
                <Route path="/merits" component={Merits} onUpdate={() => window.scrollTo(0, 0)} />
                <Route path="*" component={NoMatch} onUpdate={() => window.scrollTo(0, 0)} />
              </AnimatedSwitch>
            </div>
          </FeatureToggle>
        </div>
      </BrowserRouter>
    </Provider>
  </FeatureToggleProvider>,
  document.getElementById('root'),
)
