import { FETCH_CARS } from '../actions';

export default (state = [], action) => {
  switch (action.type) {
    case FETCH_CARS:
      return action.payload;
    default:
      return state;
  }
};
