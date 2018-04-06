import React from "react";
import Alert from "./Alert";




const Weather = props => (
	<div className="weather__info">
		<div className="message">
			{props.temperature > 55.0 &&
				props.temperature <= 65.0 && (
					<p>
						Equip: Light Jacket 👍 <br /> It's actually comfortable out there.🤞
					</p>
				)}
			{props.temperature > 32.0 &&
				props.temperature <= 55.0 && (
					<p>
						Equip: Heavy Coat & Hat👍 <br /> It's not quite freezing you'll
						survive.💪
					</p>
				)}
			{props.temperature >= 0.0 &&
				props.temperature <= 32.0 && (
					<p>
						Equip: Winter Coat, Scarf, Gloves & Hat✓ <br /> Stay inside or
						become a human popscicle.☃️
					</p>
				)}
		</div>
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
				Current Temp:{" "}
				<span className="weather__value">{props.temperature}&deg;F</span>
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
