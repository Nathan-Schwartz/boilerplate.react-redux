import React from 'react';
import { Link } from 'react-router';

export default function PageOne() {
  return (
    <div>
      This is another page!
      <br />
      
      {/* <Link to=""> is the React Router version of <a href=""> */}
      <Link to="/"> Go back home </Link>
    </div>
  );
}
