/**
 * Sample React Native App
 * https://github.com/facebook/react-native
 *
 * @format
 */

import React from 'react';
import { NavigationContainer } from "@react-navigation/native";
import { SafeAreaView, StatusBar, StyleSheet } from 'react-native';
import MyTabs from './navigator/MyTabs';



function App(): JSX.Element {
 

  return (
    <>
    <StatusBar barStyle="dark-content" />
    <SafeAreaView style={{ flex: 1 }}>
      <NavigationContainer>
        <MyTabs />
      </NavigationContainer>
    </SafeAreaView>
    </>
  );
}

const styles = StyleSheet.create({
  
});

export default App;
