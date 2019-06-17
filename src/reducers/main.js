import { GET_MAIN_IMAGE_PENDING, GET_MAIN_IMAGE_FULLFILLED, GET_MAIN_IMAGE_REJECTED } from '../actions/actionCreators'

const initialState = {
  isFetching: false,
  error: false,
  payload: {},
}

const main = (state = { initialState }, action) => {
  switch (action.type) {
    case GET_MAIN_IMAGE_PENDING:
      return { isFetching: true, error: false }
    case GET_MAIN_IMAGE_REJECTED:
      return { isFetching: false, error: true, payload: action.payload }
    case GET_MAIN_IMAGE_FULLFILLED:
      return { isFetching: false, error: false, payload: action.payload }
    default:
      return state
  }
}

export default main
