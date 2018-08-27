import { Text } from 'native-base'
import { View } from 'react-native'
import React from 'react'

const styles = {
  container: {
    flexDirection: 'row',
    height: 40,
    marginBottom: 10
  },
  dates: {
    flex: 1,
    flexDirection: 'column'
  },
  lighter: {
    color: '#696969'
  },
  description: {
    flex: 4,
    flexDirection: 'column'
  },
  row: {
    flex: 1,
    flexDirection: 'row'
  }
}

function format_two_digits(n) {
  return n < 10 ? '0' + n : n
}

const getTime = (date) => {
  return format_two_digits(date.getHours()) + ':' + format_two_digits(date.getMinutes())
}

const Alert = (props) => {
  return (
    <View style={styles.container} >
      <View style={styles.dates} >
        <Text style={styles.lighter} >{getTime(props.data.from)}</Text>
        <Text style={styles.lighter} >{getTime(props.data.to)}</Text>
      </View>
      <View style={styles.description} >
        <View style={styles.row} >
          <Text>{props.data.mission.faction} </Text>
          <Text>{props.data.mission.type} </Text>
          <Text style={styles.lighter} >
            ({props.data.mission.minEnemyLevel}-{props.data.mission.maxEnemyLevel})
          </Text>
        </View>
        <View style={styles.row} >
          <Text>
            {props.data.mission.reward.asString}
          </Text>
        </View>
      </View>
    </View>
  )
}

export default Alert
