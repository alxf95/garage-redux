import axios from 'axios';

export const FETCH_CARS = 'FETCH_CARS';
export const FETCH_CAR = 'FETCH_CAR';
export const DELETE_CAR = 'DELETE_CAR';
const CREATE_CAR = 'CREATE_CAR';

// const updateCarsWithUrl = cars => {
//   cars.forEach(async car => {
//     const promise = await axios
//       .get(
//         `https://www.carimagery.com/api.asmx/GetImageUrl?searchTerm=${car.brand}+${car.model}`
//       )
//       .then(response => response.data);

//     const regex = /(?=http:\/\/www\.regcheck).+(?=<\/string>)/g;

//     const carUrl = promise.match(regex)[0];

//     car['url'] = carUrl;
//   });
//   return cars;
// };

export const createCar = async (body, garage, callback) => {
  const promise = await axios({
    method: 'post',
    url: `https://wagon-garage-api.herokuapp.com/${garage}/cars`,
    data: body,
  }).then(callback);

  return {
    type: CREATE_CAR,
    payload: promise.data,
  };
};

export const fetchCar = async id => {
  const promise = await axios.get(
    `https://wagon-garage-api.herokuapp.com/cars/${id}`
  );

  return {
    type: FETCH_CAR,
    payload: promise.data,
  };
};

export const deleteCar = async id => {
  await axios.delete(`https://wagon-garage-api.herokuapp.com/cars/${id}`);

  return { type: DELETE_CAR, payload: id };
};

export const fetchCars = async garage => {
  const promise = await axios.get(
    `https://wagon-garage-api.herokuapp.com/${garage}/cars`
  );

  // const cars = updateCarsWithUrl(promise.data);

  return {
    type: FETCH_CARS,
    payload: promise.data,
  };
};
