import React from 'react';
import { FaSearch } from 'react-icons/fa';

const Header = () => {
  return (
    <header className="app_header">
      <h2 className="logo">
        <a href="/">Game Store</a>
      </h2>
      <div className="search_bar">
        <span className="search_bar__icon">
          <FaSearch />
        </span>
        <input
          type="text"
          placeholder="Search for games"
          className="search_bar__input"
        />
      </div>
      <button className="login">Login</button>
    </header>
  );
};

export default Header;
