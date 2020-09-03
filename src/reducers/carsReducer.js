import { FETCH_CARS, FETCH_CAR, DELETE_CAR } from '../actions';

export default (state = [], action) => {
  switch (action.type) {
    case FETCH_CARS:
      return action.payload;
    case FETCH_CAR:
      return [action.payload];
    case DELETE_CAR:
      return state.filter(element => element.id.toString() !== action.payload);
    default:
      return state;
  }
};
