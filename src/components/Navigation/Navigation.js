import React, { Component } from 'react'
import { connect } from 'react-redux'
import { setShowNavigation } from '../../actions/actionCreators'
import MediaQuery from 'react-responsive'
import breakpoints from '../../constants/breakpoints'
import './Navigation.css'

import Desktop from './Desktop'
import Mobile from './Mobile'

const mapStateToProps = state => {
  return {
    navigation: state.navigation,
  }
}

const mapDispatchToProps = dispatch => {
  return {
    onSetShowNavigation: showNavigation => {
      dispatch(setShowNavigation(showNavigation))
    },
  }
}

const scrollBuffert = 5

const navHeight = 60

class _Navigation extends Component {
  constructor() {
    super()
    this.timer
    this.lastScrollPosition = 0

    this.style = {
      hidden: {
        height: '0',
        overflow: 'hidden',
      },
      visible: {
        height: `${navHeight}px`,
      },
    }
  }

  componentDidMount() {
    window.addEventListener('scroll', this.handleScroll.bind(this))
  }

  componentWillUnmount() {
    window.removeEventListener('scroll')
  }

  isScrollingUp() {
    return window.scrollY < this.lastScrollPosition - scrollBuffert
  }

  isScrollingDown() {
    return window.scrollY > this.lastScrollPosition + scrollBuffert
  }

  handleScroll() {
    if (this.isScrollingUp()) {
      this.props.onSetShowNavigation(true)
    } else if (this.isScrollingDown() && window.scrollY > navHeight) {
      this.props.onSetShowNavigation(false)
    }

    this.lastScrollPosition = window.scrollY
  }

  render() {
    const showNavigation = this.props.navigation.payload
    return (
      <header className="menu" style={showNavigation ? this.style.visible : this.style.hidden}>
        <MediaQuery maxWidth={breakpoints.MOBILE_BREAKPOINT}>
          <Mobile />
        </MediaQuery>
        <MediaQuery minWidth={breakpoints.DESKTOP_BREAKPOINT}>
          <Desktop />
        </MediaQuery>
      </header>
    )
  }
}

const Navigation = connect(
  mapStateToProps,
  mapDispatchToProps,
)(_Navigation)

export default Navigation
