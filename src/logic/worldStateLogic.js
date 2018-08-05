import { createLogic } from 'redux-logic'

import { REFRESH_WORLD_STATE } from '../action-types/worldstate'
import { fetch_world_state } from '../access/worldstate'
import { setWorldState } from '../action-creators/worldstate'

const getWorldLogicLogic = createLogic({
  type: REFRESH_WORLD_STATE,
  latest: true,
  process({ }, dispatch, done) {
    fetch_world_state()
      .then(data => {
        dispatch(setWorldState(data))
      })
      .catch(error => {
        console.warn('Error: ' + error)
      })
      .then(() => done())
  }
})

export default [ getWorldLogicLogic ]
