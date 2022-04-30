import React, { Component } from "react";
import { FaGithubSquare} from "react-icons/fa";
import {IoLogoLinkedin} from "react-icons/io"
import { IconContext } from "react-icons";

export const Footer = () => (
	<footer className="footer mt-auto py-3 text-center bg-dark">
		<div className="text-white">
		<h1 >
			Daniel Borrero <br/>
			
		</h1>
		<h5>
			Full Stack Developer
		</h5>
		</div>
		<hr className="text-white container"/>

		<IconContext.Provider value={{ className: "shared-class mx-3", size: 70 }}>
			<>
				<a href="https://github.com/DaniBorrero" target= "_blank"><FaGithubSquare className="text-white" /></a>
				<a href="https://www.linkedin.com/in/daniborrero/" target= "_blank"><IoLogoLinkedin className="text-white"/></a>
			</>
		</IconContext.Provider>
		


	</footer>
);
