import { combineReducers } from "redux";
import CarsReducers from "./car";
import CityReducers from "./city";
import CarActive from "./carActive";

const allReducers = combineReducers({
  cars: CarsReducers,
  activeCar: CarActive,
  citys: CityReducers
});

export default allReducers;
