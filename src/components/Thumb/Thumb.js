import React from 'react'
import './Thumb.css'

const getDimensions = (width, height) => {
  let dimensions = ''
  if (width) {
    dimensions = `&w=${width}`
  }
  if (height) {
    dimensions = `${dimensions}&h=${height}`
  }

  return dimensions
}

const Thumb = ({ item, width, height }) => (
  <img
    className="thumb"
    alt={item.fields.thumb.fields.title}
    src={`${item.fields.thumb.fields.file.url}?fl=progressive${getDimensions(width, height)}`}
  />
)

export default Thumb
