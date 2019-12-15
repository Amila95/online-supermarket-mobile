import React, { Component } from 'react';
import { Image } from 'react-native';
import axios from 'react-native-axios';
import PropTypes from "prop-types";
import { connect } from "react-redux";
import { addToCartItem, changeCartItem , addToChangeCartItem } from "../../actions/cartAction";
import { Container, Header,Row,  Content, Card, CardItem, Thumbnail, Text, Button, Icon, Left, Body,Footer, FooterTab, Item, Input, Toast} from 'native-base';
class ShopingItem extends Component {
  constructor(props) {
    super(props);
    this.state = {
      product: {},
      quentity:1,
      
    };
  }
  

  componentDidMount() {
    const { id } = this.props.navigation.state.params;

    console.log("id"+id);
    this.getProducts(id);
  }

  getProducts(id) {
    console.log("items List start");
    let url =
        `/api/product/${id}`;
    axios.get(url).then(response => {
        this.setState({
            product: response.data
        });
        console.log("items List"+this.state.product);
    });
}

incress(){
          this.setState({
            quentity: this.state.quentity+1
        });
        console.log("quentity"+this.state.quentity)
  }
decress(){
  if(this.state.quentity>1){
    this.setState({
      quentity: this.state.quentity-1
  });
}
  console.log("quentity"+this.state.quentity)
}

addToCart(){
  const cartItem = {
    itemName:this.state.product.name,
    qty:this.state.quentity,
    price:this.state.product.price
 };
 
this.props.changeCartItem(cartItem) 
//this.props.addToChangeCartItem(cartItem)
this.props.addToCartItem(cartItem)
  console.log("quentity"+this.state.quentity)
  Toast.show({
    text: 'Item added cart',
    buttonText: 'Okay'
  })
  this.props.navigation.navigate('ProductList')
  
}

// onSubmit(e){
//   e.preventDefault();
//   const cartItem = {
//      itemName:"Anchor",
//      qty:this.state.quentity,
//   };
//   this.props.addToCartItem(cartItem, this.props.history)
// }

  render() {
    const { items } = this.props.cart;
    return (
      <Container>
        <Content>
          <Card style={{flex: 0}} >
            <CardItem>
              <Left>
                <Thumbnail source={require('../../res/myorders.png')} />
                <Body>
                  <Text>{this.state.product.name}</Text>
                  <Text note>April 15, 2016</Text>
                </Body>
              </Left>
            </CardItem>
            <CardItem>
              <Body>
                <Image source={require('../../res/myorders.png')} style={{height: 200, width: 400, flex: 1}}/>
                <Text>
                  //Your text here
                </Text>
              </Body>
            </CardItem>
            <CardItem>
              <Left>
                {/* <Button transparent textStyle={{color: '#87838B'}}>
                  <Icon name="logo-github" /> */}
                  <Text textStyle={{color: '#87838B'}}>950</Text>
                {/* </Button> */}
              </Left>
            </CardItem>
          </Card>
          
        </Content>
        
        
        <Footer>
          <FooterTab>
          <Row>
          <Button iconLeft dark onPress={_ =>this.decress()}>
            <Icon name='remove' />
          </Button>
          <Text>{this.state.quentity}</Text>
          <Button iconLeft dark onPress={_ =>this.incress()}>
            <Icon name='add' />
          </Button>
          </Row>
          </FooterTab>
          
        </Footer>
        <Footer>
          <FooterTab>
          <Button rounded success onPress={_ =>this.addToCart()}>
            <Text>Success</Text>
          </Button>
          </FooterTab> 
        </Footer>
      </Container>
    );
  }
}
// export default ShopingItem;

const mapStateToProps = state =>({
  errors: state.errors,
  cart: state.cart,
});

export default connect(mapStateToProps,{addToCartItem, changeCartItem , addToChangeCartItem})(ShopingItem);