import React, { Component } from 'react';
import { Container, Header, Content, Tab, Tabs } from 'native-base';
import PerpareOrder from './PerpareOrder/index';
import PreviousOrder from './PreviousOrder/index';
class History extends Component {
  render() {
    return (
      <Container>
        <Tabs>
          <Tab heading="PerpareOrder">
            <PerpareOrder />
          </Tab>
          <Tab heading="PreviousOrder">
            <PreviousOrder />
          </Tab>
        </Tabs>
      </Container>
    );
  }
}
export default History;