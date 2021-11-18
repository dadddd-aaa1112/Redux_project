import { combineReducers } from "redux";
import CarsReducers from "./car";
import CityReducers from "./city";
import CarActive from "./carActive";
import CityActive from "./cityActive";

const allReducers = combineReducers({
  cars: CarsReducers,
  activeCar: CarActive,
  citys: CityReducers,
  activeCity: CityActive
});

export default allReducers;
