import React, { useContext } from "react";
import { Context } from "../store/appContext";
import "../../styles/home.css";
import { Carrusel } from "../component/carrusel";
import { CardDev } from "../component/card";
import { CardGroup} from 'react-bootstrap';



export const Home = () => {
	const { store, actions } = useContext(Context);

	return (
		<>
			<div className="my-3">
				<Carrusel/>		
			</div>		

			<div>
				<CardGroup>
					<CardDev tittle="React" text="React te ayuda a crear interfaces de usuario interactivas de forma sencilla. Diseña vistas simples para cada estado en tu aplicación, y React se encargará de actualizar y renderizar de manera eficiente los componentes correctos cuando los datos cambien." img="https://upload.wikimedia.org/wikipedia/commons/thumb/a/a7/React-icon.svg/2300px-React-icon.svg.png"/>
					<CardDev tittle="React" text="React te ayuda a crear interfaces de usuario interactivas de forma sencilla. Diseña vistas simples para cada estado en tu aplicación, y React se encargará de actualizar y renderizar de manera eficiente los componentes correctos cuando los datos cambien." img="https://upload.wikimedia.org/wikipedia/commons/thumb/a/a7/React-icon.svg/2300px-React-icon.svg.png"/>
					<CardDev tittle="React" text="React te ayuda a crear interfaces de usuario interactivas de forma sencilla. Diseña vistas simples para cada estado en tu aplicación, y React se encargará de actualizar y renderizar de manera eficiente los componentes correctos cuando los datos cambien." img="https://upload.wikimedia.org/wikipedia/commons/thumb/a/a7/React-icon.svg/2300px-React-icon.svg.png"/>
				</CardGroup>
			</div>
		</>
	);
};
