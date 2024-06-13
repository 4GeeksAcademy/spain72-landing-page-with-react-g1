import React from "react";

//include images into your bundle
import rigoImage from "../../img/rigo-baby.jpg";
import pug from '../../img/pug.jpg';
//componentes
import { Navbar } from "./Navbar.jsx";
import { Card } from "./Card";

//create your first component
const Home = () => {
	return (
		<div className="text-center">
    <Navbar/>
			<div className="container">
				<div className="row row-cols-1 row-cols-md-3 row-cols-xl-5 g-2 p-3 m-3">
					<Card/>
					<Card title={"React"} description={"React es una libreria de Javascript orientada para el FrontEnd"}textButton={"Leer más"} imagen={rigoImage}/>
					<Card title={"El perro más bonito"} description={"Mira que perro más bonito"} textButton={"Leer más2"} imagen={pug}/>
					<Card title={"Hola, ¿Qué tal?"} description={"Bienvenido a nuestra página web"}/>
				</div>
			</div>
		</div>
	);
};

export default Home;
