import React, { Component } from 'react'
import { connect } from 'react-redux'
import './About.css'
import MediaQuery from 'react-responsive'
import breakpoints from '../../constants/breakpoints'
import { fetchAsset } from '../../actions/actionCreators'

const styles = {
  article: {
    paddingLeft: '30px',
    paddingRight: '30px',
  },
  img: {
    width: '100%',
  },
}

const mapStateToProps = state => {
  return {
    asset: state.asset,
  }
}

const mapDispatchToProps = dispatch => {
  return {
    onFetchAsset: id => {
      dispatch(fetchAsset(id))
    },
  }
}

class _About extends Component {
  componentDidMount() {
    if (!this.props.asset.payload) {
      this.props.onFetchAsset('1azTxIL4DQw5mwAk3t1bTJ')
    }
  }

  render() {
    let imageUrl = ''
    if (this.props.asset.Pricing_closeup) {
      imageUrl = `${this.props.asset.Pricing_closeup.fields.file.url}?fm=jpg&fl=progressive&w=800`
    }
    return (
      <div className="pageContent">
        <MediaQuery maxWidth={breakpoints.MOBILE_BREAKPOINT}>
          <img style={styles.img} alt="About" src={imageUrl} />
          <article style={styles.article}>
            <h2>This is me</h2>
            <p className="font-about">
              For as long as I can remember, I have felt the need to create, to express myself through art. Being a
              creative mind, I love to capture moments, turn feelings into colours and share it with you through my
              paintings.
            </p>
            <p className="font-about">
              Today, I spend most of my time drawing in Stavalund, a family farm located deep into the northern Swedish
              woods. Surrounded by the nature and it’s stillness, this is where I find my peace and inspiration.
            </p>
            <p className="font-about">
              All of my paintings hold a foundation of nature, strength, calm and freedom. Those elements make the very
              core of my drawing – the wild and the free. With my portraits, I hope to mirror those souls and
              individuals so important to you and others they need to be forever kept in colour.
            </p>
            <p className="font-about">
              <i>/Therese Åhlund</i>
            </p>
          </article>
        </MediaQuery>
        <MediaQuery minWidth={breakpoints.DESKTOP_BREAKPOINT}>
          <div className="row">
            <div className="col">
              <div className="leftside">
                <h2>This is me</h2>
                <p className="font-about">
                  For as long as I can remember, I have felt the need to create, to express myself through art. Being a
                  creative mind, I love to capture moments, turn feelings into colours and share it with you through my
                  paintings.
                </p>
                <p className="font-about">
                  Today, I spend most of my time drawing in Stavalund, a family farm located deep into the northern
                  Swedish woods. Surrounded by the nature and it’s stillness, this is where I find my peace and
                  inspiration.
                </p>
                <p className="font-about">
                  All of my paintings hold a foundation of nature, strength, calm and freedom. Those elements make the
                  very core of my drawing – the wild and the free. With my portraits, I hope to mirror those souls and
                  individuals so important to you and others they need to be forever kept in colour.
                </p>
                <p className="font-about-end">
                  <i>/Therese Åhlund</i>
                </p>
              </div>
            </div>
            <div className="col">
              <div className="rightside" />
            </div>
            <div className="col">
              <div className="bottomright" />
            </div>
          </div>
        </MediaQuery>
      </div>
    )
  }
}

const About = connect(
  mapStateToProps,
  mapDispatchToProps,
)(_About)

export default About
