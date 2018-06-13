import React from 'react'
import { Link } from 'react-router-dom'
import './Navigation.css'

const Navigation = () => (
    <div>
        <Link to="/gallery">Gallery</Link>
        <Link to="/about">About byTherese</Link>
        <Link to="/pricing">Pricing</Link>
        <Link to="/contact">Contact</Link>
    </div>
)

export default Navigation