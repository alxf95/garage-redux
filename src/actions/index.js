import axios from 'axios';

export const FETCH_CARS = 'FETCH_CARS';

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

export const createCar = (body, callback) => {
  console.log(body, callback);
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
