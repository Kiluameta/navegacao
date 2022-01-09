/**
 * @format
 */

import {AppRegistry} from 'react-native';
import routes from './src/navegacao';
import {name as appName} from './app.json';

AppRegistry.registerComponent(appName, () => routes);
