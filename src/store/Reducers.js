import { combineReducers } from "redux";
import { connectRouter } from "connected-react-router";
import  reducerProduct  from "../services/product/productReducer";
import  reducerCategory from "../services/category/categoryReducer";


const appReducer = history =>
  combineReducers({
    router: connectRouter(history),
    product: reducerProduct,
    category: reducerCategory,
  }); 

const rootReducer = history => {
  return (state, action) => {
    return appReducer(history)(state, action);
  };
};
export default rootReducer;
