export const select = (car) => {
  return {
    type: "CAR_SELECTED",
    payload: car
  };
};

export const selectCity = (city) => {
  return {
    type: "City_slected",
    payload: city
  };
};
