import React from 'react'
import './Thumb.css'

const Thumb = ({ item }) => (
    <img
        className="thumb"
        alt={ item.fields.thumb.fields.title }
        src={ `${item.fields.thumb.fields.file.url}?fl=progressive&w=400&h=400` }
    />
)

export default Thumb