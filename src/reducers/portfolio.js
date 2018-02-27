import { 
    GET_GALLERY_ITEMS_PENDING,
    GET_GALLERY_ITEMS_FULLFILLED,
    GET_GALLERY_ITEMS_REJECTED 
} from '../actions/actionCreators'

const initialState = {
    isFetching: false,
    error: false,
    payload: {},
}

const portfolio = (state={initialState}, action) => {

    switch(action.type) {
        case GET_GALLERY_ITEMS_PENDING:
            console.log('Pending!')
            return {isFetching: true, error: false}
        case GET_GALLERY_ITEMS_REJECTED:
            console.log('rejected!')
            return {isFetching: false, error: true, payload: action.payload}
        case GET_GALLERY_ITEMS_FULLFILLED:
            console.log('gr8 success!')
            return {isFetching: false, error: false, payload: action.payload}
        default:
            return state
    }
}

export default portfolio
