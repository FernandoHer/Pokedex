/* eslint-disable prettier/prettier *//* eslint-disable react-native/no-inline-styles */


import React from 'react';
import { createBottomTabNavigator } from '@react-navigation/bottom-tabs';
import { Navigator } from './Navigator';
import { SearchScreen } from '../screens/SearchScreen';
import { Platform } from 'react-native';
import  Icon  from 'react-native-vector-icons/Ionicons';



const Tab = createBottomTabNavigator();

export const Tabs = () => {
  return (
    <Tab.Navigator
      sceneContainerStyle={{
        backgroundColor: 'white',
      }}
      screenOptions={{
        headerShown: false,
        tabBarActiveTintColor: '#5856D5',
        tabBarStyle: {
          position:'absolute',
          backgroundColor: 'rgba(255,255,255,0.82)',
          paddingBottom: (Platform.OS === 'ios') ? 0 : 10,
          borderWidth: 0,
          elevation: 0,
          height: (Platform.OS === 'ios') ? 70 : 80,
        },
      }}

    >
      <Tab.Screen
          name="Navigator"
          component={Navigator}
          options={{
            tabBarLabel: 'List',
            tabBarIcon: ({color}) => (
              <Icon
                name="list-outline"
                color= {color}
                size= { 25 }
              />
            ),
          }}
      />
      <Tab.Screen
          name="SearchScreens"
          component={SearchScreen}
          options={{
            tabBarLabel: 'Search',
            tabBarIcon: ({color}) => (
              <Icon
                name="search-outline"
                color= {color}
                size= { 25 }
              />
            ),
          }}
      />
    </Tab.Navigator>
  );
};
