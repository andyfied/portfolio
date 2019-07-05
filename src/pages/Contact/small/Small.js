import React from 'react'

import instagram from '../assets/instagram.svg'
import facebook from '../assets/facebook.svg'
import email from '../assets/email.svg'

const styles = {
  wrapper: {
    paddingTop: '60px',
    paddingLeft: '30px',
    paddingRight: '30px',
  },
  contactWrapper: {
    margin: '31px 0 31px 0',
  },
  img: {
    width: '35px',
    height: '35px',
    marginRight: '20px',
  },
  link: {
    color: '#777777',
    textDecoration: 'none',
    display: 'flex',
    alignItems: 'center',
  },
}

const Small = () => (
  <div style={styles.wrapper}>
    <h2>Contact</h2>
    <p>To find out more, place a customized order or buy any of my current paintings, please contact me at:</p>

    <div style={styles.contactWrapper}>
      <a href="https://www.instagram.com/bytherese.art/" target="_blank" style={styles.link}>
        <img style={styles.img} alt="instagram" src={instagram} />
        <div>@byTherese.art</div>
      </a>
    </div>
    <div style={styles.contactWrapper}>
      <a
        href="https://www.facebook.com/pages/category/Art/ByTherese-603871559947894/"
        target="_blank"
        style={styles.link}
      >
        <img style={styles.img} alt="facebook" src={facebook} />
        &#47;byTherese
      </a>
    </div>
    <div style={styles.contactWrapper}>
      <a href="mailto:byTherese@gmail.com" style={styles.link}>
        <img style={styles.img} alt="email" src={email} />
        byTherese@gmail.com
      </a>
    </div>
  </div>
)

export default Small
