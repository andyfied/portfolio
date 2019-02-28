import React from 'react'
import './Pricing.css'

const styles = {
  pageContent: {
    paddingTop: '60px',
    paddingLeft: '20px',
    paddingRight: '20px',
  },
  wrapper: {
    padding: '0 20px 0 20px',
  },
  section: {
    borderBottom: '3px solid #777777',
    textAlign: 'justify',
    paddingBottom: '20px',
  },
}

const Pricing = () => (
  <div style={styles.pageContent}>
    <h2>Custom Paintings</h2>
    <section style={styles.wrapper}>
      <p style={styles.section}>
        Prices below are approximated. They may vary depending on each individual image. A specific price will be set
        when taking contact.
      </p>
      <section style={styles.section}>
        <h2>40 x 50</h2>
        <p>1 custom panting of your pet, including a frame</p>
        <h2>3990 SEK</h2>
      </section>
      <section style={styles.section}>
        <h2>50 x 70</h2>
        <p>1 custom panting of your pet, including a frame</p>
        <h2>6990 SEK</h2>
      </section>
    </section>
  </div>
)

export default Pricing
