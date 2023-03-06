import { COLOR_CHANGE, STATUS_CHANGE } from './filtersActionsType';

export const statusChange = (status) => {
  return { type: STATUS_CHANGE, payload: status };
};
export const colorChange = (color, changeType) => {
  return { type: COLOR_CHANGE, payload: { color, changeType } };
};
