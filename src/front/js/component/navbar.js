import React from "react";
import { Link } from "react-router-dom";
import { Navbar, Nav, Container, NavDropdown } from 'react-bootstrap';


export const Navar = () => {
	return (
		<Navbar bg="dark" expand="lg" >
			<Container className="text-light" >
				<Navbar.Brand href="#home" className="text-light">Daniel Borrero</Navbar.Brand>
				{/* <Navbar.Toggle aria-controls="basic-navbar-nav" />
				<Navbar.Collapse id="basic-navbar-nav">
				<Nav className="me-auto">
					<Nav.Link href="#home">linkedin</Nav.Link>
					<Nav.Link href="#link">GitHub</Nav.Link>
					<Nav.Link href="#link">Email</Nav.Link>
					
				</Nav>
				</Navbar.Collapse> */}
			</Container>
		</Navbar>
	);
};
