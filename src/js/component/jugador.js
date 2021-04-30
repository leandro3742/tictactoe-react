import React, { useState } from "react";

// const [uno, setUno] = useState("");
// const [dos, setDos] = useState("");
// const [tres, setTres] = useState("");
// const [cuatro, setCuatro] = useState("");
// const [cinco, setCinco] = useState("");
// const [seis, setSeis] = useState("");
// const [siete, setSiete] = useState("");
// const [ocho, setOcho] = useState("");
// const [nueve, setNueve] = useState("");

let jugador1 = [];
let jugador2 = [];

let arreglo_vacio = [];
for (let i = 0; i < 9; i++) {
	arreglo_vacio[i] = "";
}
export default function Jugar(props) {
	// console.log(props.fPlayer);
	let jugadores = props;
	let arreglo_vacio = [];
	for (let i = 0; i < 9; i++) {
		arreglo_vacio[i] = "";
	}
	const [arr, setArr] = useState(arreglo_vacio);
	const [jugador, setJugador] = useState(true);
	const [cuadradosOn, setCuadradosOn] = useState(0);
	const [ganador, setGanador] = useState("");
	const [turno, setTurno] = useState("Turno de " + jugadores.fPlayer);
	//cuadradosOn guarda la cantidad de cuadrados que ya fueron utilizados
	//si jugador = true => jugador1
	//si jugador = false => jugador2

	function ver_si_gano(jugador) {
		if (arr[0] === jugador && arr[1] === jugador && arr[2] === jugador) {
			//Horizontal
			return true;
		} else if (
			arr[0] === jugador &&
			arr[3] === jugador &&
			arr[6] === jugador
		) {
			//Vertical
			return true;
		} else if (
			arr[0] === jugador &&
			arr[4] === jugador &&
			arr[8] === jugador
		) {
			//Diagonal
			return true;
		} else if (
			arr[1] === jugador &&
			arr[4] === jugador &&
			arr[7] === jugador
		) {
			//Vertical
			return true;
		} else if (
			arr[2] === jugador &&
			arr[5] === jugador &&
			arr[8] === jugador
		) {
			//Vertical
			return true;
		} else if (
			arr[3] === jugador &&
			arr[4] === jugador &&
			arr[5] === jugador
		) {
			//horizontal
			return true;
		} else if (
			arr[6] === jugador &&
			arr[7] === jugador &&
			arr[8] === jugador
		) {
			//horizontal
			return true;
		} else if (
			arr[2] === jugador &&
			arr[4] === jugador &&
			arr[6] === jugador
		) {
			//Diagonal
			return true;
		} else {
			return false;
		}
	}

	//Pregunta cada vez que se renderiza si ya se completo el tablero
	if (cuadradosOn === 9) {
		setCuadradosOn(0);
		setArr(arreglo_vacio);
	}

	const elegir = i => {
		let aux = arr;
		if (arr[i] === "") {
			jugador
				? ((aux[i] = "X"),
				  setJugador(!jugador),
				  setTurno("Turno de " + jugadores.sPlayer))
				: ((aux[i] = "O"),
				  setJugador(!jugador),
				  setTurno("Turno de " + jugadores.fPlayer));
			setArr(aux);
			setCuadradosOn(cuadradosOn + 1);

			let jugador_que_eligio = jugador
				? ver_si_gano("X")
				: ver_si_gano("O");
			if (jugador_que_eligio) {
				jugador
					? setGanador(jugadores.fPlayer + " Wins!!")
					: setGanador(jugadores.sPlayer + " Wins!!");
				setTurno("");
			}
			console.log("j1: " + jugador1);
		}
	};
	const setear_todo = () => {
		setGanador("");
		setCuadradosOn(0);
		setArr(arreglo_vacio);
		setTurno("Turno de " + jugadores.fPlayer);
	};
	const cambiar_de_componente = () => {
		jugadores.volver(true);
	};
	return (
		<div className="text-white mt-5 d-flex flex-column align-items-center">
			<h1>{turno}</h1>
			<div className="text-success">
				<h3>{ganador}</h3>
			</div>
			<div className="d-flex">
				<div
					type="button"
					onClick={() => elegir(0)}
					className="box left">
					<h2>{arr[0]}</h2>
				</div>
				<div
					type="button"
					onClick={() => elegir(1)}
					className="box middle">
					<h2>{arr[1]}</h2>
				</div>
				<div
					type="button"
					onClick={() => elegir(2)}
					className="box right">
					<h2>{arr[2]}</h2>
				</div>
			</div>

			<div className="d-flex">
				<div
					type="button"
					onClick={() => elegir(3)}
					className="box left">
					<h2>{arr[3]}</h2>
				</div>
				<div
					type="button"
					onClick={() => elegir(4)}
					className="box middle">
					<h2>{arr[4]}</h2>
				</div>
				<div
					type="button"
					onClick={() => elegir(5)}
					className="box right">
					<h2>{arr[5]}</h2>
				</div>
			</div>

			<div className="d-flex">
				<div
					type="button"
					onClick={() => elegir(6)}
					className="box ultimaLeft">
					<h2>{arr[6]}</h2>
				</div>
				<div
					type="button"
					onClick={() => elegir(7)}
					className="box ultimaMiddle">
					<h2>{arr[7]}</h2>
				</div>
				<div
					type="button"
					onClick={() => elegir(8)}
					className="box ultimaRight">
					<h2>{arr[8]}</h2>
				</div>
			</div>
			<button className="mt-5 btn btn-primary" onClick={setear_todo}>
				Play again
			</button>
			<button
				className="mt-2 btn btn-primary"
				onClick={cambiar_de_componente}>
				Change players
			</button>
		</div>
	);
}
