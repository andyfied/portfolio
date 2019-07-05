import React from 'react'
import { Link } from 'react-router-dom'
import MenuItem from '@material-ui/core/MenuItem'

import './Desktop.css'

const styles = {
  header: {
    fontSize: '30px',
    paddingLeft: '30px',
    flex: '1',
  },
}

const Desktop = () => (
  <nav className="large">
    <h1 style={styles.header}>byTherese</h1>
    <Link to="/">
      <MenuItem className="menuItem">Home</MenuItem>
    </Link>
    <Link to="/gallery">
      <MenuItem className="menuItem">Gallery</MenuItem>
    </Link>
    <Link to="/about">
      <MenuItem className="menuItem">About</MenuItem>
    </Link>
    <Link to="/pricing">
      <MenuItem className="menuItem">Pricing</MenuItem>
    </Link>
    <Link to="/contact">
      <MenuItem className="menuItem">Contact</MenuItem>
    </Link>
  </nav>
)

export default Desktop
