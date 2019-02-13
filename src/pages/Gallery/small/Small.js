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
    return <div>TEST</div>
  }
}

const Small = connect(
  mapStateToProps,
  mapDispatchToProps,
)(_Small)

export default Small
