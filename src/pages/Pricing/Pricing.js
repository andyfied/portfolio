import React from 'react'
import './Pricing.css'

const styles = {
  pageContent: {
    paddingTop: '60px',
    paddingLeft: '30px',
    paddingRight: '30px',
  },
  section: {
    borderBottom: '1px solid #777777',
    textAlign: 'justify',
    paddingBottom: '20px',
  },
}

const Pricing = () => (
  <div style={styles.pageContent}>
    <h2>Custom Paintings</h2>
    <section>
      <p style={styles.section}>
        Prices below are approximated. They may vary depending on each individual image. A specific price will be set
        when taking contact.
      </p>
      <section style={styles.section}>
        <h3>40 x 50</h3>
        <p>1 custom panting of your pet, including a frame</p>
        <h4>3990 SEK</h4>
      </section>
      <section style={styles.section}>
        <h3>50 x 70</h3>
        <p>1 custom panting of your pet, including a frame</p>
        <h4>6990 SEK</h4>
      </section>
    </section>
  </div>
)

export default Pricing
