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
    return <div>LARGE</div>
  }
}

const Large = connect(
  mapStateToProps,
  mapDispatchToProps,
)(_Large)

export default Large
