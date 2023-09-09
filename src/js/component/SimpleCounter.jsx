import React from "react";
import propTypes from "prop-types";

//create your first component
const SimpleCounter = (props) => {
	return 	<div className="bg-dark text-white" style={{fontSize: 100, display: "flex", justifyContent: "space-around", marginLeft: 50, marginRight:50, }}>
				<div className="clock" style={{border:"2px solid gray",width: 153.2, textAlign:"center"}}>
					<i class="fa-regular fa-clock"></i>				
				</div>
				<div className="one" style={{border:"2px solid gray", width: 153.2, textAlign:"center"}}>{props.boxOne}</div>
      			<div className="two" style={{border:"2px solid gray", width: 153.2, textAlign:"center"}}>{props.boxTwo}</div>
      			<div className="three" style={{border:"2px solid gray", width: 153.2, textAlign:"center"}}>{props.boxThree}</div>
      			<div className="four" style={{border:"2px solid gray", width: 153.2, textAlign:"center"}}>{props.boxFour}</div>
      			<div className="five" style={{border:"2px solid gray", width: 153.2, textAlign:"center"}}>{props.boxFive}</div>
			</div>
};
SimpleCounter.propTypes ={
	boxOne : propTypes.number,
	boxTwo : propTypes.number,
	boxThree : propTypes.number,
	boxFour : propTypes.number,
	boxFive : propTypes.number
};

export default SimpleCounter;
