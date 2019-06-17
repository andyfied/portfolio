import React, { Component } from 'react'
import { fetchGalleryItems } from '../../actions/actionCreators'
import { connect } from 'react-redux'
import { Carousel } from 'react-responsive-carousel'
import MediaQuery from 'react-responsive'
import breakpoints from '../../constants/breakpoints'

import Thumb from '../../components/Thumb'
import Review from '../../components/Review'

import './Gallery.css'
import 'react-responsive-carousel/lib/styles/carousel.min.css'

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

    if (this.props.portfolio.payload) {
      items = this.props.portfolio.payload.items
    }
    return (
      <div className="pageContent gallery">
        <MediaQuery maxWidth={breakpoints.MOBILE_BREAKPOINT}>
          <section className="small">
            <Carousel showArrows={false} showStatus={false} showThumbs={false}>
              {items.map((item, index) => (
                <div key={index}>
                  <img
                    alt={item.fields.thumb.fields.title}
                    src={`${item.fields.thumb.fields.file.url}?fl=progressive&w=800`}
                  />
                  {/*item.fields.review*/ false && <Review review={item.fields.review} />}
                </div>
              ))}
            </Carousel>
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
