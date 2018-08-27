import Alerts from './Alerts'
import { connect } from 'react-redux'

const mapStateToProps = state => ({
  alerts: state.worldstate.alerts
})

export default connect(
  mapStateToProps
)(Alerts)
