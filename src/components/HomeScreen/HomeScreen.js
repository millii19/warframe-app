import { Container } from 'native-base'
import React from 'react'
import Alerts from '../warframe/Alerts'

const styles = {
  container: {
    padding: 10
  }
}

const HomeScreen = () => {
  return (
    <Container style={styles.container} >
      <Alerts />
    </Container>
  )
}

export default HomeScreen
