import React, { Component } from 'react'
import { connect } from 'react-redux'
import '../Pricing.css'
import { fetchAsset } from '../../../actions/actionCreators'
import { Link } from 'react-router-dom'

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
    paddingBottom: '10px',
  },
  img: {
    width: '100%',
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

class _Small extends Component {
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
        <img style={styles.img} alt="About" src={imageUrl} />
        <section style={styles.mainSection}>
          <h2>Priser</h2>
          <p style={styles.section}>
            Jag tecknar i en fotorealistisk stil med torrpasteller. Varje verk är unikt och tecknat utifrån dina
            önskemål som kund. Jag använder mig av material av högsta kvalitét och skapar hantverk som fångar, speglar
            och framhäver motivets specifika personlighet.
          </p>
          <p style={styles.section}>
            Priserna utgår ifrån en individ och individuella priser sätts vid tillägg av bakgrund, flera individer eller
            teman.
          </p>
          <p style={styles.section}>
            <Link to="/contact" style={styles.link}>
              Kontakta
            </Link>{' '}
            mig för mer information och prisuppgifter för just din tavla.
          </p>
          <section className="card-view">
            <h3>40 x 50 cm</h3>
            <h4>
              <em>Från 4499 SEK</em>
            </h4>
            <p>
              <em>Inklusive inramning.</em>
            </p>
          </section>
          <section className="card-view">
            <h3>50 x 70 cm</h3>
            <h4>
              <em>Från 6999 SEK</em>
            </h4>
            <p>
              <em>Inklusive inramning.</em>
            </p>
          </section>
        </section>
      </div>
    )
  }
}

const Small = connect(
  mapStateToProps,
  mapDispatchToProps,
)(_Small)

export default Small
