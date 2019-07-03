import * as contentfulService from '../services/contentfulClient'

export const GET_GALLERY_ITEMS_PENDING = 'Waiting for gallery items'
export const GET_GALLERY_ITEMS_FULLFILLED = 'Received gallery items'
export const GET_GALLERY_ITEMS_REJECTED = 'Failed to receive gallery items'

export const GET_MAIN_IMAGE_PENDING = 'Waiting for main image'
export const GET_MAIN_IMAGE_FULLFILLED = 'Received main image'
export const GET_MAIN_IMAGE_REJECTED = 'Falied to receive main image'

export const GET_ASSET_PENDING = 'Waiting for asset'
export const GET_ASSET_FULLFILLED = 'Reveived asset'
export const GET_ASSET_REJECTED = 'Falied to reveive asset'

export const SHOW_NAVIGATION = 'show navigation bar'
export const SHOW_DRAWER = 'show drawer for mobile devices'
export const SHOW_CAROUSEL = 'show image carousel'

export const SELECTED_IMAGE = 'Selected image in carousel'

const getGalleryItemsPending = () => ({
  type: GET_GALLERY_ITEMS_PENDING,
})

const getGalleryItemsFullfilled = payload => ({
  type: GET_GALLERY_ITEMS_FULLFILLED,
  payload: payload,
})

const getGalleryItemsRejected = payload => ({
  type: GET_GALLERY_ITEMS_REJECTED,
  payload: payload,
})

export const fetchGalleryItems = () => {
  return dispatch => {
    dispatch(getGalleryItemsPending())
    contentfulService
      .getClient()
      .getEntries({
        content_type: 'galleryItem',
      })
      .then(response => dispatch(getGalleryItemsFullfilled(response)))
      .catch(error => dispatch(getGalleryItemsRejected(error)))
  }
}

const getMainImagePending = () => ({
  type: GET_MAIN_IMAGE_PENDING,
})

const getMainImageFullfilled = payload => ({
  type: GET_MAIN_IMAGE_FULLFILLED,
  payload: payload,
})

const getMainImageRejected = payload => ({
  type: GET_MAIN_IMAGE_REJECTED,
  payload: payload,
})

export const fetchMainImage = () => {
  return dispatch => {
    dispatch(getMainImagePending())
    contentfulService
      .getClient()
      .getEntries({
        content_type: 'mainImage',
      })
      .then(response => dispatch(getMainImageFullfilled(response)))
      .catch(error => dispatch(getMainImageRejected(error)))
  }
}

const getAssetPending = () => ({
  type: GET_ASSET_PENDING,
})

const getAssetFullfilled = payload => ({
  type: GET_ASSET_FULLFILLED,
  payload: payload,
})

const getAssetRejected = payload => ({
  type: GET_ASSET_REJECTED,
  payload: payload,
})

export const fetchAsset = id => {
  return dispatch => {
    dispatch(getAssetPending())
    contentfulService
      .getClient()
      .getAsset(id)
      .then(response => dispatch(getAssetFullfilled(response)))
      .catch(error => dispatch(getAssetRejected(error)))
  }
}

export const setShowNavigation = payload => ({
  type: SHOW_NAVIGATION,
  payload: payload,
})

export const setShowDrawer = payload => ({
  type: SHOW_DRAWER,
  payload: payload,
})

export const setShowCarousel = payload => ({
  type: SHOW_CAROUSEL,
  payload: payload,
})

export const setSelectedImage = payload => ({
  type: SELECTED_IMAGE,
  payload: payload,
})
