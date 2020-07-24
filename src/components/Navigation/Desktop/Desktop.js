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
      <MenuItem className="menuItem">Hem</MenuItem>
    </Link>
    <Link to="/gallery">
      <MenuItem className="menuItem">Galleri</MenuItem>
    </Link>
    <Link to="/about">
      <MenuItem className="menuItem">Om mig</MenuItem>
    </Link>
    <Link to="/pricing">
      <MenuItem className="menuItem">Priser</MenuItem>
    </Link>
    <Link to="/contact">
      <MenuItem className="menuItem">Kontakt</MenuItem>
    </Link>
  </nav>
)

export default Desktop
