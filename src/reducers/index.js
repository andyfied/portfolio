import { combineReducers } from 'redux'

const portfolio = (state={}, action) => {
    return state
}

// "Root reducer"
const appReducer = combineReducers({
    portfolio,
});

export default appReducer