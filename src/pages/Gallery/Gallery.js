import React, { Component } from 'react'
import { fetchGalleryItems } from '../../actions/actionCreators'
import { connect } from 'react-redux'
import MediaQuery from 'react-responsive'
import breakpoints from '../../constants/breakpoints'

import Thumb from '../../components/Thumb'

import './Gallery.css'


const mapStateToProps = (state) => {
    return {
      portfolio: state.portfolio,
    }
  }
  
  const mapDispatchToProps = (dispatch) => {
    return {
      onGetGalleryItems: () => {
        dispatch(fetchGalleryItems())
      },
    }
  }

class _Gallery extends Component {
    componentDidMount () {
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
            <div className="pageContent">
                <h1>Gallery</h1>
                <section className="grid">
                <MediaQuery maxWidth={breakpoints.MOBILE_BREAKPOINT}>
                    {
                        items.map((item, index) => (
                        <Thumb
                            key={index}
                            item={item}
                            width={200}
                            height={200}
                        />
                        ))
                    }
                </MediaQuery>
                <MediaQuery minWidth={breakpoints.DESKTOP_BREAKPOINT}>
                    {
                        items.map((item, index) => (
                        <Thumb
                            key={index}
                            item={item}
                            width={400}
                            height={400}
                        />
                        ))
                    }
                </MediaQuery>
                </section>
            </div>
        )
    }
}

const Gallery = connect(
    mapStateToProps,
    mapDispatchToProps
)(_Gallery)

export default Gallery
