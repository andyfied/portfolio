import React, { Component } from 'react'
import { connect } from 'react-redux'
import '../Pricing.css'
import { fetchAsset } from '../../../actions/actionCreators'

const styles = {
  pageContent: {
    paddingLeft: '30px',
    paddingRight: '30px',
    paddingTop: '60px',
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
  header: {
    fontSize: '54px',
    fontWeight: '100',
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
      this.props.onFetchAsset('3yYaV7A74chc0YvgKi9klA')
    }
  }

  render() {
    let imageUrl = ''
    if (this.props.asset.Pricing_image1) {
      imageUrl = `${this.props.asset.Pricing_image1.fields.file.url}?fm=jpg&fl=progressive&w=800`
    }
    return (
      <div style={styles.pageContent}>
        <h2 style={styles.header}>Customized Drawings</h2>
        <div className="row">
          <div className="col">
            <img className="header-img-desktop" alt="About" src={imageUrl} />
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
    )
  }
}

const Large = connect(
  mapStateToProps,
  mapDispatchToProps,
)(_Large)

export default Large
