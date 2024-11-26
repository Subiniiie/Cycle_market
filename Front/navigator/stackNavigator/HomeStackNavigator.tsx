import React from 'react';
import { createStackNavigator } from '@react-navigation/stack';
import HomeScreen from '../../src/screen/home/HomeScreen';
import FreitagStoryScreen from '../../src/screen/home/FreitagStoryScreen';

const HomeStack = createStackNavigator();

function HomeStackNavigator() {
  return (
    <HomeStack.Navigator>
        <HomeStack.Screen name='Home' component={HomeScreen} />
        <HomeStack.Screen name='FreitagStory' component={FreitagStoryScreen} />
    </HomeStack.Navigator>
  )
}

export default HomeStackNavigator
