import axios from 'axios';
import React, {useEffect, useState} from 'react';
import {StyleSheet, Text, View} from 'react-native';
import {FlatList} from 'react-native-gesture-handler';
import {useDispatch, useSelector} from 'react-redux';
import PokemonCards from '../components/pokemonCards';

import {getPokemonAction} from '../redux/action/Action';

const Home = () => {
  const dispatch = useDispatch();
  const pokemon = useSelector(state => state.data.pokemon);

  const [pokemonlist, setPokemonList] = useState(null);

  useEffect(async () => {
    dispatch(getPokemonAction());
    collectPokemon();
  }, []);

  const collectPokemon = async () => {
    Promise.all(
      pokemon.map(async x => {
        const listPokemon = await axios.get(x.url);
        return listPokemon;
      }),
    ).then(res => {
      const listdata = res.map(obj => obj.data);
      setPokemonList(listdata);
    });
  };

  const renderItem = ({item}) => <PokemonCards item={item} />;

  return (
    <View>
      <FlatList
        data={pokemonlist}
        renderItem={renderItem}
        keyExtractor={item => item.id}
      />
    </View>
  );
};

export default Home;

const styles = StyleSheet.create({});
