import React from "react";
import Game from "./components/Game";
import NewGameMenu from "./components/NewGameMenu";
import "./App.css";

function App() {
  const [showMenu, setShowMenu] = React.useState(true);

  function displayMenuHandler() {
    setShowMenu(!showMenu);
  }

  return (
    <div className="centered-container">
      {showMenu && <NewGameMenu onDisplayMenuHandler={displayMenuHandler} />}
      {!showMenu && <Game onShowMenu={setShowMenu} />}
    </div>
  );
}

export default App;
