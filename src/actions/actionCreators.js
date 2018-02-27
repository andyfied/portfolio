import * as contentfulService from '../services/contentfulClient'

export const GET_GALLERY_ITEMS_PENDING = 'Waiting for gallery items'
export const GET_GALLERY_ITEMS_FULLFILLED = 'Received gallery items'
export const GET_GALLERY_ITEMS_REJECTED = 'Failed to receive gallery items'


const getGalleryItemsPending = () => {
    return {
        type: GET_GALLERY_ITEMS_PENDING,
    }
}

const getGalleryItemsFullfilled = (payload) => {
    return {
        type: GET_GALLERY_ITEMS_FULLFILLED,
        payload: payload,
    }
}

const getGalleryItemsRejected = (payload) => {
    return {
        type: GET_GALLERY_ITEMS_REJECTED,
        payload: payload,
    }
}

export const fetchGalleryItems = () => {
    return (dispatch) => {
        dispatch(getGalleryItemsPending())
        contentfulService.getClient().getEntries()
            .then(response => dispatch(getGalleryItemsFullfilled(response)))
            .catch(error => dispatch(getGalleryItemsRejected(error)))
    }
}