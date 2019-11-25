import { createStore, applyMiddleware, compose } from 'redux';
import thunk from 'redux-thunk';
import rootReducer from './weatherApp/rootReducer';


const middleware = [thunk];
const reduxDevTools = process.env.NODE_ENV !== 'production' &&  window.__REDUX_DEVTOOLS_EXTENSION__ && window.__REDUX_DEVTOOLS_EXTENSION__()



const store = createStore(
  rootReducer,
  compose(
      applyMiddleware(...middleware) ,
      reduxDevTools
      )
)

export default store;