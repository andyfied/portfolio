import React, { Component } from 'react';
import { bindActionCreators } from 'redux'
import { fetchGalleryItems } from './actions/actionCreators'
import logo from './logo.svg';
import './App.css';

import contentful from 'contentful'
import { connect } from 'react-redux'

const mapStateToProps = (state) => {
  return {
    
  }
}

const mapDispatchToProps = (dispatch) => {
  //return bindActionCreators(actionCreators, dispatch)
  return {
    onGetGalleryItems: () => {
      console.log("get gallery items")
      dispatch(fetchGalleryItems())
    },
  }
}

class _App extends Component {
  componentWillMount () {
    this.props.onGetGalleryItems()
  }

  render() {
    return (
      <h1>Hello wooorld!</h1>
    );
  }
}

const App = connect(
    mapStateToProps,
    mapDispatchToProps
)(_App)

export default App;
