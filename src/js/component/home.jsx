import React from "react";

//include images into your bundle
import rigoImage from "../../img/rigo-baby.jpg";

//create your first component
const Home = () => {
	return (
		<div className="text-center">
			<h1 className="text-center mt-5">Hello Rigo!</h1>
			<p>
				<img src={rigoImage} />
			</p>
			<a href="#" className="btn btn-success">
				If you see this green button... bootstrap is working...
			</a>
			<p>
				Made by{" "}
				<a href="http://www.4geeksacademy.com">4Geeks Academy</a>, with
				love!
			</p>
			<Card title={"React"} description={"React es una libreria de Javascript orientada para el FrontEnd"}
			textButton={"Leer más"} imagen={rigoImage}/>
			<Card title={"React2"} description={"React es una libreria de Javascript orientada para el FrontEnd2"}
			textButton={"Leer más2"} imagen={rigoImage}/>
		</div>
	);
};

export default Home;
