import { GET_ASSET_PENDING, GET_ASSET_FULLFILLED, GET_ASSET_REJECTED } from '../actions/actionCreators'

const initialState = {
  isFetching: false,
  error: false,
  payload: {},
}

const asset = (state = { initialState }, action) => {
  switch (action.type) {
    case GET_ASSET_PENDING:
      return { isFetching: true, error: false }
    case GET_ASSET_FULLFILLED:
      return Object.assign({}, state, { [action.payload.fields.title]: action.payload })
    case GET_ASSET_REJECTED:
      return { isFetching: false, error: false, payload: action.payload }
    default:
      return state
  }
}

export default asset
