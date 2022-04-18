import React, { useContext } from "react";
import { Context } from "../store/appContext";
import rigoImageUrl from "../../img/rigo-baby.jpg";
import "../../styles/home.css";
import { Carrusel } from "../component/carrusel";


export const Home = () => {
	const { store, actions } = useContext(Context);

	return (
		<>
			<Carrusel/>			
		</>
	);
};
