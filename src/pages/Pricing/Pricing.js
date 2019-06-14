import React from 'react'
import './Pricing.css'
import bgImage from './header-img.jpg'

const styles = {
  pageContent: {
    paddingTop: '60px',
    paddingLeft: '30px',
    paddingRight: '30px',
    backgroundColor: '#f1f1f1',
  },
  section: {
    textAlign: 'justify',
    paddingBottom: '20px',
  },
  img: {
    marginTop: '2%',
    width: '100%',
  },
}

const Pricing = () => (
  <div style={styles.pageContent}>
    <img className="header-img" alt="About" src={bgImage} />
    <h2>Customized Paintings</h2>
    <section>
      <p style={styles.section}>
        Prices may vary due to size, theme etc. To get an exact price for your customized painting, please send me some
        information about the order you want to place.
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
)

export default Pricing
