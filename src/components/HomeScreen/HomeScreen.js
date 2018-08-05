import React from 'react'
import {
  View,
  Text
} from 'react-native'

const HomeScreen = (props) => {
  return (
  	<View>
      <Text>Hi</Text>
      <Text>{JSON.stringify(props.alerts)}</Text>
  	</View>
  )
}

export default HomeScreen
