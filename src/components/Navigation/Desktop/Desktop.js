import React from 'react'
import { Link } from 'react-router-dom'
import MenuItem from '@material-ui/core/MenuItem'

import './Desktop.css'

const Desktop = () => (
    <nav>
        <Link to="/"><MenuItem>Home</MenuItem></Link>
        <Link to="/gallery"><MenuItem>Gallery</MenuItem></Link>
        <Link to="/about"><MenuItem>About</MenuItem></Link>
        <Link to="/pricing"><MenuItem>Pricing</MenuItem></Link>
        <Link to="/contact"><MenuItem>Contact</MenuItem></Link>
    </nav>
)

export default Desktop
