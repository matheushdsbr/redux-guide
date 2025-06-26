import { combineReducers } from "redux";

import userReducer from "./user/slice";
import cartReducer from "./cart/slice";
import favoriteReducer from "./favorite/slice";

const rootReducer = combineReducers({
  userReducer,
  cartReducer,
  favoriteReducer,
});

export default rootReducer;
