import React from 'react'
import { Link } from 'react-router-dom'

import './Desktop.css'

const Desktop = () => (
    <nav>
        <Link to="/gallery">Gallery</Link>
        <Link to="/about">About byTherese</Link>
        <Link to="/pricing">Pricing</Link>
        <Link to="/contact">Contact</Link>
    </nav>
)

export default Desktop
