import React from 'react'
import './Thumb.css'

const Thumb = ({ item, width, height }) => (
    <img
        className="thumb"
        alt={ item.fields.thumb.fields.title }
        src={ `${item.fields.thumb.fields.file.url}?fl=progressive&w=${width}&h=${height}` }
    />
)

export default Thumb