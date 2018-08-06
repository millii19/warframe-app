import {
  Provider
} from 'react-redux'
import {
  Router,
  Stack,
  Scene
} from 'react-native-router-flux'
import { applyMiddleware, createStore } from 'redux'
import { createLogicMiddleware } from 'redux-logic'
import React from 'react'

import { refreshWorldState } from './src/action-creators/worldstate'
import HomeScreen from './src/components/HomeScreen'
import rootLogic from './src/logic'
import rootReducer from './src/reducers'

const logic = createLogicMiddleware(rootLogic)
const store = createStore(rootReducer, applyMiddleware(logic))


// fetch initial world state
store.dispatch(refreshWorldState())

export default class App extends React.Component {
  render() {
    return (
      <Provider store={store} >
        <Router>
          <Stack key='root'>
            <Scene key='home' component={HomeScreen} initial={true} />
          </Stack>
        </Router>
      </Provider>
    )
  }
}

// load user preferences
