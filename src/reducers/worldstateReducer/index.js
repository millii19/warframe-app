import { combineReducers } from 'redux'

import alertsReducer from './alertsReducer'
import worldStateReducer from './worldStateReducer'

export default combineReducers({
  alerts: alertsReducer,
  data: worldStateReducer  // tmp
})
