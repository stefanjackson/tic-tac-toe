import React from "react";
import Login from './Components/Login/Login.js';
import Endgame from './Components/Endgame/Endgame.js';
import Navbar from './Components/Navbar/Navbar.js';
import Game from './Components/Game/Game.js';
import './App.css';


class App extends React.Component {
  

  render() {
		return (
			<div className="App">
			  <Navbar />
			</div>
		);
  };
  
}

export default App;
