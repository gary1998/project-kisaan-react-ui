import React from 'react';
import FieldSelector from './FieldSelector';
import { connect } from 'react-redux';
import {
    Row, 
    Column,
    Content
} from 'carbon-components-react';
import Card from './Card';
import { 
    setBusy,
    currentWeather,
    forecastWeather,
    soilData,
    uviData,
    satelliteImagery
} from '../Actions';

class SatelliteInsightsDashboard extends React.Component {
    state = {
        selectedField: this.props.fields[0].fieldResId,
    }

    constructor(props){
        super(props);
        this._setEnvironment();
    }

    _getStartDate = () => {
        let date = new Date();
        date.setMonth(date.getMonth()-2);
        date.setHours(0);
        date.setMinutes(0);
        date.setSeconds(0);
        date.setMilliseconds(0);
        return date.getTime().toString().substring(0, 10);
    }

    _getEndDate = () => {
        let date = new Date();
        date.setHours(0);
        date.setMinutes(0);
        date.setSeconds(0);
        date.setMilliseconds(0);
        return date.getTime().toString().substring(0, 10);
    }

    _setEnvironment = () => {
        this.props.getCurrentWeatherData(this.state.selectedField);
        this.props.getForecaseWeatherData(this.state.selectedField);
        this.props.getSoilData(this.state.selectedField);
        this.props.getUVIData(this.state.selectedField);
        this.props.getSatelliteImagery(this._getStartDate(), this._getEndDate(), this.state.selectedField);
    }

    _onFieldChange = (e) => {
        this.setState({selectedField: e.target.value});
        this._setEnvironment();
    }

    render(){
        return(
            <>
                <FieldSelector selectedField={this.state.selectedField} onFieldChange={this._onFieldChange}/>
                <br/>
                <Content style={{backgroundColor: '#f4f4f4'}}>
                    <Row>
                        <Column>
                        <Card heading="Current Weather" icon={<img src={`http://openweathermap.org/img/w/${this.props.currentWeather.weather[0].icon}.png`} alt={this.props.currentWeather.weather.icon} />} subtitle={new Date(this.props.currentWeather.dt*1000).toLocaleString()}>
                            <div className="card-body">
                                <strong className="card-body-head">Temperature</strong>
                                <span className="card-body-value">{this.props.currentWeather.main.temp}&deg;C</span>
                            </div>
                            <div className="card-body">
                                <strong className="card-body-head">Feels like</strong>
                                <span className="card-body-value">{this.props.currentWeather.main.feels_like}&deg;C</span>
                            </div>
                            <div className="card-body">
                                <strong className="card-body-head">Temp Min</strong>
                                <span className="card-body-value">{this.props.currentWeather.main.temp_min}&deg;C</span>
                            </div>
                            <div className="card-body">
                                <strong className="card-body-head">Temp Max</strong>
                                <span className="card-body-value">{this.props.currentWeather.main.temp_max}&deg;C</span>
                            </div>
                            <div className="card-body">
                                <strong className="card-body-head">Atmospheric Pressure</strong>
                                <span className="card-body-value">{this.props.currentWeather.main.pressure} hPa</span>
                            </div>
                            <div className="card-body">
                                <strong className="card-body-head">Humidity</strong>
                                <span className="card-body-value">{this.props.currentWeather.main.humidity}%</span>
                            </div>
                            <div className="card-body">
                                <strong className="card-body-head">Atmospheric Pressure @ Sea Level</strong>
                                <span className="card-body-value">{this.props.currentWeather.main.sea_level} hPa</span>
                            </div>
                            <div className="card-body">
                                <strong className="card-body-head">Atmospheric Pressure @ Ground Level</strong>
                                <span className="card-body-value">{this.props.currentWeather.main.grnd_level} hPa</span>
                            </div>
                            <div className="card-body">
                                <strong className="card-body-head">Wind Speed</strong>
                                <span className="card-body-value">{this.props.currentWeather.wind.speed} m/s</span>
                            </div>
                            <div className="card-body">
                                <strong className="card-body-head">Wind Direction</strong>
                                <span className="card-body-value">{this.props.currentWeather.wind.deg}&deg;</span>
                            </div>
                            <div className="card-body">
                                <strong className="card-body-head">Cloudiness</strong>
                                <span className="card-body-value">{this.props.currentWeather.clouds.all}%</span>
                            </div>
                        </Card>
                        </Column>
                        <Column>
                            More cards coming soon...
                        </Column>
                    </Row>
                </Content>
            </>
        )
    }
}

const mapStateToProps = (state) =>{
    return {
        fields: state.fields,
        busy: state.busy,
        currentWeather: state.currentWeather,
        forecastWeather: state.forecastWeather,
        soilData: state.soilData,
        uviData: state.uviData,
        satelliteImagery: state.satelliteImagery
    }
}

const mapDispatchToProps = (dispatch) => {
    return {
        getCurrentWeatherData: async(fieldResId) => {
            dispatch(await setBusy());
            dispatch(await currentWeather(fieldResId));
        },
        getForecaseWeatherData: async(fieldResId) => {
            dispatch(await setBusy());
            dispatch(await forecastWeather(fieldResId));
        },
        getSoilData: async(fieldResId) => {
            dispatch(await setBusy());
            dispatch(await soilData(fieldResId));
        },
        getUVIData: async(fieldResId) => {
            dispatch(await setBusy());
            dispatch(await uviData(fieldResId));
        },
        getSatelliteImagery: async(start, end, fieldResId) => {
            dispatch(await setBusy());
            dispatch(await satelliteImagery(start, end, fieldResId));
        }
    }
}

export default connect(mapStateToProps, mapDispatchToProps)(SatelliteInsightsDashboard);
