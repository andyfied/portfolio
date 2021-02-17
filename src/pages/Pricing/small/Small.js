import React, { Component } from 'react'
import { connect } from 'react-redux'
import '../Pricing.css'
import { fetchAsset } from '../../../actions/actionCreators'
import { Link } from 'react-router-dom'

const styles = {
  pageContent: {
    paddingTop: '60px',
    paddingBottom: '20px',
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
  copyRight: {
    paddingTop: '10px',
    paddingBottom: '10px',
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
      this.props.onFetchAsset('5wMdHfXcqmkOahdJpfqBlQ')
    }
  }

  render() {
    let imageUrl = ''
    if (this.props.asset.Pricing_image3) {
      imageUrl = `${this.props.asset.Pricing_image3.fields.file.url}?fm=jpg&fl=progressive&w=800`
    }
    return (
      <div style={styles.pageContent}>
        <img style={styles.img} alt="About" src={imageUrl} />
        <section style={styles.mainSection}>
          <p style={styles.section}>
            Jag tecknar i en fotorealistisk stil med torrpasteller. Varje verk är unikt och tecknat utifrån dina
            önskemål som kund. Jag använder mig av material av högsta kvalitét och skapar hantverk som fångar, speglar
            och framhäver motivets specifika personlighet.
          </p>
          <h2>Priser</h2>
          <p style={styles.section}>
            Här ser du priset för ett par av de storlekar som jag erbjuder. Jag har valt att inkludera allting i ett
            paket för att göra det så enkelt som möjligt för dig som kund! en summa ink allt- en produkt som hängs
            direkt upp på väggen vid leverans. Enkelt!
          </p>
          <p style={styles.section}>
            Jag sköter inramning med måttanpassad syrafri passepartout, i en ram av trä eller aluminium med äkta glas.
            Jag konsulterar dig gärna kring val av referensfoto och upplägg av motiv och jag håller dig uppdaterad under
            arbetets gång. Jag erbjuder såklart en nöjd kund garanti där motivet alltid godkänns av dig som kund innan
            inramning och leverans sker.
          </p>
          <article className="card-view">
            <h3>40 x 50 cm</h3>
            <h4>
              <em>4700 SEK</em>
            </h4>
          </article>
          <article className="card-view">
            <h3>50 x 70 cm</h3>
            <h4>
              <em>7200 SEK</em>
            </h4>
          </article>
          <article className="card-view">
            <h3>70 x 100 cm</h3>
            <p>kontakta mig för individuell prissättning</p>
          </article>
          <h2>Presentkort</h2>
          <p style={styles.section}>
            Du kan även köpa presentkort hos mig, en uppskattad gåva där mottagaren själv får vara med under processens
            gång.
          </p>
          <h2>Frågor?</h2>
          <p style={styles.section}>
            Om du har önskemål om andra storlekar , vill ha mer information och prisuppgifter för just din tavla är du
            välkommen att{' '}
            <Link to="/contact" style={styles.link}>
              Kontakta
            </Link>{' '}
            mig.
          </p>
          <p>
            <em>
              &copy; Alla motiv är skyddade enligt upphovslagen. det är inte tillåtet att i något syfte använda bilderna
              i sitt namn, kopiera eller reproducera mina alster.
            </em>
          </p>
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
