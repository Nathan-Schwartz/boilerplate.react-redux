// function from redux that combines multiple reducers
import { combineReducers } from 'redux';

// routerReducer is built into react-router-redux.
// It will sync navigation with the store
// This package wants the store property to be routing.
// The `as` operator will import routerReducer and store it in a variable called `routing`
import { routerReducer as routing } from 'react-router-redux';

// Router written for the text field
import textField from './textField';


export default combineReducers({
  routing, // Same as `routing: routing,`
  textField
});
