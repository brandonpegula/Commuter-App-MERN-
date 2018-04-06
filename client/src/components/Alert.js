import React from "react";


const Alert = props => (
	<div>
		<div className="weather__info">
			{props.temperature > 32.0 &&
				props.temperature < 42.0 && (
					<h2>
						It's not freezing but you'll need that coat and maybe a scarf.
					</h2>
				)}
			{props.humidity > 80 && <h2>It's pea soup out there! Dress light.</h2>}
		</div>
	</div>
);

export default Alert;