import React, { Component } from 'react';
import { Image, StatusBar, ScrollView, SafeAreaView,View, TouchableWithoutFeedback, Dimensions, TouchableOpacity } from 'react-native';
import { Container, Header, Content, Card, CardItem, Thumbnail, Text, Button, Icon, Left, Body, Right } from 'native-base';
import styles from '../../Login/styles';
import axios from 'react-native-axios';

const  {height, width} = Dimensions.get('window');

class ProductList extends Component {
  constructor(props) {
    super(props);
    this.state = {
      products: [],
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
        `/api/productByCategory/${id}`;
    axios.get(url).then(response => {
        this.setState({
            products: response.data
        });
        console.log("items List"+this.state.products);
    });
}
  
  checkLogin(id){
    this.props.navigation.navigate('Item',{id:id})
    }

  render() {
    const card = this.state.products.map(product =>(
<TouchableOpacity onPress={_ =>this.checkLogin(product.id)}>
<View style={{width: width/2}} >
<Card >
  
  <CardItem cardBody >
    <Image source={require('../../../res/myorders.png')} style={{height: 200, width: null, flex: 1}} /> 
  </CardItem>
  <CardItem>
    <Left>
      {/* <Thumbnail source={{uri: "../../res/myorders"}} /> */}
      <Body>
      <Text>{product.name}</Text>
        <Text>NativeBase</Text>
        {/* <Text note>{product.name}</Text> */}
      </Body>
    </Left>
  </CardItem>
</Card>
</View>
</TouchableOpacity>
            ))
    return (
      
    
    <ScrollView >
      <View >
          {card}
          </View>
      </ScrollView>
      
     
     
    );
  }
}

export default ProductList;