import { combineReducers } from 'redux'
import portfolio from './portfolio'
import navigation from './navigation'
import drawer from './drawer'
import video from './video'
import main from './main'
import carousel from './carousel'

// "Root reducer"
const appReducer = combineReducers({
  portfolio,
  navigation,
  drawer,
  video,
  main,
  carousel,
})

export default appReducer
