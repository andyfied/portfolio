import React, { Component } from 'react'
import { connect } from 'react-redux'
import { fetchMainImage } from '../../../actions/actionCreators'

import './Large.css'

const mapStateToProps = state => {
  return {
    main: state.main,
  }
}

const mapDispatchToProps = dispatch => {
  return {
    onFetchMainImage: () => {
      dispatch(fetchMainImage())
    },
  }
}

class _Large extends Component {
  componentDidMount() {
    if (!this.props.main.payload) {
      this.props.onFetchMainImage()
    }
  }

  render() {
    let imageUrl = ''
    if (this.props.main.payload) {
      imageUrl = `${this.props.main.payload.items[0].fields.desktop.fields.file.url}?fm=jpg&fl=progressive&w=1600`
    }
    return (
      <div className="large">
        <div className="bg" style={{ backgroundImage: `url(${imageUrl})` }}>
          <div className="pageContent">
            <h1>byTherese</h1>
            <h2>Handmade paste portraits</h2>
          </div>
        </div>
      </div>
    )
  }
}

const Large = connect(
  mapStateToProps,
  mapDispatchToProps,
)(_Large)

export default Large
