import React, { Component } from 'react';
import logo from './logo.svg';
import './App.css';

import { getGalleryItems } from './services/contentfulClient'

import contentful from 'contentful'
import { connect } from 'react-redux'

const mapStateToProps = (state) => {
  return {};
}

const mapDispatchToProps = (dispatch) => {
  return {}
}

class _App extends Component {
  componentWillMount () {
    getGalleryItems()
  }

  render() {
    return (
      <div className="App">
        <div className="App-header">
          <img src={logo} className="App-logo" alt="logo" />
          <h2>Welcome to React</h2>
        </div>
        <p className="App-intro">
          To get started, edit <code>src/App.js</code> and save to reload.
        </p>
      </div>
    );
  }
}

const App = connect(
    mapStateToProps,
    mapDispatchToProps
)(_App)

export default App;
