import React, { Component } from 'react'
import { connect } from 'react-redux'
import { fetchMainImage } from '../../../actions/actionCreators'

import './Small.css'

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

class _Small extends Component {
  componentDidMount() {
    if (!this.props.main.payload) {
      this.props.onFetchMainImage()
    }
  }

  render() {
    let imageUrl = ''
    if (this.props.main.payload) {
      imageUrl = `${this.props.main.payload.items[0].fields.mobile.fields.file.url}?fm=jpg&fl=progressive&w=800`
    }
    return (
      <div className="small">
        <div className="bg" style={{ backgroundImage: `url(${imageUrl})` }}>
          <div className="pageContent">
            <h2>Handgjorda pastellporträtt</h2>
            <h1>byTherese</h1>
          </div>
        </div>
      </div>
    )
  }
}

const Small = connect(
  mapStateToProps,
  mapDispatchToProps,
)(_Small)

export default Small
