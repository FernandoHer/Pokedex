/* eslint-disable prettier/prettier *//* eslint-disable react-hooks/exhaustive-deps */
/* eslint-disable no-trailing-spaces */

import React, { useEffect, useState } from 'react';
import { StyleSheet, View, TextInput, StyleProp, ViewStyle } from 'react-native';
import  Icon  from 'react-native-vector-icons/Ionicons';
import { useDebouncedValue } from '../hooks/useDebouncedValue';

interface Props {
    onDebounce: (value:string) => void;
    style?: StyleProp<ViewStyle>
}


export const SearchInput = ( {style, onDebounce }:Props) => {
    const [textValue, setTextValue] = useState('');
    const debouncedValue = useDebouncedValue( textValue );

    
    useEffect(() => {
      onDebounce(debouncedValue);
    }, [debouncedValue]);
    

  return (
    <View style={{
            ...styles.container,
            ...style as any,
            }}>
        <View style={ styles.textBackground}>
            <TextInput
                placeholder="Search pokemon"
                placeholderTextColor={'grey'}
                style={styles.textInput}
                autoCapitalize= "none"
                autoCorrect= {false}
                value= {textValue}
                onChangeText= {setTextValue}
            />
            <Icon
                name="search-outline"
                size={ 30 }
                color= "grey"
            />

        </View>

    </View>
  );
};


const styles = StyleSheet.create({
    container:{
        // backgroundColor: 'blue',
    },
    textBackground:{
        backgroundColor: '#F3F1F3',
        borderRadius: 50,
        height: 40,
        paddingHorizontal: 20,
        justifyContent:'center',
        alignItems: 'center',
        flexDirection: 'row',   
        shadowColor: '#000',
        shadowOffset: {
            width: 0,
            height: 3,
        },
        shadowOpacity: 0.27,
        shadowRadius: 4.65,

        elevation: 6,     
    },
    textInput:{
        flex: 1,
        fontSize: 18,
        color: 'black',
    },
});
