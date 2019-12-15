import React, { Component } from 'react';
import { Container, Header, Content, Card, CardItem, Body, Text } from 'native-base';
class Payment extends Component {
    render() {
        return (
        <Container>
        <Content>
          <Card>
            <CardItem>
              <Body>
                <Text>
                  This order prepareing 
                </Text>
              </Body>
            </CardItem>
          </Card>
        </Content>
      </Container>
        );
    }
}

export default Payment;