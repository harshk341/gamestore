import React from 'react';
import { Route, Routes } from 'react-router-dom';
import { Games, Header, Game } from 'src/components';
import { GAME, GAME_SCREENSHOT } from './rawData';

function App() {
  return (
    <div className="App">
      <div className="app_wrapper">
        <div className="app_wrapper__content">
          <Header />
          <Routes>
            <Route path="/" element={<Games />} />
            <Route path="/games">
              <Route index element={<Games />} />
              <Route
                path=":id"
                element={<Game game={GAME} screenshots={GAME_SCREENSHOT} />}
              />
            </Route>
          </Routes>
        </div>
      </div>
    </div>
  );
}

export default App;
