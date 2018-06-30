import { SHOW_DRAWER } from '../actions/actionCreators'

const initialState = {
    payload: false,
}

const drawer = (state = initialState, action) => {
    switch(action.type) {
        case SHOW_DRAWER:
            return { payload: action.payload }
        default:
            return state
    }
}

export default drawer
