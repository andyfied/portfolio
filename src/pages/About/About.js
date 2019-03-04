import React from 'react'
import './About.css'
import bgImage from './mobile/assets/background.jpg'

const styles = {
  article: {
    paddingLeft: '30px',
    paddingRight: '30px',
  },
  img: {
    width: '100%',
  },
}

const About = () => (
  <div className="pageContent">
    <img style={styles.img} alt="About" src={bgImage} />
    <article style={styles.article}>
      <h2>About</h2>
      <p>
        Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore
        magna aliqua. At auctor urna nunc id cursus metus aliquam eleifend. Luctus accumsan tortor posuere ac ut.
        Commodo odio aenean sed adipiscing diam. In ornare quam viverra orci.
      </p>
      <p>
        Lacus sed viverra tellus in hac habitasse platea dictumst. Feugiat sed lectus vestibulum mattis ullamcorper
        velit sed ullamcorper. Duis ut diam quam nulla.
      </p>
      <p>
        Egestas purus viverra accumsan in. Lorem donec massa sapien faucibus et. Tincidunt ornare massa eget egestas.
        Faucibus purus in massa tempor nec feugiat nisl. Condimentum lacinia quis vel eros donec. Quam vulputate
        dignissim suspendisse in est. Mollis aliquam ut porttitor leo a diam sollicitudin.
      </p>
    </article>
  </div>
)

export default About
