import { combineReducers } from 'redux'
import portfolio from './portfolio'
import navigation from './navigation'
import drawer from './drawer'
import video from './video'
import main from './main'

// "Root reducer"
const appReducer = combineReducers({
  portfolio,
  navigation,
  drawer,
  video,
  main,
})

export default appReducer
