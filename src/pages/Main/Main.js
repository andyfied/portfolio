import React, { Component } from 'react'
import { fetchAsset } from '../../actions/actionCreators'
import { connect } from 'react-redux'
import MediaQuery from 'react-responsive'
import breakpoints from '../../constants/breakpoints'

import Small from './small/Small'
import Large from './large/Large'

import './Main.css'

const videoIdDesktop = '4W5tCzutm8wWIUm0UCycug'
const videoIdMobile = '3mAqxQFH0kMcuOUWWm8y4a'
const mobileM4vMobile = '6bhYLv8KeQU04WWW6g6KmM'
const mobileOGG = '5NZNncAVgckyQmowWk2iYe'

const mapStateToProps = state => {
  return {
    video: state.video,
  }
}

const mapDispatchToProps = dispatch => {
  return {
    onGetAsset: id => {
      dispatch(fetchAsset(id))
    },
  }
}

class _Main extends Component {
  componentDidMount() {
    if (!this.props.video.payload) {
      this.props.onGetAsset(mobileM4vMobile)
    }
  }
  render() {
    let videoUrl
    if (this.props.video.payload) {
      videoUrl = this.props.video.payload.fields.file.url
    }
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
