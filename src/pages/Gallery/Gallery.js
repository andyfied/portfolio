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
    let itemsLength = 0

    if (this.props.portfolio.payload) {
      items = this.props.portfolio.payload.items
      itemsLength = items.length
    }
    return (
      <div className="pageContent gallery">
        <MediaQuery maxWidth={breakpoints.MOBILE_BREAKPOINT}>
          <section className="small" style={styles.wrapper}>
            {items.map((item, index) => (
              <div style={styles.thumbWrapperSmall} key={index}>
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
      </div>
    )
  }
}

const Gallery = connect(
  mapStateToProps,
  mapDispatchToProps,
)(_Gallery)

export default Gallery
