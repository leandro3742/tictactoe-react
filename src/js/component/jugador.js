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
	console.log(props);
	let jugadores = props;

	let arreglo_vacio = [];
	for (let i = 0; i < 9; i++) {
		arreglo_vacio[i] = "";
	}

	const [arr, setArr] = useState(arreglo_vacio);
	const [jugador, setJugador] = useState(true);
	const [cuadradosOn, setCuadradosOn] = useState(0);
	const [empate, setEmpate] = useState("");
	//cuadradosOn guarda la cantidad de cuadrados que ya fueron utilizados
	//si jugador = true => jugador1
	//si jugador = false => jugador2

	const posiblesGanadores = [];

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
		console.log("llega");
		setCuadradosOn(0);
		setArr(arreglo_vacio);
	}
	const elegir = i => {
		let aux = arr;
		if (arr[i] === "") {
			jugador
				? ((aux[i] = "X"), jugador1.push(i))
				: ((aux[i] = "O"), jugador2.push(i));
			setArr(aux);
			setCuadradosOn(cuadradosOn + 1);

			let a = ver_si_gano("X");
			if (a) {
				console.log("Gano j1");
			}
			console.log("j1: " + jugador1);
			setJugador(!jugador); //Cambio de jugadir
		}
	};

	return (
		<div className=" text-white bg-dark mt-5 d-flex flex-column align-items-center">
			<h1>{cuadradosOn}</h1>
			<h1>{empate}</h1>
			<div className="d-flex">
				<div
					type="button"
					onClick={() => elegir(0)}
					className="box left">
					{arr[0]}
				</div>
				<div
					type="button"
					onClick={() => elegir(1)}
					className="box middle">
					{arr[1]}
				</div>
				<div
					type="button"
					onClick={() => elegir(2)}
					className="box right">
					{arr[2]}
				</div>
			</div>

			<div className="d-flex">
				<div
					type="button"
					onClick={() => elegir(3)}
					className="box left">
					{arr[3]}
				</div>
				<div
					type="button"
					onClick={() => elegir(4)}
					className="box middle">
					{arr[4]}
				</div>
				<div
					type="button"
					onClick={() => elegir(5)}
					className="box right">
					{arr[5]}
				</div>
			</div>

			<div className="d-flex">
				<div
					type="button"
					onClick={() => elegir(6)}
					className="box ultimaLeft">
					{arr[6]}
				</div>
				<div
					type="button"
					onClick={() => elegir(7)}
					className="box ultimaMiddle">
					{arr[7]}
				</div>
				<div
					type="button"
					onClick={() => elegir(8)}
					className="box ultimaRight">
					{arr[8]}
				</div>
			</div>
		</div>
	);
}
