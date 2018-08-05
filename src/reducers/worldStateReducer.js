import { SET_WORLD_STATE } from '../action-types/worldstate'

const initialWorldState = {}

const worldStateReducer = (worldState=initialWorldState, action) => {
  switch (action.type) {
  case SET_WORLD_STATE:
    return action.value
  default:
    return worldState
  }
}

export default worldStateReducer
