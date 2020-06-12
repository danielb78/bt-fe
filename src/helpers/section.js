import moment from 'moment';
import {
    faClock,
    faCloud,
    faEye,
    faMapMarked,
    faMapSigns,
    faUniversity,
    faWind
} from '@fortawesome/free-solid-svg-icons';

const itemName = item => item.name ? `${item.name}: ` : '';

const forecastList = forecast => {
    return [
        {
            fontAwesome: faMapMarked,
            title: 'Coordinates',
            list: [
                { name: 'Latitude', value: forecast.coord.lat },
                { name: 'Longitude', value: forecast.coord.lon }
            ]
        },
        {
            fontAwesome: faMapSigns,
            title: 'Main',
            list: [
                { name: 'Temperature', value: forecast.main.temp },
                { name: 'Feels like', value: forecast.main.feels_like },
                { name: 'Min temperature', value: forecast.main.temp_min },
                { name: 'Max temperature', value: forecast.main.temp_max },
                { name: 'Pressure', value: forecast.main.pressure },
                { name: 'Humidity', value: forecast.main.humidity }
            ]
        },
        {
            fontAwesome: faWind,
            title: 'Wind',
            list: [
                { name: 'Speed', value: forecast.wind.speed },
                { name: 'Deg', value: forecast.wind.deg }
            ]
        },
        {
            fontAwesome: faCloud,
            title: 'Clouds',
            list: [
                { name: 'All', value: forecast.clouds.all }
            ]
        },
        {
            fontAwesome: faUniversity,
            title: 'Base',
            list: [
                { value: forecast.base }
            ]
        },
        {
            fontAwesome: faEye,
            title: 'Visibility',
            list: [
                { value: forecast.visibility }
            ]
        },
        {
            fontAwesome: faClock,
            title: 'DT',
            list: [
                { value: moment.unix(forecast.dt).format("MM/DD/YYYY") }
            ]
        }
    ]
};

export { itemName, forecastList };
