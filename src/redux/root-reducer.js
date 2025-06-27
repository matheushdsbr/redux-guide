import { combineReducers } from "redux";

import userReducer from "./user/slice";
import cartReducer from "./cart/slice";
import favoriteReducer from "./favorite/slice";
import uiReducer from "./ui/slice";

const rootReducer = combineReducers({
  userReducer,
  cartReducer,
  favoriteReducer,
  uiReducer,
});

export default rootReducer;
