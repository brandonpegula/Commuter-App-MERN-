import React from "react";

const Weather = props => (
	<div className="weather__info">
		{props.city &&
			props.country && (
				<p className="weather__key">
					Location:{" "}
					<span className="weather__value">
						{props.city}, {props.country}
					</span>
				</p>
			)}
		{props.temperature && (
			<p className="weather__key">
				Current Temp: <span className="weather__value">{props.temperature}&deg;F</span>
			</p>
		)}
		{props.temp_high && (
			<p className="weather__key">
				High: <span className="weather__value">{props.temp_high}&deg;F</span>
			</p>
		)}
		{props.temp_low && (
			<p className="weather__key">
				Low: <span className="weather__value">{props.temp_low}&deg;F</span>
			</p>
		)}
		{props.humidity && (
			<p className="weather__key">
				Humidity: <span className="weather__value">{props.humidity}%</span>
			</p>
		)}
		{props.description && (
			<p className="weather__key">
				Currently: <span className="weather__value">{props.description}</span>
			</p>
		)}
		{props.error && <p className="weather__error">Error: {props.error}</p>}
	</div>
);

export default Weather;
