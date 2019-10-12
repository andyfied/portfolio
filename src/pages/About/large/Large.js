import React, { Component } from 'react'
import { connect } from 'react-redux'
import '../About.css'
import { fetchAsset } from '../../../actions/actionCreators'

const styles = {
  article: {
    paddingLeft: '30px',
    paddingRight: '30px',
  },
  wrapper: {
    paddingTop: '60px',
  },
  header: {
    fontSize: '54px',
    fontWeight: '100',
    paddingLeft: '30px',
  },
  articleWrapper: {
    display: 'flex',
    flexDirection: 'row',
    justifyContent: 'flex-start',
  },
  article: {
    width: '40%',
    paddingLeft: '30px',
    paddingRight: '30px',
  },
  imgContainer: {
    width: '60%',
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

class _Large extends Component {
  componentDidMount() {
    if (!this.props.asset.payload) {
      this.props.onFetchAsset('1azTxIL4DQw5mwAk3t1bTJ')
    }
  }

  render() {
    let topImageUrl = ''
    if (this.props.asset.Pricing_closeup) {
      topImageUrl = `${this.props.asset.Pricing_closeup.fields.file.url}?fm=jpg&fl=progressive&w=800`
    }
    return (
      <div style={styles.wrapper}>
        <h2 style={styles.header}>This is me</h2>
        <div style={styles.articleWrapper}>
          <article style={styles.article}>
            <p className="font-about">
              For as long as I can remember, I have felt the need to create, to express myself through art. Being a
              creative mind, I love to capture moments, turn feelings into colours and share it with you through my
              drawings.
            </p>
            <p className="font-about">
              Today, I spend most of my time drawing in Stavalund, a family farm located deep into the northern Swedish
              woods. Surrounded by the nature and it’s stillness, this is where I find my peace and inspiration.
            </p>
            <p className="font-about">
              All of my drawings hold a foundation of nature, strength, calm and freedom. Those elements make the very
              core of my drawing – the wild and the free. With my portraits, I hope to mirror those souls and
              individuals so important to you and others they need to be forever kept in colour.
            </p>
            <p className="font-about-end">
              <i>/Therese Åhlund</i>
            </p>
          </article>
          <div style={styles.imgContainer}>
            <div
              style={{ backgroundImage: `url(${topImageUrl})`, backgroundSize: 'cover', width: '100%', height: '100%' }}
            />
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
