import React, { Component } from 'react'
import { fetchGalleryItems, setShowCarousel, setSelectedImage, setShowNavigation } from '../../actions/actionCreators'
import { connect } from 'react-redux'
import MediaQuery from 'react-responsive'
import breakpoints from '../../constants/breakpoints'

import Thumb from '../../components/Thumb'
import Review from '../../components/Review'
import ImageModal from '../../components/ImageModal'

import './Gallery.css'

const styles = {
  wrapper: {
    display: 'flex',
    flexDirection: 'row',
    flexWrap: 'wrap',
    justifyContent: 'start',
  },
  thumbWrapperSmall: {
    width: 'calc(50% - 4px)',
    margin: '2px',
  },
  thumbWrapperLarge: {
    width: 'calc(25% - 4px)',
    margin: '2px',
  },
}

const mapStateToProps = state => {
  return {
    portfolio: state.portfolio,
    carousel: state.carousel,
  }
}

const mapDispatchToProps = dispatch => {
  return {
    onGetGalleryItems: () => {
      dispatch(fetchGalleryItems())
    },
    onSetShowCarousel: payload => {
      dispatch(setShowCarousel(payload))
    },
    onSetSelectedImage: payload => {
      dispatch(setSelectedImage(payload))
    },
    onSetShowNavigation: payload => {
      dispatch(setShowNavigation(payload))
    },
  }
}

class _Gallery extends Component {
  componentDidMount() {
    if (!this.props.portfolio.payload) {
      this.props.onGetGalleryItems()
    }
  }

  openCarousel = index => {
    this.props.onSetSelectedImage(index)
    this.props.onSetShowNavigation(false)
    this.props.onSetShowCarousel(true)
  }

  closeCarousel = () => {
    this.props.onSetShowCarousel(false)
    this.props.onSetShowNavigation(true)
  }

  render() {
    let items = []

    if (this.props.portfolio.payload) {
      items = this.props.portfolio.payload.items
    }
    return (
      <div className="pageContent gallery">
        <MediaQuery maxWidth={breakpoints.MOBILE_BREAKPOINT}>
          <section className="small" style={styles.wrapper}>
            {items.map((item, index) => (
              <div
                style={styles.thumbWrapperSmall}
                key={index}
                onClick={() => {
                  this.openCarousel(index)
                }}
              >
                <Thumb thumb={item.fields.thumb} width={400} height={400} />
              </div>
            ))}
          </section>
        </MediaQuery>
        <MediaQuery minWidth={breakpoints.DESKTOP_BREAKPOINT}>
          <section className="small" style={styles.wrapper}>
            {items.map((item, index) => (
              <div style={styles.thumbWrapperLarge} key={index}>
                <Thumb thumb={item.fields.thumb} width={800} height={800} />
              </div>
            ))}
          </section>
        </MediaQuery>
        <ImageModal
          images={items}
          isOpen={this.props.carousel.showCarousel}
          onClose={this.closeCarousel}
          selectedImage={this.props.carousel.selectedImage}
        />
      </div>
    )
  }
}

const Gallery = connect(
  mapStateToProps,
  mapDispatchToProps,
)(_Gallery)

export default Gallery
