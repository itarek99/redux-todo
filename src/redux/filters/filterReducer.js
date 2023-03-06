import { COLOR_CHANGE, STATUS_CHANGE } from './filtersActionsType';

const initialState = {
  status: 'all',
  colors: [],
};

const filterReducer = (state = initialState, action) => {
  switch (action.type) {
    case STATUS_CHANGE:
      return { ...state, status: action.payload };

    case COLOR_CHANGE:
      switch (action.payload.changeType) {
        case 'added':
          return { ...state, colors: [...state.colors, action.payload.color] };
        case 'removed':
          return {
            ...state,
            colors: state.colors.filter((exColor) => exColor !== action.payload.color),
          };
        default:
          return state;
      }
    default:
      return state;
  }
};

export default filterReducer;
