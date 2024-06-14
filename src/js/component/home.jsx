import React from "react";

//include images into your bundle
import rigoImage from "../../img/rigo-baby.jpg";
import pug from '../../img/pug.jpg';
//componentes
import { Navbar } from "./Navbar.jsx";
import { Card } from "./Card";
import { Jumbotron } from "./Jumbotron";
import { Footer } from "./Footer.jsx";

//create your first component
const Home = () => {
	return (
		<div className="justify-content-center">
			<Navbar />
			<div className="container-fluid p-5">
				<div className="row my-3 p-2 justify-content-center">
					<Jumbotron />
				</div>
				<div className="row row-cols-1 row-cols-md-3 row-cols-lg-4 p-3 text-center justify-content-center">
					<Card />
					<Card title={"React"} description={"React es una libreria de Javascript orientada para el FrontEnd"} textButton={"Leer más"} imagen={rigoImage} />
					<Card title={"El perro más bonito"} description={"Mira que perro más bonito"} textButton={"Leer más2"} imagen={pug} />
					<Card title={"Hola, ¿Qué tal?"} description={"Bienvenido a nuestra página web"} />
				</div>
			</div>
			<Footer />
		</div>
	);
};

export default Home;
