import React from "react";
import Alert from "./Alert";




const Weather = props => (
	<div className="weather__info">
		<div className="message">
			{props.conditions === "Rain" && (
				<p className="conditions">Bring: Umbrella✓☔️</p>
			)}
			{props.temperature > 95.0 && (
				<p>
					Wear: Tank Top, Shorts & Hat✓ <br /> No shoes, no shirt, no problem!
					Stay cool.🔥
				</p>
			)}
			{props.temperature <= 95.0 &&
				props.temperature > 88.0 && (
					<p>
						Wear: Tank Top & Shorts✓ <br /> The heat is on! Stick to the shade.🌶
					</p>
				)}
			{props.temperature <= 88.0 &&
				props.temperature > 80.0 && (
					<p>
						Wear: Short Sleeves & Shorts✓ <br /> Is it nice & toasty out there
						or is it just me?😎
					</p>
				)}
			{props.temperature <= 80.0 &&
				props.temperature >= 72.0 && (
					<p>
						Wear: Short Sleeves✓ <br /> It's absolutely perfect outside, go
						exploring!🤙
					</p>
				)}
			{props.temperature < 72.0 &&
				props.temperature > 65.0 && (
					<p>
						Wear: Light Jacket & Short Sleeves✓ <br /> It's nearly perfect
						outside.🤟
					</p>
				)}
			{props.temperature <= 65.0 &&
				props.temperature > 55.0 && (
					<p>
						Wear: Long Sleeves✓ <br /> It's actually comfortable out there.🤞
					</p>
				)}
			{props.temperature <= 55.0 &&
				props.temperature > 45.0 && (
					<p>
						Wear: Light Jacket✓ <br /> It's chilly but nothing you can't
						handle.👍
					</p>
				)}
			{props.temperature <= 45.0 &&
				props.temperature > 32.0 && (
					<p>
						Wear: Heavy Jacket & Hat✓ <br /> It's not quite freezing, you'll
						survive.💪
					</p>
				)}
			{props.temperature <= 32.0 &&
				props.temperature > 16.0 && (
					<p>
						Wear: Winter Coat, Scarf & Hat✓ <br /> Don't go off exploring.🧣
					</p>
				)}
			{props.temperature <= 16.0 &&
				props.temperature >= 0.0 && (
					<p>
						Wear: Winter Coat, Scarf, Gloves & Hat✓ <br /> Avoid becoming a
						human popscicle.☃️
					</p>
				)}
			{props.temperature <= 0.0 && (
					<p>
						Wear: Mega Winter Coat, Scarf, Gloves & Hat✓ <br /> You will become a human popscicle.❄️ ☠️
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
