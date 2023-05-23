/**
 * @format
 */

import {AppRegistry} from 'react-native';
import App from './App';
import {name as appName} from './app.json';
import './screens/i18n';
import './shim'

AppRegistry.registerComponent(appName, () => App);