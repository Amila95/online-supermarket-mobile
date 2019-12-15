import React, { Component } from 'react';
import { View, TextInput, Alert} from 'react-native';
import { Container, Header, Content, Form, Item, Input, Label, Button , Text} from 'native-base';
import styles from './styles';
import { loginUser } from '../../actions/authAction';
import { connect } from 'react-redux';

class Login extends Component {
    state = { username:"",password:"",errors: "",}
    static navigationOptions ={
        header: null
    }

    // checkLogin(){
    //     const {username, password} = this.state
    //     if(username =='Admin' && password =='Admin'){
    //         this.props.navigation.navigate('Home')
    //     }
    //     else{
    //         Alert.alert('Error','Username/Password mismatch',[{text:'Ok'}])
    //     }
    // }
    componentWillReceiveProps(nextProps){
        console.log("auth"+nextProps.auth.isAuthenticated)
        if(nextProps.auth.isAuthenticated){

          this.props.navigation.navigate('Home')
        }
        if(nextProps.errors){
        console.log("errtr"+nextProps.errors.username)
          this.setState({errors:nextProps.errors});
        }
      }

    checkLogin(){
    if (this.state.username.length > 0 && this.state.password.length > 0) {
        const data = {
                username: this.state.username,
                password: this.state.password
        };
        this.props.loginUser(data);
        }
    }
    render() {
        const {heading, input, parent} = styles
        const { errors } = this.state;
        return (
<Container>
<Header />
<Content>
  <Form>
    <Item floatingLabel error = {errors.username != null}>
      <Label>Username</Label>
      <Input onChangeText={text => this.setState({username: text})} />
    </Item>
    <Label>{errors.username}</Label>
    
    <Item floatingLabel error = {errors.password != null}> 
      <Label>Password</Label>
      <Input onChangeText={text => this.setState({password: text})} />
    </Item>
    <Label>{errors.password}</Label>
    <Button primary onPress={_ =>this.checkLogin()}><Text> Login </Text></Button>
  </Form>
</Content>
</Container>
                
            
        );
    }
}

const mapStateToProps = (state) =>({
    auth: state.auth,
    errors: state.errors
  })
  
export default connect(mapStateToProps,{ loginUser})(Login);

// export default Login;