import React from 'react'

const styles = {
  image: {
    width: '100%',
    height: 'auto',
    display: 'block',
  },
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
  <div style={styles.wrapper}>
    <img
      style={styles.image}
      alt={thumb.fields.title}
      src={`${thumb.fields.file.url}?fl=progressive&fit=thumb${getDimensions(width, height)}`}
    />
  </div>
)

export default Thumb
