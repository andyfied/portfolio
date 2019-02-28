import React from 'react'

const styles = {
  width: '100%',
}

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

const Thumb = ({ thumb, width, height }) => (
  <img
    style={styles}
    alt={thumb.fields.title}
    src={`${thumb.fields.file.url}?fl=progressive${getDimensions(width, height)}`}
  />
)

export default Thumb
