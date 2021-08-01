import React from 'react';
import {StyleSheet, Text, View, Image} from 'react-native';

const PokemonCards = ({item}) => {
  // console.log('item', item);
  return (
    <View style={styles.content}>
      <View style={{flexDirection: 'row'}}>
        <Image
          style={styles.cover}
          source={{uri: item.sprites.front_default}}
        />
        <View>
          <Text>{item.name.charAt(0).toUpperCase() + item.name.slice(1)}</Text>
          <Text>skill</Text>
        </View>
      </View>
    </View>
  );
};

export default PokemonCards;

const styles = StyleSheet.create({
  content: {
    flex: 1,
  },
  cover: {
    height: 100,
    width: 100,
    borderRadius: 10,
    backgroundColor: '#e1f5fe',
  },
});
