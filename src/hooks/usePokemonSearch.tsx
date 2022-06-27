/* eslint-disable prettier/prettier *//* eslint-disable react-hooks/exhaustive-deps */


import { useEffect, useState } from 'react';
import { pokemonApi } from '../api/pokemonApi';
import { PokemonPaginatedResponse, Result, SimplePokemon } from '../interfaces/pokemonInterfaces';

export const usePokemonSearch = () => {

    const [isFetching, setIsFetching] = useState(true);
    const [simplePokemonList, setSimplePokemonList] = useState<SimplePokemon[]>([]);



    const loadPokemon = async() => {
        const resp = await pokemonApi.get<PokemonPaginatedResponse>('https://pokeapi.co/api/v2/pokemon?limit=1200');
        mapPakemonListToSimplePokemon(resp.data.results);
    };

    const mapPakemonListToSimplePokemon = ( pokemonList: Result[] ) => {
        const newPokemonList: SimplePokemon[] = pokemonList.map(({name,url}) =>{
                const urlParts = url.split('/');
                const id = urlParts[urlParts.length - 2];
                const picture = `https://raw.githubusercontent.com/PokeAPI/sprites/master/sprites/pokemon/other/official-artwork/${id}.png`;

                return {
                    id,
                    name,
                    picture,
                };
            });
            setSimplePokemonList([ ...newPokemonList ]);
            setIsFetching(false);
    };

    useEffect(() => {
      loadPokemon();
    }, []);

    return ({
        simplePokemonList,
        isFetching,

    });

};
