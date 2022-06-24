/* eslint-disable prettier/prettier *//* eslint-disable react/react-in-jsx-scope */

import { createStackNavigator } from '@react-navigation/stack';
import React from 'react';
import { HomeScreen } from '../screens/HomeScreen';
import { PokemomScreen } from '../screens/PokemomScreen';
import { SimplePokemon } from '../interfaces/pokemonInterfaces';

export type RootStackParams = {
  HomeScreen: undefined,
  PokemomScreen: { simplePokemon: SimplePokemon, color: string}
}

const Stack = createStackNavigator<RootStackParams>();

export const Navigator = () => {
  return (
    <Stack.Navigator
      screenOptions={{
        headerShown:false,
        cardStyle:{
          backgroundColor: 'white',
        },
      }}
    >
      <Stack.Screen name="HomeScreen" component={HomeScreen} />
      <Stack.Screen name="PokemomScreen" component={PokemomScreen} />
    </Stack.Navigator>
  );
};
