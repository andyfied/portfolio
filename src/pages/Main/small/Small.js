import React, { Component } from 'react'
import { connect } from 'react-redux'

import './Small.css'
import background from './background.png'

const mapStateToProps = state => {
  return {}
}

const mapDispatchToProps = dispatch => {
  return {}
}

class _Small extends Component {
  render() {
    return (
      <div className="small">
        <div className="bg" style={{ backgroundImage: `url(${background})` }}>
          <div className="pageContent">
            <h2>Handmade paste portraits</h2>
            <h1>byTherese</h1>
          </div>
        </div>
      </div>
    )
  }
}

const Small = connect(
  mapStateToProps,
  mapDispatchToProps,
)(_Small)

export default Small
