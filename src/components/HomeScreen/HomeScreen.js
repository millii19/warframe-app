import { Container } from 'native-base'
import React from 'react'

import Alert from '../warframe/Alert'

const styles = {
  container: {
    padding: 10
  }
}

const HomeScreen = (props) => {
  return (
    <Container style={styles.container} >
      {
        props.alerts.map(alert => <Alert data={alert} key={alert.id}/>)
      }
    </Container>
  )
}

export default HomeScreen
