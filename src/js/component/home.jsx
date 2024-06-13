import React from "react";
import { Navbar } from "./Navbar.jsx";

//include images into your bundle
import rigoImage from "../../img/rigo-baby.jpg";

//create your first component
const Home = () => {
	return (
		<Navbar/>
			<Card title={"React"} description={"React es una libreria de Javascript orientada para el FrontEnd"}
			textButton={"Leer más"} imagen={rigoImage}/>
			<Card title={"React2"} description={"React es una libreria de Javascript orientada para el FrontEnd2"}
			textButton={"Leer más2"} imagen={rigoImage}/>
		</div>
	);
};

export default Home;
