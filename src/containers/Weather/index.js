import React, { Component } from 'react';
import axios from 'axios';
import { forecastList } from '../../helpers/section';
import Spinner from '../../components/UI/Spinner';
import Sections from '../../components/Sections';

class Weather extends Component {
    state = {
        forecast: null,
        error: false
    };

    componentDidMount() {
        axios.get('http://api.openweathermap.org/data/2.5/weather?q=London,uk&APPID=ad232c5285db15075e3e2ece306f1649')
            .then(response => {
                this.setState({ forecast: response.data });
            })
            .catch(error => {
                this.setState({ error: true });
            });
    }

    render() {
        let forecast = this.state.error ? <p>Forecast can't be loaded!</p> : <Spinner/>;

        if (this.state.forecast) {
            forecast = <div className="Weather">
                <h2>Forecast for {this.state.forecast.name}, {this.state.forecast.sys.country}</h2>
                <section>
                    <h3>Weather</h3>
                    <ul>
                        {this.state.forecast.weather.map(item => <li
                            key={item.id}>{item.main}: {item.description}</li>)}
                    </ul>
                </section>
                <Sections list={forecastList(this.state.forecast)}/>
            </div>;
        }

        return (
            <React.Fragment>{forecast}</React.Fragment>
        );
    }
}

export default Weather;
