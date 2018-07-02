import React, { Component } from 'react'
import { bindActionCreators } from 'redux'
import { fetchAsset } from '../../actions/actionCreators'
import contentful from 'contentful'
import { connect } from 'react-redux'

import './Main.css'

const videoIdDesktop = '4W5tCzutm8wWIUm0UCycug'
const videoIdMobile = '3mAqxQFH0kMcuOUWWm8y4a'
const mobileM4vMobile = '6bhYLv8KeQU04WWW6g6KmM'
const mobileOGG = '5NZNncAVgckyQmowWk2iYe'

const mapStateToProps = (state) => {
    return {
      video: state.video,
    }
  }
  
  const mapDispatchToProps = (dispatch) => {
    return {
      onGetAsset: (id) => {
        dispatch(fetchAsset(id))
      },
    }
  }

class _Main extends Component {
    componentDidMount () {
        if (!this.props.video.payload) {
            this.props.onGetAsset(mobileM4vMobile)
        }
    }
    render() {
        let videoUrl;
        if (this.props.video.payload) {
            videoUrl = this.props.video.payload.fields.file.url
        }
        return (
            <div className="videoContainer">
                <video loop autoPlay>
                    <source src="//videos.ctfassets.net/lb0qz1ons074/6bhYLv8KeQU04WWW6g6KmM/85a9fad33380907d3a070dfd1c910f9a/My_Movie_Mobile_mp4.m4v" type="video/mp4" />
                    <source src="//videos.ctfassets.net/lb0qz1ons074/5NZNncAVgckyQmowWk2iYe/340ff052b549c305cfae5a54c8b97efb/My_Movie_Mobile_ogg.ogg" type="video/ogg" />
                    Your browser does not support the video tag.
                </video>
            </div>
        )
    }
}

const Main = connect(
    mapStateToProps,
    mapDispatchToProps
)(_Main)

export default Main
