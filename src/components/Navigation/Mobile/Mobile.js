import React, { Component } from 'react'
import { bindActionCreators } from 'redux'
import { connect } from 'react-redux'
import { setShowDrawer } from '../../../actions/actionCreators'
import SwipeableDrawer from '@material-ui/core/SwipeableDrawer'
import IconButton from '@material-ui/core/IconButton'
import MenuIcon from '@material-ui/icons/Menu'
import CloseIcon from '@material-ui/icons/Close'
import { Link } from 'react-router-dom'

import './Mobile.css'

const mapStateToProps = (state) => {
    return {
        drawer: state.drawer,
    }
}
  
const mapDispatchToProps = (dispatch) => {
    return {
        onSetShowDrawer: (showNavigation) => {
            dispatch(setShowDrawer(showNavigation))
        },
    }
}

class _Mobile extends Component {
    render() {
        const showDrawer = this.props.drawer.payload
        return (
            <div>
                <IconButton
                    color="inherit"
                    aria-label="open drawer"
                    onClick={() => {this.props.onSetShowDrawer(true)}}
                >
                    <MenuIcon />
                </IconButton>
                <SwipeableDrawer
                    open={showDrawer}
                    onClose={() => {this.props.onSetShowDrawer(false)}}
                    onOpen={() => {this.props.onSetShowDrawer(true)}}
                >
                    <div className="menuTop">
                        <IconButton
                            color="inherit"
                            aria-label="open drawer"
                            onClick={() => {this.props.onSetShowDrawer(false)}}
                        >
                            <CloseIcon />
                        </IconButton>
                    </div>
                    <nav className="menuContent">
                        <Link to="/gallery">Gallery</Link>
                        <Link to="/about">About byTherese</Link>
                        <Link to="/pricing">Pricing</Link>
                        <Link to="/contact">Contact</Link>
                    </nav>
                </SwipeableDrawer>
            </div>
        )
        
    }
}

const Mobile = connect(
    mapStateToProps,
    mapDispatchToProps
)(_Mobile)

export default Mobile
