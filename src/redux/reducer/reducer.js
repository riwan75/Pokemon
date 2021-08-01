import * as types from '../constant/actionTypes';

const initialState = {
  loading: false,
  example: {},
  pokemon: {},
};

const reducer = (state = initialState, action) => {
  switch (action.type) {
    // case types.GET_REQUEST:
    //   return Object.assign({}, state, {
    //     loading: true,
    //   });
    // case types.GET_EXAMPLE_SUCCESS:
    //   return Object.assign({}, state, {
    //     loading: false,
    //     example: action.payload,
    //   });
    case types.GET_POKEMON_SUCCESS:
      return Object.assign({}, state, {
        loading: false,
        pokemon: action.payload,
      });
    case types.GET_POKEMON_FAILURE:
      return Object.assign({}, state, {
        loading: false,
        error: action.error,
      });
    default:
      return state;
  }
};

export default reducer;
