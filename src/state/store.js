import { applyMiddleware } from "redux";
import thunk from "redux-thunk";
import { createStore } from 'redux'
import reducers from'./reducers'



export const store = createStore(reducers, {},applyMiddleware(thunk))
 