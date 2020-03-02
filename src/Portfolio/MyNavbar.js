import { Button, Navbar, Container, Nav } from 'react-bootstrap';
import React, {Component} from 'react';
import './styles/MyNavbar.css';
export default function MyNavbar()  {
	return (
		<Navbar fixed="top"  variant="dark"  collapseOnSelect expand="lg"  className="Navbar sticky">
			<Navbar.Brand href="#home">
			<img
				src="/favicon.png"
				width="25"
				height="25"
				className="d-inline-block align-center"
				alt="React Bootstrap logo"
				/>
			</Navbar.Brand>
			<Navbar.Toggle aria-controls="responsive-navbar-nav" />
			<Navbar.Collapse id="responsive-navbar-nav" className="Navbar-Collapsed">
			<Nav className="mr-auto">
				<Nav.Link href="#home">WELCOME</Nav.Link>
			</Nav>
			<Nav>
				<Nav.Link href="#about">ABOUT</Nav.Link>
				<Nav.Link href="#projects">PROJECTS</Nav.Link>
			</Nav>
			</Navbar.Collapse>
		</Navbar>
	);
}