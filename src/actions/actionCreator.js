import * as contentfulService from '../services/contentfulClient'

export const GET_GALLERY_ITEMS = 'get a all items of content model type galleryItem'

export const getGalleryItems = () => {
    return {
        type: GET_GALLERY_ITEMS,
        payload: contentfulService.getGalleryItems(),
    }
}