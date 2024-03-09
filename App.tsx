/**
 * Sample React Native App
 * https://github.com/facebook/react-native
 *
 * @format
 */

import React from 'react';
import type {PropsWithChildren} from 'react';
import {
  SafeAreaView,
  ScrollView,
  StatusBar,
  StyleSheet,
  Text,
  useColorScheme,
} from 'react-native';

function App(): React.JSX.Element {
  const isDarkMode = useColorScheme() === 'dark';

  const backgroundStyle = {
    backgroundColor: 'red',
    height:'100%',
    display : 'flex',
    alignItems :'center',
    justifyContent : 'center'
  };

  return (
    <SafeAreaView style={backgroundStyle}>
     
    <Text>Başlangıç</Text>
    </SafeAreaView>
  );
}

export default App;
