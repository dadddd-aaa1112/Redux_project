import { combineReducers } from "redux";
import CarsReducers from "./car";
import CityReducers from "./city";

const allReducers = combineReducers({
  cars: CarsReducers,
  citys: CityReducers
});

export default allReducers;
