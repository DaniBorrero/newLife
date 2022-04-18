import React, { Component } from "react";
import { Carousel } from 'react-bootstrap';


export const Carrusel = () => (
	<Carousel className="container">
			<Carousel.Item>
				
				<img
				className="d-block w-100"
				src="https://p4.wallpaperbetter.com/wallpaper/842/836/906/web-development-minimalism-wallpaper-preview.jpg"				alt="First slide"
				/>
				<Carousel.Caption>
				<p>Soy un aprendiz en el mundo del desarrollo web, apasionado por seguir aprendiendo y crecer como profesional. Actualmente estoy en busca de nuevos desafíos en el mundo del desarrollo de software, me considero una persona adaptable, que puede trabajar en equipo y dispuesto a seguir aprendiendo. Actualmente estoy aprendiendo sobre React-Native y typescrip gracias a un curso en Udemy.</p>
				<h3>¿Quien soy?</h3>
				<p>Una pequeña descripcion de mi persona
				</p>
				</Carousel.Caption>
			</Carousel.Item>
			<Carousel.Item>
				<img
				className="d-block w-100"
				src="https://p4.wallpaperbetter.com/wallpaper/381/165/306/simple-background-black-background-minimalism-digital-art-wallpaper-preview.jpg"
				alt="Second slide"
				/>

				<Carousel.Caption>
				<h3>Lenguajes que conozco</h3>
				<p>Agregar iconos de los lenguajes que conozco</p>
				</Carousel.Caption>
			</Carousel.Item>
			<Carousel.Item>
				<img
				className="d-block w-100"
				src="https://images8.alphacoders.com/115/thumb-1920-1156488.png"				alt="Third slide"
				/>

				<Carousel.Caption>
				<h3>habilidades blandas</h3>
				<p>Mas alla de la programacion</p>
				</Carousel.Caption>
			</Carousel.Item>
		</Carousel>
);
