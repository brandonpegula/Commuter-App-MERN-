import React from "react";
import Titles from "./Titles";
import Form from "./Form";
import Weather from "./Weather";

const Dashboard = () => {
	return (
		<div style={{ textAlign: "center" }}>
            <Titles />
            <Form />
		</div>
	);
};

export default Dashboard;
