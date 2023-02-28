import React from 'react';
import { Link } from 'react-router-dom';

function HomeButton() {
  return (
    <div className="back-button ">
    <Link to='/home'>
      <button>Back to home</button>
    </Link>
    </div>
  );
}

export default HomeButton;