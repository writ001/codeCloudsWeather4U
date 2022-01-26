import { combineReducers } from "redux";
import ReportReducer from "./ReportReducer";
import CityWeatherReducer from "./CityWeatherReducer";
import AlertReducer from "./AlertReducer";

const reducers=combineReducers({
    report:ReportReducer,
    cityWeather:CityWeatherReducer,
    alert: AlertReducer
})

export default reducers;