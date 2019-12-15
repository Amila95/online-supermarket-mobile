/**
 * @format
 */

import {AppRegistry} from 'react-native';
import App from './App';
import {name as appName} from './app.json';
import axios from 'react-native-axios';

axios.defaults.baseURL = 'http://192.168.1.100:9001';
AppRegistry.registerComponent(appName, () => App);
