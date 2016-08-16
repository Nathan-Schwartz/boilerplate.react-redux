import { expect } from 'chai';
import initialState from '../../../client/store/initialState';

describe('Client: store/initialState.js', function () {
  it('initialState should have a textField property', function () {
    expect(initialState).to.exist;
  });
  
  it('initialState.textField should be an empty string', function () {
    expect(initialState.textField).to.equal('')
  });
});
