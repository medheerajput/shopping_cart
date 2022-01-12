import { createStore } from "redux";
import Reducers from '../Reducer/combineReducer';

const Storages=createStore(Reducers);

export default Storages;