import React from 'react';
import { browserHistory, Link } from 'react-router';


export default function Home({
  textFieldValue,
  updateTextFieldValue,
  clearTextFieldValue
}) {
  return (
    <div>
      <div> This is the home page! </div>
      <input
        type='text'
        placeholder='type here'
        value={textFieldValue}
        onChange={(e) => updateTextFieldValue(e.target.value)}
      />
      <button onClick={() => clearTextFieldValue()}>
        Clear Field
      </button>
      <br />
      <div> Hey look it types here too: {textFieldValue} </div>
      <br />
      <br />

      {/* <Link to=""> is the React Router version of <a href=""> */}
      <Link to="/OtherPage"> Go to the other page {"<a href=''"} style </Link>
      
      {/* browserHistory.push("") is similar to window.location.href = "" */}
      <button onClick={() => browserHistory.push('/OtherPage')} >
        Go to the other page {"<window.location.href=''"} style
      </button>
    </div>
  );
}

Home.propTypes = {
  textFieldValue: React.PropTypes.string,
  updateTextFieldValue: React.PropTypes.func,
  clearTextFieldValue: React.PropTypes.func
};
