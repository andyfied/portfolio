import React from 'react'
import './About.css'
import bgImage from './mobile/assets/background.jpg'
import MediaQuery from 'react-responsive'
import breakpoints from '../../constants/breakpoints'

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
    <MediaQuery maxWidth={breakpoints.MOBILE_BREAKPOINT}>
      <img style={styles.img} alt="About" src={bgImage} />
      <article style={styles.article}>
        <h2>This is me</h2>
        <p className="font-about">
          For as long as I can remember, I have felt the need to create, to express myself through art. Being a creative
          mind, I love to capture moments, turn feelings into colours and share it with you through my paintings.
        </p>
        <p className="font-about">
          Today, I spend most of my time drawing in Stavalund, a family farm located deep into the northern Swedish
          woods. Surrounded by the nature and it’s stillness, this is where I find my peace and inspiration.
        </p>
        <p className="font-about">
          All of my paintings hold a foundation of nature, strength, calm and freedom. Those elements make the very core
          of my drawing – the wild and the free. With my portraits, I hope to mirror those souls and individuals so
          important to you and others they need to be forever kept in colour.
        </p>
        <p className="font-about">
          <i>/Therese Åhlund</i>
        </p>
      </article>
    </MediaQuery>
    <MediaQuery minWidth={breakpoints.DESKTOP_BREAKPOINT}>
      <div className="row">
        <div className="col">
          <div className="leftside">
            <h2>This is me</h2>
            <p className="font-about">
              For as long as I can remember, I have felt the need to create, to express myself through art. Being a
              creative mind, I love to capture moments, turn feelings into colours and share it with you through my
              paintings.
            </p>
            <p className="font-about">
              Today, I spend most of my time drawing in Stavalund, a family farm located deep into the northern Swedish
              woods. Surrounded by the nature and it’s stillness, this is where I find my peace and inspiration.
            </p>
            <p className="font-about">
              All of my paintings hold a foundation of nature, strength, calm and freedom. Those elements make the very
              core of my drawing – the wild and the free. With my portraits, I hope to mirror those souls and
              individuals so important to you and others they need to be forever kept in colour.
            </p>
            <p className="font-about-end">
              <i>/Therese Åhlund</i>
            </p>
          </div>
        </div>
        <div className="col">
          <div className="rightside" />
        </div>
        <div className="col">
          <div className="bottomright" />
        </div>
      </div>
    </MediaQuery>
  </div>
)

export default About
