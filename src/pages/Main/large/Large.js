import React, { Component } from 'react'
import { connect } from 'react-redux'

import './Large.css'
import background from './background.png'

const mapStateToProps = state => {
  return {}
}

const mapDispatchToProps = dispatch => {
  return {}
}

class _Large extends Component {
  render() {
    return (
      <div className="large">
        <div className="bg" style={{ backgroundImage: `url(${background})` }}>
          <div className="pageContent">
            <h1>byTherese</h1>
            <h2>Handmade paste portraits</h2>
          </div>
        </div>
      </div>
    )
  }
}

const Large = connect(
  mapStateToProps,
  mapDispatchToProps,
)(_Large)

export default Large
