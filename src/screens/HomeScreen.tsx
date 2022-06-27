/* eslint-disable prettier/prettier *//* eslint-disable react-native/no-inline-styles */

import React from 'react';
import { ActivityIndicator, FlatList, Image, Text, View } from 'react-native';
import { useSafeAreaInsets } from 'react-native-safe-area-context';
import { styles } from '../theme/appTheme';
import { usePokemonPaginated } from '../hooks/usePokemonPaginated';
import { PokemonCard } from '../components/PokemonCard';


export const HomeScreen = () => {
    const { top } = useSafeAreaInsets();
    const { simplePokemonList, loadPokemon } = usePokemonPaginated();
    // console.log(simplePokemonList);
  return (
    <>
        <Image
            source={ require('../assets/pokebola.png') }
            style= {styles.pokebolaBG}
        />
        <View
          style={{ alignItems:'center' }}
        >
          <FlatList
              data={ simplePokemonList }
              keyExtractor= { (pokemon) => pokemon.id }
              numColumns= { 2 }
              showsVerticalScrollIndicator= {false}
              ListHeaderComponent={(
                <Text style={{
                      ...styles.title,
                      ...styles.globalMargin,
                      top: top + 20,
                      marginBottom: top + 20,
                      paddingBottom: 10,
                    }}>
                        Pokedex
                </Text>
              )}
              renderItem= {({item}) => <PokemonCard pokemon={item}/>}

              // infinity scroll
              onEndReached= {loadPokemon }
              onEndReachedThreshold= {0.4}

              ListFooterComponent= {(
                <ActivityIndicator
                  style={{height:100}}
                  size={25}
                  color="gray"
                />
              )}
          />
        </View>
    </>
  );
};
