import React, { Component } from 'react'
import { fetchGalleryItems } from '../../actions/actionCreators'
import { connect } from 'react-redux'
import Slider from 'react-slick'
import MediaQuery from 'react-responsive'
import breakpoints from '../../constants/breakpoints'

import Thumb from '../../components/Thumb'

import './Gallery.css'

const mapStateToProps = state => {
  return {
    portfolio: state.portfolio,
  }
}

const mapDispatchToProps = dispatch => {
  return {
    onGetGalleryItems: () => {
      dispatch(fetchGalleryItems())
    },
  }
}

class _Gallery extends Component {
  componentDidMount() {
    if (!this.props.portfolio.payload) {
      this.props.onGetGalleryItems()
    }
  }
  render() {
    let items = []

    const settings = {
      dots: true,
      infinite: true,
      speed: 300,
      slidesToShow: 1,
      slidesToScroll: 1,
      lazyLoad: 'progressive',
    }

    if (this.props.portfolio.payload) {
      items = this.props.portfolio.payload.items
    }
    return (
      <div className="pageContent gallery">
        <h1>Gallery</h1>
        <MediaQuery maxWidth={breakpoints.MOBILE_BREAKPOINT}>
          <section className="small">
            <Slider {...settings}>
              {items.map((item, index) => (
                <div>
                  <Thumb key={index} item={item} width={400} />
                </div>
              ))}
            </Slider>
          </section>
        </MediaQuery>
        <MediaQuery minWidth={breakpoints.DESKTOP_BREAKPOINT}>
          <section>
            {items.map((item, index) => (
              <Thumb key={index} item={item} width={400} height={400} />
            ))}
          </section>
        </MediaQuery>
      </div>
    )
  }
}

const Gallery = connect(
  mapStateToProps,
  mapDispatchToProps,
)(_Gallery)

export default Gallery
