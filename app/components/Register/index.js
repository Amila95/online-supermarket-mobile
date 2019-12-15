import React, { Component } from 'react';
import { Container, Header, Content, Form, Item, Input, Label, Button , Text} from 'native-base';

class Register extends Component {
  state = { username:"",password:"",confirmPassword:""}
  checkLogin(){
    const {username, password, confirmPassword} = this.state
    console.log("username:"+username);
    console.log("username:"+password);
    console.log("username:"+confirmPassword);
    const data = {
      username: this.state.username,
      password: this.state.password,
      confirmPassword: this.state.confirmPassword
    };
    fetch("http://192.168.1.102:9000/api/users/register", {
            method: "POST",
            body: JSON.stringify(data),
            headers: {
              "content-type": "application/json",
              "cache-control": "no-cache"
            }
          })
            .then(responseJson => {
              this.setState({ statusCode: responseJson.status });
              return responseJson.json();
            })
            .then(response => {
              const data = response;
              console.log(data);
              if (this.state.statusCode == 201) {
                this.props.navigation.navigate('Home')
              } else {
                this.setState({ errorMsg: data.username });
              }
            })
            .catch(error => {
              console.error(error);
            });
    // if(username =='Admin' && password =='Admin'){
    //     this.props.navigation.navigate('Home')
    // }
    // else{
    //     Alert.alert('Error','Username/Password mismatch',[{text:'Ok'}])
    // }
}
    render() {
        
        return (
            
               
    <Container>
        <Header />
        <Content>
          <Form>
            <Item floatingLabel>
              <Label>Username</Label>
              <Input onChangeText={text => this.setState({username: text})} />
            </Item>
            <Item floatingLabel>
              <Label>Password</Label>
              <Input onChangeText={text => this.setState({password: text})} />
            </Item>
            <Item floatingLabel>
              <Label>Comfirm Password</Label>
              <Input onChangeText={text => this.setState({confirmPassword: text})} />
            </Item>
            <Button primary onPress={_ =>this.checkLogin()}><Text> Light </Text></Button>
          </Form>
        </Content>
      </Container>
                
                
           
        );
    }
}

export default Register;