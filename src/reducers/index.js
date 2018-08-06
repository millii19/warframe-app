import { combineReducers } from 'redux'

import worldstateReducer from './worldstateReducer'

export default combineReducers({
  worldstate: worldstateReducer
})
