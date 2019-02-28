import React from 'react'

const styles = {
  wrapper: {
    padding: '0 15px 0 15px',
    position: 'relative',
    top: '-40px',
  },
  imageWrapper: {
    display: 'flex',
    flexDirection: 'row',
    justifyContent: 'flex-start',
    alignItems: 'flex-end',
  },
  image: {
    width: '80px',
    height: '80px',
    borderRadius: '50%',
    objectFit: 'cover',
  },
  header: {
    margin: 0,
    fontSize: '18px',
  },
  body: {
    fontSize: '14px',
    margin: '10px 0 10px 0',
  },
}

const Review = ({ review }) => (
  <div style={styles.wrapper}>
    <div style={styles.imageWrapper}>
      {review.fields.image && (
        <img
          style={styles.image}
          alt={review.fields.title}
          src={`${review.fields.image.fields.file.url}?fl=progressive&w=100`}
        />
      )}
      <h2 style={styles.header}>{review.fields.name}</h2>
    </div>
    <p style={styles.body}>{review.fields.comment}</p>
  </div>
)

export default Review
