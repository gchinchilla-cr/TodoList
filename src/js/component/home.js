import React, { useState } from "react";
import { Button } from "bootstrap";
import { useEffect } from "react/cjs/react.production.min";

//create your first component
export function Home() {
	const [lista, setLista] = useState([]);
	const [tarea, setTarea] = useState("");
	const [contador, setContador] = useState(0);
	const agregar = () => {
		if (tarea == "") {
			alert("Digite la tarea que desea ingresar");
		} else {
			setLista([...lista, tarea]);
			//alert("Su tarea ha sido ingresada");
			setTarea("");
			setContador(contador + 1);
		}
	};
	const eliminar = i => {
		const nuevaTarea = [...lista];
		nuevaTarea.splice(i, 1);
		setLista(nuevaTarea);
		setContador(contador - 1);
	};
	return (
		<div className="text-center mt-5">
			<input
				placeholder="Ingrese su tarea"
				onChange={e => setTarea(e.target.value)}
				value={tarea}></input>
			<button onClick={agregar}>Agregar tarea</button>

			{lista.map((element, i) => {
				return (
					<li key={i}>
						{element}
						<button className="remove" onClick={() => eliminar(i)}>
							X
						</button>
					</li>
				);
			})}
			<div>{contador + "  Tareas por hacer"}</div>
		</div>
	);
}
