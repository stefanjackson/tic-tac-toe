import React from "react";

class Endgame extends React.Component {

	state = {
		tied: "The game was a tie.",
		playerWin: this.props.winner + " is the winner!",
	};

	handleClick = () => {
		this.props.endgame(false);
	};

	render() {
		const {winner} = this.props;
		const {tied, playerWin} = this.state;

		return (
			<div className="wrapper">
				<div className="screen">
					<p>
						{winner === "Tied" ? tied : playerWin}
					</p>
					<button className="btn" onClick={this.handleClick}>
						Play again?
					</button>
				</div>
			</div>
			);
	};

}

export default Endgame;