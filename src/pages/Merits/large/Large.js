import React, { Component } from 'react'
import { connect } from 'react-redux'
import { fetchAsset } from '../../../actions/actionCreators'
import goBusiness from '../assets/GoBusiness_triangle.jpg'
import skelleftea from '../assets/skelleftea_logo.png'

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
  logo: {
    height: '80px',
  },
  sectionHeader: {
    fontSize: '24px',
    marginBottom: '10px',
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
        <h2 style={styles.header}>Synts och hörts</h2>
        <div style={styles.articleWrapper}>
          <article style={styles.article}>
            <img style={styles.logo} src={goBusiness} alt="Go Business logo" />
            <p>Deltagare i Go Business Inkubatorprogram VT 2021</p>
            <img style={styles.logo} src={skelleftea} alt="Skelleftea logo" />
            <p>Finns med på Skellefteå kommuns konstnärslista</p>
            <h3 style={styles.sectionHeader}>2021</h3>
            <ul>
              <li>Jaktgården Långviken</li>
            </ul>
            <h3 style={styles.sectionHeader}>2020</h3>
            <ul>
              <li>Björkis Skellefteå</li>
              <li>Royal Hästsport</li>
              <li>Stavaträsk lanthandel</li>
            </ul>
            <h3 style={styles.sectionHeader}>2019</h3>
            <ul>
              <li>Västgård Game Fair</li>
              <li>Åre höstmarknad </li>
              <li>Jakt &amp; Trofe Boliden</li>
            </ul>
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
