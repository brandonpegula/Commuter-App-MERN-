import React from "react";
import Titles from "./Titles";

const Form = props => (
	<form onSubmit={props.getWeather}>
		<Titles />
		<br />
		<input type="text" name="cityname" placeholder="City" />
		<input type="text" name="country" placeholder="Country" />
		<br />
		<button>Ask Brsk</button>
	</form>
);

export default Form;
