import React from 'react'
import {
  Card,
  CardItem,
  Body
} from 'native-base'

const asCard = (LC) => {
  return class HC extends React.Component {
    render() {
      return (
        <Card>
          <CardItem>
            <Body>
              <LC {...this.props} />
            </Body>
          </CardItem>
        </Card>
      )
    }
  }
}

export default asCard
