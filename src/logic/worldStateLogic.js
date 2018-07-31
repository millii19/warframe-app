import { createLogic } from 'redux-logic'

import { GET_WORLD_STATE } from '../action-types/worldstate'
import { fetch_world_state } from '../access/worldstate'
import { setWorldState } from '../action-creators/worldstate'

const getWorldLogicLogic = createLogic({
  type: GET_WORLD_STATE,
  latest: true,
  process({ }, dispatch, done) {
    fetch_world_state()
      .then(res => JSON.parse(res))
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
