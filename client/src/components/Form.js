import React from "react";
import Titles from "./Titles";

const Form = props => (
	<form onSubmit={props.getWeather}>
		<Titles />
		<br />
		<input type="text" name="zip" placeholder="Zip Code" />
		<input type="text" name="country" placeholder="Country" />
		<br />
		<button>Get Weather</button>
	</form>
);

export default Form;
