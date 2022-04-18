import React, { useContext } from "react";
import { Context } from "../store/appContext";
import rigoImageUrl from "../../img/rigo-baby.jpg";
import "../../styles/home.css";
import { Carrusel } from "../component/carrusel";
import { CardDev } from "../component/card";


export const Home = () => {
	const { store, actions } = useContext(Context);

	return (
		<>
			<div className="my-3">
				<Carrusel/>		
			</div>		
			<div>
				<CardDev tittle="Hola mundo" text="bla bla bla bla " img="https://upload.wikimedia.org/wikipedia/commons/thumb/a/a7/React-icon.svg/2300px-React-icon.svg.png"/>
			</div>
		</>
	);
};
