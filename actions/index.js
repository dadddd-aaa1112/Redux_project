import city from "../reducers/city";

export const select = (car) => {
  alert("Now car is " + car.name);

  return {
    type: "CAR_SELECTED",
    payload: car
  };
};

export const selectCity = (city) => {
  alert("this sity" + city.name);

  return {
    type: "City_slected",
    payload: city
  };
};
