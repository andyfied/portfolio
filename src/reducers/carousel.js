import { SHOW_CAROUSEL, SELECTED_IMAGE } from '../actions/actionCreators'

const initialState = {
  showCarousel: false,
  selectedImage: 0,
}

const carousel = (state = initialState, action) => {
  switch (action.type) {
    case SHOW_CAROUSEL:
      return Object.assign({}, state, { showCarousel: action.payload })
    case SELECTED_IMAGE:
      return Object.assign({}, state, { selectedImage: action.payload })
    default:
      return state
  }
}

export default carousel
