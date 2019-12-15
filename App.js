/**
 * Sample React Native App
 * https://github.com/facebook/react-native
 *
 * @format
 * @flow
 */
import React, { Component } from 'react';
import { createStackNavigator } from 'react-navigation-stack';
import { createBottomTabNavigator } from 'react-navigation-tabs';
import { Root } from "native-base";
import { createAppContainer , createSwitchNavigator} from 'react-navigation';
import { Provider } from 'react-redux';
import {AsyncStorage} from 'react-native';
import store from './store';

import Home from './app/components/Home/index'
import Login from './app/components/Login/index';
import Register from './app/components/Register/index';
import History from './app/components/History/index';
import User from './app/components/User/index';
import Cart from './app/components/Cart/index';
import ProductList from './app/components/Home/ProductList/index'
import Item from './app/components/ShopingItem';
import Payment from './app/components/Payment/index';

import { Icon, Badge, Text } from 'native-base';
import IconBadge from 'react-native-icon-badge';
import { getCartItem } from './app/actions/cartAction';

const HomeStack = createStackNavigator({
  Home: Home,
  ProductList: ProductList,
  Item: Item
});

const CartStack = createStackNavigator({
  Cart: Cart,
  Payment: Payment,
  Item: Item
});

const Tab = createBottomTabNavigator({
    Home: {
    screen: HomeStack,
    navigationOptions: {
      tabBarIcon: () => (
        <Icon type="FontAwesome" name="home" />
      )
  }
  },
  Cart: {
    screen: CartStack,
    navigationOptions: {
      tabBarIcon: () => (
        <IconBadge
        MainElement={
            <Icon
                // style={{ margin: 10 }}
                name={'cart'}
                size={25}
                color={'white'}
            />
        }
        BadgeElement={
            <Text style={{ color: '#FFFFFF' }}>
                {store.getState().cart.itemLenght}
            </Text>
        }
        IconBadgeStyle={{
            top:-4,
            right:-6,
            width: 25,
            height: 15,
            backgroundColor: 'red',
            
        }}
        Hidden={false}
    />
        // <Icon 
        // name="cart"
        // />
        
      )
  }
  },
  History: {
    screen: History,
    navigationOptions: {
      tabBarIcon: () => (
        <Icon
        name="paper"/>
      )
  }
  },
  User: {
    screen: User,
    navigationOptions: {
      tabBarIcon: () => (
        <Icon
        name="person"/>
      )
  }
  },
});



const AppNavigator = createSwitchNavigator({
  Login: {
    screen: Login,
  },
  Register: {
    screen: Register,
  },
  Home: {
    screen: Tab,
  },

}
,
  {
    initialRouteName: 'Login',
  },
  
  );

  
const MyMainNavigator = createAppContainer(AppNavigator);

class App extends Component{
  render() {
    // const { navigation } = this.props;
    return (
      <Root>
      <Provider store={store}>
      <MyMainNavigator/>
      </Provider>
      </Root>
    );
  }
}

export default App;

// export default createAppContainer(AppNavigator);
