import { connect } from 'react-redux';

import { UPDATE_TEXT, CLEAR_TEXT } from '../actions';
import Home from '../components/home';

// We use Redux for all app state.
// Any component that needs state is considered a container.
// connect() returns a component that has Redux baked in.

// The two functions below return objects.
// The keys in each object are added to the child component specified on line 34
// (in this case Home) as props. Within Home you could access them as:
// this.props.textFieldValue
// -or-
// this.props.clearTextFieldValue()

// This function allows you to choose which store properties you want to pass in.
const mapStateToProps = (store) => ({
  textFieldValue: store.textField
});

// This function returns an object with methods
// Each method will dispatch an action. In this way you can limit
// which components are aware of Redux.
const mapDispatchToProps = (dispatch) => ({
  updateTextFieldValue: (newText) => {
    dispatch({ type: UPDATE_TEXT, data: newText });
  },
  clearTextFieldValue: () => {
    dispatch({ type: CLEAR_TEXT });
  }
});

export default connect(mapStateToProps, mapDispatchToProps)(Home);
