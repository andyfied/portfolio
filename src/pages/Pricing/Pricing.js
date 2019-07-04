import React, { Component } from 'react'
import { connect } from 'react-redux'
import './Pricing.css'
import bgImage from './header-img.jpg'
import MediaQuery from 'react-responsive'
import breakpoints from '../../constants/breakpoints'
import { fetchAsset } from '../../actions/actionCreators'

const styles = {
  pageContent: {
    paddingTop: '60px',
    backgroundColor: '#f1f1f1',
  },
  mainSection: {
    paddingLeft: '30px',
    paddingRight: '30px',
  },
  section: {
    textAlign: 'justify',
    paddingBottom: '20px',
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

class _Pricing extends Component {
  componentDidMount() {
    if (!this.props.asset.payload) {
      this.props.onFetchAsset('3yYaV7A74chc0YvgKi9klA')
    }
  }

  render() {
    let imageUrl = ''
    if (this.props.asset.Pricing_image1) {
      imageUrl = `${this.props.asset.Pricing_image1.fields.file.url}?fm=jpg&fl=progressive&w=800`
    }
    return (
      <div>
        <MediaQuery maxWidth={breakpoints.MOBILE_BREAKPOINT}>
          <div style={styles.pageContent}>
            <img style={styles.img} alt="About" src={imageUrl} />
            <section style={styles.mainSection}>
              <h2>Customized Paintings</h2>
              <p style={styles.section}>
                Prices may vary due to size, theme etc. To get an exact price for your customized painting, please send
                me some information about the order you want to place.
              </p>
              <section className="card-view">
                <h3>40 x 50 cm</h3>
                <h4>
                  <em>From 3999 SEK</em>
                </h4>
                <p>
                  <em>Includes framing</em>
                </p>
              </section>
              <section className="card-view">
                <h3>50 x 70 cm</h3>
                <h4>
                  <em>From 6499 SEK</em>
                </h4>
                <p>
                  <em>Includes framing</em>
                </p>
              </section>
            </section>
          </div>
        </MediaQuery>
        <MediaQuery minWidth={breakpoints.DESKTOP_BREAKPOINT}>
          <div style={styles.pageContent}>
            <h2>Customized Paintings</h2>
            <div className="row">
              <div className="col">
                <img className="header-img-desktop" alt="About" src={bgImage} />
                <div className="rightside-desktop">
                  <div className="card-view-desktop">
                    <h3>40 x 50 cm</h3>
                    <h4>
                      <em>From 3999 SEK</em>
                    </h4>
                    <p>
                      <em>Includes framing</em>
                    </p>
                  </div>
                  <div className="card-view-desktop">
                    <h3>50 x 70 cm</h3>
                    <h4>
                      <em>From 6499 SEK</em>
                    </h4>
                    <p>
                      <em>Includes framing</em>
                    </p>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </MediaQuery>
      </div>
    )
  }
}

const Pricing = connect(
  mapStateToProps,
  mapDispatchToProps,
)(_Pricing)

export default Pricing
