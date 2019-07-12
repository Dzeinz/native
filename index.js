import React from 'react';
import { View, AppRegistry } from 'react-native';
import Header from 'components/Header';
import AlbumList from 'components/AlbumList';
import { name as appName } from './app.json';

const App = () => (
  <View>
    <Header headerText="Albums" />
    <AlbumList />
  </View>
);

AppRegistry.registerComponent(appName, () => App);
