import React, { Component } from 'react'
import { connect } from 'react-redux'
import '../Pricing.css'
import { fetchAsset } from '../../../actions/actionCreators'
import { Link } from 'react-router-dom'

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
  wrapper: {
    display: 'flex',
    flexDirection: 'row',
    justifyContent: 'flex-start',
  },
  columnLeft: {
    flex: '0 0 50%',
    paddingRight: '45px',
  },
  columnRight: {
    flex: '0 0 50%',
    paddingLeft: '45px',
  },
  link: {
    color: 'inherit',
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
        <h2 style={styles.header}>Priser</h2>
        <div style={styles.wrapper}>
          <div style={styles.columnLeft}>
            <img className="header-img-desktop" alt="About" src={imageUrl} />
            <p style={styles.section}>
              Jag tecknar i en fotorealistisk stil med torrpasteller. Varje verk är unikt och tecknat utifrån dina
              önskemål som kund. Jag använder mig av material av högsta kvalitét och skapar hantverk som fångar, speglar
              och framhäver motivets specifika personlighet.
            </p>
            <p style={styles.section}>
              Priserna utgår ifrån en individ och individuella priser sätts vid tillägg av bakgrund, flera individer
              eller teman.
            </p>
            <p style={styles.section}>
              <Link to="/contact" style={styles.link}>
                Kontakta
              </Link>{' '}
              mig för mer information och prisuppgifter för just din tavla.
            </p>
          </div>

          <div style={styles.columnRight}>
            <div className="card-view-desktop">
              <h3>40 x 50 cm</h3>
              <h4>
                <em>Från 4499 SEK</em>
              </h4>
              <p>
                <em>Inklusive inramning.</em>
              </p>
            </div>
            <div className="card-view-desktop">
              <h3>50 x 70 cm</h3>
              <h4>
                <em>Från 6999 SEK</em>
              </h4>
              <p>
                <em>Inklusive inramning.</em>
              </p>
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
