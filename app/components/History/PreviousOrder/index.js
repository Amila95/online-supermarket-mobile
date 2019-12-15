import React, { Component } from 'react';
import { Container, Header, Content, Card, CardItem, Body, Text } from 'native-base';
class PreviousOrder extends Component {
  render() {
    return (
      <Container>
        <Content>
          <Card>
            <CardItem>
              <Body>
                <Text>
                   This are History 
                </Text>
              </Body>
            </CardItem>
          </Card>
        </Content>
      </Container>
    );
  }
}
export default PreviousOrder;