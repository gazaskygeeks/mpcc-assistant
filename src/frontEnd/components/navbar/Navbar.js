import React from 'react';

import './navbar.css';

class Navbar extends React.Component {
  render() {
    return (
      <nav className='navbar'>
        <div className='nav-left logo'><h1>MPCC Assistant</h1></div>
        <div className='nav-right'>
          <ul className='list'>
            <li><a href='/dashboard'><i className='fa fa-home fa-2x wi'></i></a></li>
            <li><a href='#'><i className='fa fa-plus fa-2x wi'></i></a></li>
          </ul>
        </div>
      </nav>
    );
  }
}

export default Navbar;
