import { combineReducers } from "redux";

import {reducer,cartReducer} from './reducer';

const Reducers=combineReducers({reducer,cartReducer});

export default Reducers;