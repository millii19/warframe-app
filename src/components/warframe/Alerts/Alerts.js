import React from 'react'
import { Container } from 'native-base'
import Alert from '../Alert'

const Alerts = (props) => {
  if (props.alerts.length < 1) {
    return null
  }

  return (
    <Container>
      {
        props.alerts.map(alert => <Alert data={alert} key={alert.id}/>)
      }
    </Container>
  )
}

export default Alerts
