import { createLogic } from 'redux-logic'

import { SET_ALERTS } from '../../action-types/worldstate'
import { generateAlert } from '../../data-structures/alert'

const setAlertsLogic = createLogic({
  type: SET_ALERTS,
  transform({ action, getState }, next) {
    const currentIds = getState().worldstate.alerts.map(alert => alert.id)
    const alerts = action.value
      .map(raw => ({
        ...generateAlert(raw),
        hidden: false
      }))
      .filter(alert => !currentIds.includes(alert.id))
    next({
      ...action,
      value: [
        ...getState().worldstate.alerts,
        ...alerts
      ]
    })
  }
})

export default [
  ...setAlertsLogic
]
