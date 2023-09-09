//import react into the bundle
import React from "react";
import ReactDOM from "react-dom";
import "../styles/index.css";
import SimpleCounter from "./component/SimpleCounter";

// render your react application

let counter = 0;

setInterval(function(){
	const one = Math.floor(counter/10000 % 10);
	const two = Math.floor(counter /1000 % 10);
	const three = Math.floor(counter/100 % 10);
	const four = Math.floor(counter/10 % 10);
	const five = Math.floor(counter/1 % 10);

	ReactDOM.render(<SimpleCounter 
		boxOne={one} 
		boxTwo={two} 
		boxThree={three} 
		boxFour={four} 
		boxFive={five}/>, 
	document.querySelector("#app")
	);
	
	counter ++;
}, 100)
