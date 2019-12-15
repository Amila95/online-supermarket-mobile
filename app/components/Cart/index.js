import React, { Component } from 'react';
import { Container, Header, Content, List, ListItem, Text, Right, Row,  Button, Icon,Footer, FooterTab} from 'native-base';
import PropTypes from "prop-types";
import { connect } from "react-redux";
import { changeCartItem , addToChangeCartItem} from "../../actions/cartAction";

class Cart extends Component {
  constructor(props) {
    super(props);
    this.state = {
      totalPrice: 0,
     
    };
  }

incress(item){
  this.setState({
    totalPrice:0
  })
  item.qty = item.qty+1;
  this.props.changeCartItem(item) 
  this.props.addToChangeCartItem(item)
}
decress(item){
  if(item.qty >1){
    this.setState({
      totalPrice:0
    })
  item.qty = item.qty-1;
  this.props.changeCartItem(item) 
  this.props.addToChangeCartItem(item)
  }
}

checkLogin(id){
  this.props.navigation.navigate('Payment')
  }

    render() {
      const { items, totelPrice } = this.props.cart;
      items.map(item=>(this.state.totalPrice = this.state.totalPrice+item.price*item.qty));
      const listItem = items.map(item =>(
        <ListItem>
              <Text>{item.itemName} </Text>
              <Right>
                
                <Row>
          <Button iconLeft dark onPress={_ =>this.decress(item)}>
            <Icon name='remove' />
          </Button>
          <Text>{item.qty}</Text>
          <Button iconLeft dark onPress={_ =>this.incress(item)}>
            <Icon name='add' />
          </Button>
          </Row>
              </Right>
              <Text>{item.price*item.qty} </Text>
            </ListItem>
                    ))

      console.log("items"+ items);
        return (
        <Container>
        <Content>
          <List>
            {listItem}
            {/* <ListItem><Text>Total Price  {this.state.totalPrice}</Text></ListItem> */}
          </List>
          
        </Content>
        <Footer>
          <FooterTab>
          <List>
           <Text>Total Price  {totelPrice}</Text>
           <Button success onPress={_ =>this.checkLogin()} ><Text> Success </Text></Button>
          </List>
          </FooterTab> 
        </Footer>
      </Container>
        );
    }
}

const mapStateToProps = state =>({
  errors: state.errors,
  cart: state.cart,
});

export default connect(mapStateToProps,{addToChangeCartItem, changeCartItem})(Cart);