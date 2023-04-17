import React from 'react';

const Header = () => {
  return (
    <header className="app_header">
      <h2 className="logo">
        <a href="/">Game Store</a>
      </h2>
      <div className="search_bar">
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
