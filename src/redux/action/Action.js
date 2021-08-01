import AsyncStorage from '@react-native-async-storage/async-storage';
import axios from 'axios';
import * as types from '../constant/actionTypes';

const getRequest = () => ({
  type: types.GET_REQUEST,
});

// const getExampleSucces = example => ({
//   type: types.GET_EXAMPLE_SUCCESS,
//   payload: example,
// });

// const getExampleFailure = error => ({
//   type: types.GET_EXAMPLE_FAILURE,
//   error,
// });

const getPokemonSuccess = pokemon => ({
  type: types.GET_POKEMON_SUCCESS,
  payload: pokemon,
});

const getPokemonFailure = error => ({
  type: types.GET_POKEMON_FAILURE,
  error,
});

// export const getExampleAction = () => {
//   let url = 'https://someurl.com/killme';
//   return async dispatch => {
//     dispatch(getRequest());
//     try {
//       const response = await axios.get(url);
//       dispatch(getExampleSucces(response.data.data));
//     } catch (error) {
//       console.log('Error', error);
//       dispatch(getExampleFailure(error));
//     }
//   };
// };

export const getPokemonAction = () => {
  let url = 'https://pokeapi.co/api/v2/pokemon?limit=30';
  return async dispatch => {
    dispatch(getRequest());
    try {
      const response = await axios.get(url);
      dispatch(getPokemonSuccess(response.data.results));
      // console.log('response', response.data.results);
    } catch (error) {
      console.log('Error', error);
      dispatch(getPokemonFailure(error));
    }
  };
};
