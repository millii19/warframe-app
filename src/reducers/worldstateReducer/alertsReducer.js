import { SET_ALERTS } from '../../action-types/worldstate'

const initialalerts = []

const alertReducer = (alerts=initialalerts, action) => {
  switch (action.type) {
  case SET_ALERTS:
    return action.value
  default:
    return alerts
  }
}

export default alertReducer
