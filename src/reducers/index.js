import { combineReducers } from 'redux'
import portfolio from './portfolio'
import navigation from './navigation'
import drawer from './drawer'
import video from './video'

// "Root reducer"
const appReducer = combineReducers({
    portfolio,
    navigation,
    drawer,
    video,
});

export default appReducer