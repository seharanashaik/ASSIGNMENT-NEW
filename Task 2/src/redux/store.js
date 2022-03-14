import { createStore } from "redux";
import movieReducer from "./movie/reducers/movie.reducers";

const store = createStore(movieReducer);

export default  store;