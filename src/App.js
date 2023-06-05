import React from 'react';
import { useRoutes } from 'react-router-dom';
import router from './router';

function App() {
  let content = useRoutes(router);

  return (
    <div className="App">
      <div className="app_wrapper">{content}</div>
    </div>
  );
}

export default App;
