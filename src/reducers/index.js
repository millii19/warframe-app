import { combineReducers } from 'redux'

import worldStateReducer from './worldStateReducer'

export default combineReducers({
  worldState: worldStateReducer
})
