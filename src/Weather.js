import React from 'react';

class Weather extends React.Component {
    constructor() {
        super();
        this.state = {
            weather: null,
            // location: {}
        }
    }

    componentDidMount() {
        const success = (position) => {
            console.log(position);
            console.log(position.coords.latitude);
            console.log(position.coords.longitude);
            // this.pullWeather();
            // this.setState({
            //       location: position
            //   });
            this.location = position
            this.pullWeather();
        };
        navigator.geolocation.getCurrentPosition(success);
        // console.log(location);

    }

    pullWeather = async () => {
        console.log(this.location);
        let res = await fetch(`http://api.openweathermap.org/data/2.5/weather?lat=${this.location.coords.latitude}&lon=${this.location.coords.longitude}&appid=4f6392c5bdaab0e378e9496e525a4cee`);
        res = await res.json();
        // console.log(res);
        console.log(res);
        this.setState({
            weather: res
        });
    }

    render() {
        let weather;
        let city;
        if (this.state.weather) {
            weather = this.state.weather.main.temp;
            city = this.state.weather.name;
        }
        return (
            <h1>{weather} {city}</h1>
        )
    }
}

export default Weather;