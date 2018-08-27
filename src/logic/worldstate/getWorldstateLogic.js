import { createLogic } from 'redux-logic'
import WorldState from 'warframe-worldstate-parser'
import { REFRESH_WORLD_STATE } from '../../action-types/worldstate'
import { fetch_world_state } from '../../access/worldstate'
import { setWorldState, setAlerts } from '../../action-creators/worldstate'

const getWorldstateLogic = createLogic({
  type: REFRESH_WORLD_STATE,
  latest: true,
  process({ }, dispatch, done) {
    fetch_world_state()
      .then(data => {
        const ws = new WorldState(JSON.stringify(data))
        dispatch(setWorldState(data))
        dispatch(setAlerts(ws.alerts))
      })
      .catch(error => {
        console.warn('Error: ' + error)
      })
      .then(() => done())
  }
})

export default [ getWorldstateLogic ]
