import { Container, Text } from 'native-base'
import React from 'react'

const styles = {
  container: {
    flexDirection: 'row'
  },
  dates: {
    flex: 1,
    flexDirection: 'column'
  },
  description: {
    flex: 3,
    flexDirection: 'column'
  },
  rewards: {
    flex: 2,
    flexDirection: 'column'
  }
}

const Alert = (props) => {
  return (
    <Container style={styles.container} >
      <Container style={styles.dates} >
        <Text>{props.data.from.getHours() + ':' + props.data.from.getMinutes()}</Text>
        <Text>{props.data.to.getHours() + ':' + props.data.to.getMinutes()}</Text>
      </Container>
      <Container style={styles.description} >
        <Text>Enemy: {props.data.mission.faction}</Text>
        <Text>Type: {props.data.mission.type}</Text>
        <Text>Level: {props.data.mission.minEnemyLevel}-{props.data.mission.maxEnemyLevel}</Text>
      </Container>
      <Container>
        {
          props.data.mission.rewards.map((reward, index) => (
            <Text key={index} >{reward.type}: {reward.value}</Text>
          ))
        }
      </Container>
    </Container>
  )
}

export default Alert
