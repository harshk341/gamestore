import React from 'react';
import { Outlet } from 'react-router-dom';
import Header from './Header';

const BaseLayout = () => {
  return (
    <>
      <div className="app_wrapper__content">
        <Header />
        <Outlet />
      </div>
    </>
  );
};

export default BaseLayout;
