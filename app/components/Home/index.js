import React, { Component } from 'react';
import { Container, Header, Content, List, ListItem, Text, Left, Right, Icon  } from 'native-base';
import axios from 'react-native-axios';

class Home extends Component {
  constructor(props) {
    super(props);
    this.state = {
      products: [],
    };
  }

  componentDidMount(){
    this.getProducts();
  }
  // Fetch Initial Set of Products from external API
  getProducts() {
    let url =
        "/api/category";
    axios.get(url).then(response => {
        this.setState({
            products: response.data
        });
        console.log("23"+this.state.products);
    });
}
    checkLogin(id){
      console.log("hiii");
      console.log("idin"+id);
      this.props.navigation.navigate('ProductList',{id:id})
      }
    render() {
      const card = this.state.products.map(product =>(
        
<ListItem noIndent style={{ backgroundColor: "#cde1f9" }} onPress={_ =>this.checkLogin(product.id)}>
<Left>
  <Text>{product.name}</Text>
</Left>
<Right>
  <Icon name="arrow-forward" />
</Right>
</ListItem>
      ))


        return (
        <Container>
        <Content>
          <List>
            {card}
            <ListItem noIndent style={{ backgroundColor: "#cde1f9" }} onPress={_ =>this.checkLogin()}>
              <Left>
                <Text>Special Offer</Text>
              </Left>
              <Right>
                <Icon name="arrow-forward" />
              </Right>
            </ListItem>
            <ListItem >
             <Left>
                <Text>Milk Productions</Text>
              </Left>
              <Right>
                <Icon name="arrow-forward" />
              </Right>
            </ListItem>
            <ListItem>
              <Left>
                <Text>Snackers</Text>
              </Left>
              <Right>
                <Icon name="arrow-forward" />
              </Right>
            </ListItem>
          </List>
        </Content>
      </Container>
        );
    }
}

export default Home;