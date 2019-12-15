import React, { Component } from 'react';
import { Container, Header, Content, Card, CardItem, Body, Text } from 'native-base';

class User extends Component {
    render() {
        return (
        <Container>
        <Content>
          <Card>
            <CardItem>
              <Body>
                <Text>
                   User details
                </Text>
              </Body>
            </CardItem>
          </Card>
        </Content>
      </Container>
        );
    }
}

export default User;