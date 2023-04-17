import React from 'react';
import { Games, Header } from 'src/components';

function App() {
  return (
    <div className="App">
      <div className="app_wrapper">
        <div className="app_wrapper__content">
          <Header />
          <Games />
        </div>
      </div>
    </div>
  );
}

export default App;
