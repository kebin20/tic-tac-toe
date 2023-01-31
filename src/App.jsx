import React, { useState } from 'react';
import PVPGame from './components/PvP/PvPGame';
import NewGameMenu from './components/UI/NewGameMenu';
import './App.css';

function App() {
  const [showMenu, setShowMenu] = React.useState(true);
  const [playerOne, setPlayerOne] = useState('');
  const [playerTwo, setPlayerTwo] = useState('');

  function setPlayerOneIcon(icon) {
    setPlayerOne(icon);
  }

  function setPlayerTwoIcon(icon) {
    setPlayerTwo(icon);
  }

  console.log('Player1:' + playerOne, 'Player2:' + playerTwo);

  function displayMenuHandler() {
    setShowMenu(!showMenu);
  }

  return (
    <div className="centered-container">
      {showMenu && (
        <NewGameMenu
          onDisplayMenuHandler={displayMenuHandler}
          onSetPlayerOneIcon={setPlayerOneIcon}
          onSetPlayerTwoIcon={setPlayerTwoIcon}
          playerOne={playerOne}
          playerTwo={playerTwo}
        />
      )}
      {!showMenu && (
        <PVPGame
          onShowMenu={setShowMenu}
          playerOne={playerOne}
          playerTwo={playerTwo}
        />
      )}
    </div>
  );
}

export default App;
