import React from 'react'
import './Pricing.css'
import bgImage from './header-img.jpg'
import MediaQuery from 'react-responsive'
import breakpoints from '../../constants/breakpoints'

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
    <MediaQuery maxWidth={breakpoints.MOBILE_BREAKPOINT}>
      <img className="header-img" alt="About" src={bgImage} />
      <h2>Customized Paintings</h2>
      <section>
        <p style={styles.section}>
          Prices may vary due to size, theme etc. To get an exact price for your customized painting, please send me
          some information about the order you want to place.
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
    </MediaQuery>
    <MediaQuery minWidth={breakpoints.DESKTOP_BREAKPOINT}>
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
    </MediaQuery>
  </div>
)

export default Pricing
