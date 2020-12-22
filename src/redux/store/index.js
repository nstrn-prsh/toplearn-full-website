import { createStore, compose, applyMiddleware } from "redux";
import thunk from "redux-thunk";
import { reducers } from "./../reducer";
import { getAllCourses } from './../action/courses';

export const store = createStore(
  reducers,
  // emale chanda middleWare
  compose(
    applyMiddleware(thunk),
    window.__REDUX_DEVTOOLS_EXTENSION__ && window.__REDUX_DEVTOOLS_EXTENSION__()
  )
);

// INIT amade sazi: chon dade ha az server mian bayad yekam sabr konim
// zamani ke store sakhte mishe , in action ezam mishe be reducer
// dar natije avalin bar dade ha amade bashan ke ma bebinim
store.dispatch(getAllCourses());

// taghirate toye store 
store.subscribe(() => console.log(store.getState()));
