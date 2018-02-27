import { combineReducers } from 'redux'
import portfolio from './portfolio'

// "Root reducer"
const appReducer = combineReducers({
    portfolio,
});

export default appReducer