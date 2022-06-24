/* eslint-disable prettier/prettier *//* eslint-disable react/self-closing-comp */
/* eslint-disable react-native/no-inline-styles */



import React from 'react';
import { ActivityIndicator, Image, StyleSheet, Text, TouchableOpacity, View } from 'react-native';
import { RootStackParams } from '../navigator/Navigator';
import { StackScreenProps } from '@react-navigation/stack';
import  Icon  from 'react-native-vector-icons/Ionicons';
import { useSafeAreaInsets } from 'react-native-safe-area-context';
import { FadeInImage } from '../components/FadeInImage';
import { usePokemon } from '../hooks/usePokemon';
import { PokemonDetails } from '../components/PokemonDetails';



interface Props extends StackScreenProps<RootStackParams, 'PokemomScreen'> {}

export const PokemomScreen = ( {navigation, route}:Props ) => {

  const { simplePokemon, color } = route.params;
  const { top } = useSafeAreaInsets();
  const { isLoading, pokemon  } = usePokemon(simplePokemon.id);


 
  return (
    <View style={{flex:1}}>
      <View style={{
        ...styles.headerContainer,
        backgroundColor: color,
      }}>
        <TouchableOpacity
            onPress={() => navigation.pop() }
            activeOpacity={0.8}
            style={{
              ...styles.backButton,
              top: top + 10,
            }}
        >
          <Icon
            name="arrow-back-outline"
            size={35}
            color= "white"
          />


        </TouchableOpacity>
        <Text
            style={{
              ...styles.pokemonText,
              top: top + 40,
            }}
          >
            { simplePokemon.name + '\n' } # {simplePokemon.id}
        </Text>
        <Image
          source={require('../assets/pokebola-blanca.png' )}
          style={styles.pokebola}
        />
        <FadeInImage
            uri= {simplePokemon.picture}
            style={styles.pokemonImage}
        />
      </View>

         {
         isLoading
            ?
            (<View style={styles.activityIndicator}>
              <ActivityIndicator
                  color={color}
                  size= {30}
              />
            </View>)
            : <PokemonDetails pokemon={pokemon}/>
        }


    </View>

  );
};

const styles = StyleSheet.create({
  headerContainer:{
    height: 370,
    zIndex: 999,
    alignItems: 'center',
    borderBottomRightRadius: 1000,
    borderBottomLeftRadius: 1000,
  },
  backButton:{
    position: 'absolute',
    left: 15,
  },
  pokemonText:{
    color: 'white',
    fontSize: 40,
    alignSelf: 'flex-start',
    left: 20,
  },
  pokebola:{
    width: 250,
    height: 250,
    bottom: -20,
    opacity: 0.7,
  },
  pokemonImage: {
    width: 250,
    height: 250,
    position: 'absolute',
    bottom: -15,
  },
  activityIndicator:{
    flex:1,
    justifyContent: 'center',
    alignContent: 'center',
  },
});
