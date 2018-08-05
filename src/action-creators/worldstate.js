import {
  SET_ALERTS,
  REFRESH_WORLD_STATE,
  SET_WORLD_STATE
} from '../action-types/worldstate'

const refreshWorldState = () => ({
  type: REFRESH_WORLD_STATE
})

export { refreshWorldState }

const setAlerts = (value) => ({
  type: SET_ALERTS,
  value
})

export { setAlerts }

const setWorldState = (value) => ({
  type: SET_WORLD_STATE,
  value
})

export { setWorldState }
