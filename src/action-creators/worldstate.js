import {
  GET_WORLD_STATE,
  REFRESH_WORLD_STATE,
  SET_WORLD_STATE
} from '../action-types/worldstate'

const refreshWorldState = (value) => ({
  type: REFRESH_WORLD_STATE,
  value
})

export { refreshWorldState }

const getWorldState = (value) => ({
  type: GET_WORLD_STATE,
  value
})

export { getWorldState }

const setWorldState = (value) => ({
  type: SET_WORLD_STATE,
  value
})

export { setWorldState }
