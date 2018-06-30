import * as contentfulService from '../services/contentfulClient'

export const GET_GALLERY_ITEMS_PENDING = 'Waiting for gallery items'
export const GET_GALLERY_ITEMS_FULLFILLED = 'Received gallery items'
export const GET_GALLERY_ITEMS_REJECTED = 'Failed to receive gallery items'

export const SHOW_NAVIGATION = 'show navigation bar'
export const SHOW_DRAWER = 'show drawer for mobile devices'


const getGalleryItemsPending = () => (
    {
        type: GET_GALLERY_ITEMS_PENDING,
    }
)

const getGalleryItemsFullfilled = (payload) => (
    {
        type: GET_GALLERY_ITEMS_FULLFILLED,
        payload: payload,
    }
)

const getGalleryItemsRejected = (payload) => (
    {
        type: GET_GALLERY_ITEMS_REJECTED,
        payload: payload,
    }
)

export const fetchGalleryItems = () => {
    return (dispatch) => {
        dispatch(getGalleryItemsPending())
        contentfulService.getClient().getEntries()
            .then(response => dispatch(getGalleryItemsFullfilled(response)))
            .catch(error => dispatch(getGalleryItemsRejected(error)))
    }
}

export const setShowNavigation = (payload) => (
    {
        type: SHOW_NAVIGATION,
        payload: payload,
    }
)

export const setShowDrawer = (payload) => (
    {
        type: SHOW_DRAWER,
        payload: payload,
    }
)