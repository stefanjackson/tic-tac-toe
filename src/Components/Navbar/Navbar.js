import React from "react";
import './Navbar.css';

class Navbar extends React.Component {

	render() {
		const {player1Score, player2Score, ties, userName1, userName2} = this.props;

		return (
			<div className="navbar">
				<div className="title">
					<h1>Tic-Tac-Toe</h1>
				</div>

				<div className="stats">
					<h2>
						{userName1} : {player1Score}

					</h2>

					<h2>
						{userName2} : {player2Score}
					</h2>

					<h2>
						Ties : {ties}
					</h2>
				</div>
			</div>
			);
	};

}

export default Navbar;