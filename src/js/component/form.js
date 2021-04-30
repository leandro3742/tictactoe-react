import React, { useState } from "react";
import Jugar from "./jugador";

export default function Form() {
	const [primerJugador, setPrimerJugador] = useState("");
	const [segundoJugador, setSegundoJugador] = useState("");
	const [mostrar, setMostrar] = useState({});
	const [jugar, setJugar] = useState("");
	const fPlayer = event => {
		setPrimerJugador(event.target.value);
	};
	const sPlayer = event => {
		setSegundoJugador(event.target.value);
	};
	const start = () => {
		setMostrar({ display: "none" });
		setJugar(<Jugar fPlayer={primerJugador} sPlayer={segundoJugador} />);
	};

	return (
		<div className="mt-5 bg-dark d-flex justify-content-center">
			<div style={mostrar}>
				<form>
					<input
						value={primerJugador}
						onChange={fPlayer}
						className="m-2"
						type="text"
						placeholder="first player"
						id="firstPlayer"
					/>
					<input
						value={segundoJugador}
						onChange={sPlayer}
						type="text"
						placeholder="second player"
						id="secondPlayer"
					/>
				</form>
				<div className="d-flex justify-content-center">
					<button
						onClick={start}
						className="botonForm mt-3 btn btn-primary">
						Start
					</button>
				</div>
				<div className="d-flex justify-content-center">
					<div className="m-3 text-warning botonX rounded d-flex justify-content-center align-items-center">
						X
					</div>
					<div className="m-3 text-primary botonX rounded d-flex justify-content-center align-items-center">
						O
					</div>
				</div>
			</div>

			<div>{jugar}</div>
		</div>
	);
}
