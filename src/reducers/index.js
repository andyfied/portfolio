import { combineReducers } from 'redux'
import portfolio from './portfolio'
import navigation from './navigation'
import drawer from './drawer'

// "Root reducer"
const appReducer = combineReducers({
    portfolio,
    navigation,
    drawer,
});

export default appReducer