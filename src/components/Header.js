import React from 'react';
import { FaSearch } from 'react-icons/fa';
import { push } from 'redux-first-history';
import { useDispatch } from 'src/store';

const Header = () => {
  const dispatch = useDispatch();

  const handleKeyDown = event => {
    const code = event.keyCode || event.which;
    if (code === 13) {
      const value = event.target.value;
      if (value !== '') {
        dispatch(push(`/games?search=${value}`));
      }
    }
  };

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
          onKeyDown={handleKeyDown}
        />
      </div>
      <button className="login">Login</button>
    </header>
  );
};

export default Header;
