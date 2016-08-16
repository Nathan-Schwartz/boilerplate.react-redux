import { expect } from 'chai';
import textFieldReducer from '../../../client/reducers/textField';
import initialState from '../../../client/store/initialState';
import { CLEAR_TEXT, UPDATE_TEXT } from '../../../client/actions';

describe('Client: reducers/textField.js', function () {
  it('textField should export a function', function () {
    expect(typeof textFieldReducer).to.equal('function');
  });
  
  it('result of the textField reducer (when given undefined) should be the same as initialState.textField', function () {
    expect(textFieldReducer(undefined, {})).to.equal(initialState.textField);
  });

  it('textField reducer should the old state when given an unknown action', function () {
    var oldState = 'Please keep me.';

    expect(textFieldReducer(oldState, { type: "WHO KNOWShehehhehehehehhee", data: "UPDATE plz" })).to.equal(oldState);
  });

  it('textField reducer should return the data passed in for an "UPDATE_TEXT" action.', function () {
    var existingState = 'This should be overwritten';
    var testString = 'HAIII';

    expect(textFieldReducer(existingState, { type: UPDATE_TEXT, data: testString })).to.equal(testString);
  });

  it('textField reducer should return and empty string for a "CLEAR_TEXT" action.', function () {
    var existingState = 'This should be overwritten';
    var testString = 'HAIII';

    expect(textFieldReducer(existingState, { type: CLEAR_TEXT, data: testString })).to.equal('');
  });
});