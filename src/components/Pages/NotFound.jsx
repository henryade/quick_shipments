import React from 'react';
import errorpage from '../../../public/undraw_page_not_found_su7k.svg';

const NotFound = () => (
  <div className="center-align notfound">
    <div className="shift-down-404">
      <img src={errorpage} alt="404" />
      <h3>PAGE NOT FOUND</h3>
    </div>
  </div>
);

export default NotFound;
