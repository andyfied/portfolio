import React from 'react'
import Modal from 'react-modal'
import { Carousel } from 'react-responsive-carousel'
import IconButton from '@material-ui/core/IconButton'
import CloseIcon from '@material-ui/icons/Close'

import 'react-responsive-carousel/lib/styles/carousel.min.css'

const styles = {
  content: {
    top: '50%',
    left: '50%',
    right: 'auto',
    bottom: 'auto',
    marginRight: '-50%',
    transform: 'translate(-50%, -50%)',
    padding: 0,
    paddingBottom: '30px',
    background: 'black',
  },
  closeButton: {
    float: 'right',
  },
}

Modal.setAppElement('#root')

const ImageModal = ({ images, selectedImage, isOpen, onClose }) => (
  <Modal isOpen={isOpen} onRequestClose={onClose} style={styles} contentLabel="Example Modal">
    <div>
      <IconButton style={styles.closeButton} color="inherit" aria-label="Close" onClick={onClose}>
        <CloseIcon />
      </IconButton>
      <Carousel style={styles} showStatus={false} showThumbs={false} selectedItem={selectedImage}>
        {images.map((image, index) => (
          <div key={index}>
            <img src={`${image.fields.thumb.fields.file.url}?fm=jpg&fl=progressive&w=800`} />
          </div>
        ))}
      </Carousel>
    </div>
  </Modal>
)

export default ImageModal
