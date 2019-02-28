import React, { Component } from 'react'
import { connect } from 'react-redux'
import MediaQuery from 'react-responsive'
import breakpoints from '../../constants/breakpoints'

import Small from './small/Small'
import Large from './large/Large'

const mapStateToProps = state => {
  return {}
}

const mapDispatchToProps = dispatch => {
  return {}
}

class _Main extends Component {
  render() {
    return (
      <div className="main">
        <MediaQuery maxWidth={breakpoints.MOBILE_BREAKPOINT}>
          <Small />
        </MediaQuery>
        <MediaQuery minWidth={breakpoints.DESKTOP_BREAKPOINT}>
          <Large />
        </MediaQuery>
      </div>
    )
  }
}

const Main = connect(
  mapStateToProps,
  mapDispatchToProps,
)(_Main)

export default Main
