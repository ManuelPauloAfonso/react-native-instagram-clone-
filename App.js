import { StatusBar } from 'expo-status-bar';
import { StyleSheet, Text, View } from 'react-native';

import { StatusBar } from 'react-native';


import Routers from './src/router';

export default function App() {
  return (
    <>
          <StatusBar barStyle="dark-content" backgroundColor='#f5f5f5'  />
          <Routers />

    </>
  );
}


