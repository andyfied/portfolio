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
        For as long as I can remember, I have felt the need to create, to express myself through art. Being a creative
        mind, I love to capture moments, turn feelings into colours and share it with you through my paintings.
      </p>
      <p>
        Today, I spend most of my time drawing in Stavalund, a family farm located deep into the northern Swedish woods.
        Surrounded by the nature and it’s stillness, this is where I find my peace and inspiration.
      </p>
      <p>
        All of my paintings hold a foundation of nature, strength, calm and freedom. Those elements make the very core
        of my drawing – the wild and the free. With my portraits, I hope to mirror those souls and individuals so
        important to you and others they need to be forever kept in colour.
      </p>
      <p>
        <i>/Therese Åhlund</i>
      </p>
    </article>
  </div>
)

export default About
