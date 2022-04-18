import React, { useContext } from "react";
import { Context } from "../store/appContext";
import rigoImageUrl from "../../img/rigo-baby.jpg";
import "../../styles/home.css";
import { Carousel } from 'react-bootstrap';


export const Home = () => {
	const { store, actions } = useContext(Context);

	return (
		<Carousel>
			<Carousel.Item>
				<img
				className="d-block w-100"
				src="https://images8.alphacoders.com/115/thumb-1920-1156488.png"				alt="First slide"
				/>
				<Carousel.Caption>
				<h3>¿Quien soy?</h3>
				<p>Una pequeña descripcion de mi personas
				</p>
				</Carousel.Caption>
			</Carousel.Item>
			<Carousel.Item>
				<img
				className="d-block w-100"
				src="https://images8.alphacoders.com/115/thumb-1920-1156488.png"
				alt="Second slide"
				/>

				<Carousel.Caption>
				<h3>Second slide label</h3>
				<p>Lorem ipsum dolor sit amet, consectetur adipiscing elit.</p>
				</Carousel.Caption>
			</Carousel.Item>
			<Carousel.Item>
				<img
				className="d-block w-100"
				src="https://images8.alphacoders.com/115/thumb-1920-1156488.png"				alt="Third slide"
				/>

				<Carousel.Caption>
				<h3>Third slide label</h3>
				<p>Praesent commodo cursus magna, vel scelerisque nisl consectetur.</p>
				</Carousel.Caption>
			</Carousel.Item>
		</Carousel>
	);
};
