import React from "react";
import Titles from "./Titles";

const Form = props => (
	<form onSubmit={props.getWeather}>
		<Titles />
		<br />
		<input type="text" name="zip" placeholder="Zip Code" />
		<button>Ask Brsk</button>
	</form>
);

export default Form;
