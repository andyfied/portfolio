import React, { Component } from 'react'
import { bindActionCreators } from 'redux'
import { connect } from 'react-redux'
import { setShowNavigation } from '../../actions/actionCreators'
import MediaQuery from 'react-responsive';
import './Navigation.css'

import Desktop from './Desktop'
import Mobile from './Mobile'

const mapStateToProps = (state) => {
    return {
        navigation: state.navigation,
    }
}
  
const mapDispatchToProps = (dispatch) => {
    return {
        onSetShowNavigation: (showNavigation) => {
            dispatch(setShowNavigation(showNavigation))
        },
    }
}

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
        return window.scrollY < this.lastScrollPosition
    }

    isScrollingDown() {
        return window.scrollY > this.lastScrollPosition
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
            <header
                style={ showNavigation ? this.style.visible : this.style.hidden }
            >
                <MediaQuery maxWidth={768}>
                    <Mobile />
                </MediaQuery>
                <MediaQuery minWidth={768}>
                    <Desktop />
                </MediaQuery>
            </header>
        )
    }
}

const Navigation = connect(
    mapStateToProps,
    mapDispatchToProps
)(_Navigation)


export default Navigation