import { connect } from 'react-redux';

import { UPDATE_TEXT, CLEAR_TEXT } from '../actions';
import Home from '../components/home';

// We use Redux for all app state.
// Any component that needs state is considered a container.
// connect() returns a component that has Redux baked in.
const mapState = (store) => ({
  textFieldValue: store.textField
});

const mapDispatch = (dispatch) => ({
  updateTextFieldValue: (newText) => {
    dispatch({ type: UPDATE_TEXT, data: newText });
  },
  clearTextFieldValue: () => {
    dispatch({ type: CLEAR_TEXT });
  }
});

export default connect(mapState, mapDispatch)(Home);
