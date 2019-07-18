import React from 'react'
import Modal from 'react-modal'
import { Carousel } from 'react-responsive-carousel'
import IconButton from '@material-ui/core/IconButton'
import CloseIcon from '@material-ui/icons/Close'
import MediaQuery from 'react-responsive'
import breakpoints from '../../constants/breakpoints'

import 'react-responsive-carousel/lib/styles/carousel.min.css'
import './ImageModal.css'

const stylesSmall = {
  content: {
    top: '50%',
    left: '50%',
    right: 'auto',
    bottom: 'auto',
    marginRight: '-50%',
    transform: 'translate(-50%, -50%)',
    padding: 0,
    paddingBottom: '30px',
    background: 'rgba(0,0,0,0.8)',
  },
  closeButton: {
    float: 'right',
  },
}

const stylesLarge = {
  content: {
    top: 0,
    left: 0,
    right: 0,
    bottom: 0,
    padding: 0,
    background: 'rgba(0,0,0,0.8)',
  },
  closeButton: {
    float: 'right',
    paddingRight: '30px',
  },
}

Modal.setAppElement('#root')

const ImageModal = ({ images, selectedImage, isOpen, onClose }) => (
  <div>
    <MediaQuery maxWidth={breakpoints.MOBILE_BREAKPOINT}>
      <Modal isOpen={isOpen} onRequestClose={onClose} style={stylesSmall} contentLabel="Example Modal">
        <div>
          <IconButton style={stylesSmall.closeButton} color="inherit" aria-label="Close" onClick={onClose}>
            <CloseIcon />
          </IconButton>
          <Carousel showStatus={false} showThumbs={false} selectedItem={selectedImage}>
            {images.map((image, index) => (
              <div key={index}>
                <img src={`${image.fields.thumb.fields.file.url}?fm=jpg&fl=progressive&w=800`} />
              </div>
            ))}
          </Carousel>
        </div>
      </Modal>
    </MediaQuery>
    <MediaQuery minWidth={breakpoints.DESKTOP_BREAKPOINT}>
      <Modal isOpen={isOpen} onRequestClose={onClose} style={stylesLarge} contentLabel="Example Modal">
        <div className="imageModal_large">
          <IconButton style={stylesLarge.closeButton} color="inherit" aria-label="Close" onClick={onClose}>
            <CloseIcon />
          </IconButton>
          <Carousel showStatus={false} showThumbs={false} selectedItem={selectedImage}>
            {images.map((image, index) => (
              <div key={index}>
                <img src={`${image.fields.thumb.fields.file.url}?fm=jpg&fl=progressive&w=1440`} />
              </div>
            ))}
          </Carousel>
        </div>
      </Modal>
    </MediaQuery>
  </div>
)

export default ImageModal
