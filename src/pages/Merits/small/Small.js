import React, { Component } from 'react'
import { connect } from 'react-redux'
import { fetchAsset } from '../../../actions/actionCreators'
import goBusiness from '../assets/GoBusiness_triangle.jpg'
import skelleftea from '../assets/skelleftea_logo.png'
import madsGallery from '../assets/mads_art_gallery.jpg'
import artAward from '../assets/art_award.png'

const styles = {
  article: {
    paddingLeft: '30px',
    paddingRight: '30px',
    paddingBottom: '15px',
  },
  img: {
    width: '100%',
  },
  sectionHeader: {
    fontSize: '24px',
    marginBottom: '10px',
  },
  logo: {
    height: '80px',
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

class _Small extends Component {
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
        <img style={styles.img} alt="Merits" src={imageUrl} />
        <article style={styles.article}>
          <h2>Synts och hörts</h2>
          <img style={{ height: '120px' }} src={artAward} alt="Collectors Vision International Art Award" />
          <p>Vinnare av Collectors Vision International Art Award 2021</p>
          <img style={{ height: '160px' }} src={madsGallery} alt="M.A.D.S Art Gallery Milano" />
          <p>International Art Exhibition GAIA The Origin, Milano</p>
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
      </div>
    )
  }
}

const Small = connect(
  mapStateToProps,
  mapDispatchToProps,
)(_Small)

export default Small
