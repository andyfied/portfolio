import React, { Component } from 'react';
import { bindActionCreators } from 'redux'
import { fetchGalleryItems } from './actions/actionCreators'
import logo from './logo.svg';
import './App.css';
import PortfolioItem from './components/PortfolioItem'

import contentful from 'contentful'
import { connect } from 'react-redux'

const mapStateToProps = (state) => {
  return {
    portfolio: state.portfolio,
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
  componentDidMount () {
    this.props.onGetGalleryItems()
  }

  render() {

    let items = []

    if (this.props.portfolio.payload) {
      items = this.props.portfolio.payload.items
    }

    return (
      <div>
        <h1>Hello wooorld!</h1>
        {
          items.map((item, index) => (
            <PortfolioItem
              key={index}
              item={item}
            />
          ))
        }
      </div>
    )
  }
}

const App = connect(
    mapStateToProps,
    mapDispatchToProps
)(_App)

export default App;
