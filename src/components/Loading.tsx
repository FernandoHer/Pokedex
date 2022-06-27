/* eslint-disable prettier/prettier */
import React from 'react';
import { ActivityIndicator, StyleSheet, Text, View } from 'react-native';

export const Loading = () => {
  return (
    <View style={styles1.avtivityContainer}>
        <ActivityIndicator
          size={ 50 }
          color= "grey"
        />
        <Text style={styles1.testLoading}>Loading.....</Text>
      </View>
  );
};

const styles1 = StyleSheet.create({
    avtivityContainer:{
      flex: 1,
      fontSize: 50,
      alignItems:'center',
      justifyContent: 'center',
    },
    testLoading:{
      color: 'grey',
      fontSize: 25,
    },

  });
