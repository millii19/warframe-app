import { connect } from 'react-redux'

import { refreshWorldState } from '../../action-creators/worldstate'
import HomeScreen from './HomeScreen'

const mapStateToProps = (state) => ({
  data: state.worldState
})

const mapDispatchToProps = (dispatch) => ({
  refresh: () => dispatch(refreshWorldState())
})

export default connect(
  mapStateToProps,
  mapDispatchToProps
)(HomeScreen)
