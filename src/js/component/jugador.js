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

export default function Jugar(props) {
	console.log(props);
	let jugadores = props;

	let arreglo = [];
	for (let i = 0; i < 9; i++) {
		arreglo[i] = "";
	}

	const [arr, setArr] = useState(arreglo);
	const [jugador, setJugador] = useState(true);
	const [cuadradosOn, setCuadradosOn] = useState(0);
	//cuadradosOn guarda la cantidad de cuadrados que ya fueron utilizados
	//si jugador = true => jugador1
	//si jugador = false => jugador2

	const elegir = i => {
		let aux = arr;
		if (arr[i] === "") {
			jugador ? (aux[i] = "X") : (aux[i] = "O");
			setArr(aux);
			setJugador(!jugador);
			setCuadradosOn(cuadradosOn + 1);
		}
	};

	return (
		<div className=" bg-dark mt-5 d-flex flex-column align-items-center">
			<h1>{cuadradosOn}</h1>
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
