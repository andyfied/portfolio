import { SHOW_NAVIGATION } from '../actions/actionCreators'

const initialState = {
  payload: true,
}

const navigation = (state = initialState, action) => {
  switch (action.type) {
    case SHOW_NAVIGATION:
      return { payload: action.payload }
    default:
      return state
  }
}

export default navigation
