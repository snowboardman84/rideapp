import React, { Component } from 'react';
import 'bootstrap/dist/css/bootstrap.min.css';
import axios from 'axios';
import './cards.css';
import '../App.css';
import {
    Card, CardText, CardBody,
    CardTitle, CardLink
} from 'reactstrap';

export default class Jackson extends Component {
    constructor() {
        super()
        this.state = {
            data: {
                main: {
                    temp: 'loading..',
                    pressure: 'loading..',
                    humidity: 'loading..',
                    temp_min: 'loading..',
                    temp_max: 'loading..',
                },
                wind: {
                    speed: 'loading..',
                    deg: 'loading..',
                },
                weather: [{
                    main: 'loading..',
                    description: 'loading..',
                }],
                check: 'loading..',
                clouds: {
                    all: 'loading..',
                }
            }

        }
        // this.check = this.check.this();


    }
    componentDidMount() {
        axios.get("http://api.openweathermap.org/data/2.5/weather?lat=43.5875&lon=-110.8279&APPID=deb29dfd065c544e4164e76b251706d3").then((response) => {
            response.data.main.temp = Math.floor(response.data.main.temp * (9 / 5) - 459.67);
            response.data.main.temp_max = Math.floor(response.data.main.temp_max * (9 / 5) - 459.67);
            response.data.main.temp_min = Math.floor(response.data.main.temp_min * (9 / 5) - 459.67);
            response.data.main.pressure = Math.floor(response.data.main.pressure * .0295300);
            var degree = response.data.wind.deg;
            setInterval(this.setState({
                data: response.data,
                check: check(degree)
            }))
        })


        function check(degree) {
            if (degree < 11.25 && degree > 348.75)
                return "N";
            else if (degree > 11.25 && degree < 33.75) {
                return "NNE";
            } else if (degree > 33.75 && degree < 56.25) {
                return "NE";
            } else if (degree > 56.25 && degree < 78.75) {
                return "ENE";
            } else if (degree > 78.75 && degree < 101.25) {
                return "E";
            } else if (degree > 101.25 && degree < 123.75) {
                return "ESE";
            } else if (degree > 123.75 && degree < 146.25) {
                return "SE";
            } else if (degree > 146.25 && degree < 191.25) {
                return "S";
            } else if (degree > 191.25 && degree < 213.75) {
                return "SSW";
            } else if (degree > 213.75 && degree < 236.25) {
                return "SW";
            } else if (degree > 236.25 && degree < 258.75) {
                return "WSW";
            } else if (degree > 258.75 && degree < 281.25) {
                return "W";
            } else if (degree > 281.25 && degree < 303.75) {
                return "WNW";
            } else if (degree > 303.75 && degree < 326.25) {
                return "NW";
            } else {
                return "NNW";
            }
        }
    }
    render() {
        return (

            <div>
                <Card className="card">
                    <CardBody>
                        <CardTitle className="cardtitle">Jackson Hole Resort</CardTitle>
                    </CardBody>
                    <img width="30%" src="http://photos3.meetupstatic.com/photos/event/8/4/f/4/600_453394036.jpeg" alt="Card image cap" />
                    <CardBody>
                        <CardText>Your weather for Jackson Hole Resort for today is {this.state.data.weather[0].description}. <br />
                            Barometric Pressure: {this.state.data.main.pressure} <br />
                            Current Tempature: {this.state.data.main.temp} °F<br />
                            Cloud Cover: {this.state.data.clouds.all}% <br />
                            Humidity: {this.state.data.main.humidity}% <br />
                            Max Temp: {this.state.data.main.temp_max} °F <br />
                            Min Temp: {this.state.data.main.temp_min} °F <br />
                            Wind Direction: {this.state.check} {Math.round(this.state.data.wind.deg)} Wind Speed: {Math.floor(this.state.data.wind.speed * 3)} MPH<br />
                        </CardText>
                        <CardLink href="http://jacksonhole.com">Jackson Hole Resort</CardLink>
                    </CardBody>
                </Card>
            </div>
        )
    }
}

