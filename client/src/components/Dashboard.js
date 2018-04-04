import React, { Component } from "react";
import { connect } from "react-redux";
import { Link } from "react-router-dom";

import Titles from "./Titles";
import Form from "./Form";
import Weather from "./Weather";

import WEATHER_API from "../config_keys";

const API_KEY = WEATHER_API;

class Dashboard extends Component {
state = {
    temperature: undefined,
    temp_high: undefined,
    temp_low: undefined,
    humidity: undefined,
    description: undefined,
    city: undefined,
    country: undefined,
    error: undefined,
  }
 
  getWeather = async (e) => {
    e.preventDefault();
    const zip = e.target.elements.zip.value;
    const country = e.target.elements.country.value;

    const api_call = await fetch(`http://api.openweathermap.org/data/2.5/weather?zip=${zip},${country}&appid=${API_KEY}&units=imperial`);
    const data = await api_call.json();
    console.log(data);

    if (zip && country && data.cod !== '404'){
      this.setState({
        temperature: data.main.temp,
        temp_high: data.main.temp_max,
        temp_low: data.main.temp_min,
        humidity: data.main.humidity,
        description: data.weather[0].description,
        city: data.name,
        country: data.sys.country,
        error: "",
      });
    }else{
      this.setState({
        temperature: undefined,
        temp_high: undefined,
        temp_low: undefined,
        humidity: undefined,
        description: undefined,
        city: undefined,
        country: undefined,
        error: "Please enter a valid Zip Code & Country.",
      });
    }
  }
  render(){
    return (
        <div>
				<div className="wrapper">
					<div className="main">
						<div className="container">
							<div className="row">
								<div className="col-md-5 title-container">
									<Titles />
								</div>
								<div className="col-md-7 form-container">
									<Form getWeather={this.getWeather} />
                                    <Weather 
                                        temperature={this.state.temperature} 
                                        temp_high={this.state.temp_high} 
                                        temp_low={this.state.temp_low} 
                                        humidity={this.state.humidity} 
                                        description={this.state.description} 
                                        city={this.state.city} 
                                        country={this.state.country} 
                                        error={this.state.error} 
                                    />
								</div>
							</div>
						</div>
					</div>
				</div>
            </div>
    );
  }
};

export default Dashboard;
