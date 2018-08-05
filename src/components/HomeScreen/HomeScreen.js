import React from 'react'
import {
  View,
  Text
} from 'react-native'

const HomeScreen = (props) => {
  return (
  	<View>
      <Text>{JSON.stringify(props.data)}</Text>
  	</View>
  )
}

export default HomeScreen
