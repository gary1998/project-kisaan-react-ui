import React from 'react';
import FieldSelector from './FieldSelector';
import { connect } from 'react-redux';
import {
    Row, 
    Column,
    Content,
    Slider
} from 'carbon-components-react';
import Card from './Card';
import {
    getSatelliteInsights
} from '../Actions';
import {
    Strawberry32,
    Light32,
    WatsonHealthDna32
} from "@carbon/icons-react";

class SatelliteInsightsDashboard extends React.Component {
    state = {
        selectedField: this.props.fields && this.props.fields.length>0?this.props.fields[0].fieldResId:"",
        forecastWeatherSlider: 1
    }

    constructor(props) {
        super(props);
        this.props.getSatelliteInsights(this.state.selectedField);
    }

    _onFieldChange = async(e) => {
        this.setState({selectedField: e.target.value}, async() => {
            await this.props.getFieldDetails(this.state.selectedField);
        });
    }

    _onForecastWeatherSliderChange = (e) => {
        this.setState({forecastWeatherSlider: e.value});
    }

    render(){
        return(
            <>
                <FieldSelector selectedField={this.state.selectedField} onFieldChange={this._onFieldChange}/>
                <br/>
                {this.props.satelliteInsights?
                <Content style={{backgroundColor: '#f4f4f4'}}>
                    <Row>
                        <Column>
                            {this.props.satelliteInsights.weatherData?
                            <Card heading="Current Weather" icon={<img src={`https://openweathermap.org/img/w/${this.props.satelliteInsights.weatherData.weather[0].icon}.png`} alt={this.props.satelliteInsights.weatherData.weather.icon} />} subtitle={new Date(this.props.satelliteInsights.weatherData.dt*1000).toLocaleString()}>
                                <div className="card-body">
                                    <strong className="card-body-head">Temperature</strong>
                                    <span className="card-body-value">{this.props.satelliteInsights.weatherData.main.temp}&deg;C</span>
                                </div>
                                <div className="card-body">
                                    <strong className="card-body-head">Feels like</strong>
                                    <span className="card-body-value">{this.props.satelliteInsights.weatherData.main.feels_like}&deg;C</span>
                                </div>
                                <div className="card-body">
                                    <strong className="card-body-head">Temp Min</strong>
                                    <span className="card-body-value">{this.props.satelliteInsights.weatherData.main.temp_min}&deg;C</span>
                                </div>
                                <div className="card-body">
                                    <strong className="card-body-head">Temp Max</strong>
                                    <span className="card-body-value">{this.props.satelliteInsights.weatherData.main.temp_max}&deg;C</span>
                                </div>
                                <div className="card-body">
                                    <strong className="card-body-head">Atmospheric Pressure</strong>
                                    <span className="card-body-value">{this.props.satelliteInsights.weatherData.main.pressure} hPa</span>
                                </div>
                                <div className="card-body">
                                    <strong className="card-body-head">Humidity</strong>
                                    <span className="card-body-value">{this.props.satelliteInsights.weatherData.main.humidity}%</span>
                                </div>
                                <div className="card-body">
                                    <strong className="card-body-head">Atmospheric Pressure @ Sea Level</strong>
                                    <span className="card-body-value">{this.props.satelliteInsights.weatherData.main.sea_level} hPa</span>
                                </div>
                                <div className="card-body">
                                    <strong className="card-body-head">Atmospheric Pressure @ Ground Level</strong>
                                    <span className="card-body-value">{this.props.satelliteInsights.weatherData.main.grnd_level} hPa</span>
                                </div>
                                <div className="card-body">
                                    <strong className="card-body-head">Wind Speed</strong>
                                    <span className="card-body-value">{this.props.satelliteInsights.weatherData.wind.speed} m/s</span>
                                </div>
                                <div className="card-body">
                                    <strong className="card-body-head">Wind Direction</strong>
                                    <span className="card-body-value">{this.props.satelliteInsights.weatherData.wind.deg}&deg;</span>
                                </div>
                                <div className="card-body">
                                    <strong className="card-body-head">Cloudiness</strong>
                                    <span className="card-body-value">{this.props.satelliteInsights.weatherData.clouds.all}%</span>
                                </div>
                            </Card>:"Getting Satellite based Weather card..."}
                        </Column>
                        <Column>
                            {this.props.satelliteInsights.satelliteImageryData?
                            <Card heading="Crop Health" icon={<WatsonHealthDna32 />} subtitle={`${new Date(this.props.satelliteInsights.satelliteImageryData[this.props.satelliteInsights.satelliteImageryData.length-1].dt*1000).toLocaleString()} by ${this.props.satelliteInsights.satelliteImageryData[this.props.satelliteInsights.satelliteImageryData.length-1].type}`}>
                                <div className="card-body">
                                    <img width="100%" src={this.props.satelliteInsights.satelliteImageryData[this.props.satelliteInsights.satelliteImageryData.length-1].image.ndvi} alt="satellite imagery"/>
                                </div>
                                <div className="card-body">
                                    <strong className="card-body-head">Valid Data</strong>
                                    <span className="card-body-value">{this.props.satelliteInsights.satelliteImageryData[this.props.satelliteInsights.satelliteImageryData.length-1].dc}%</span>
                                </div>
                                <div className="card-body">
                                    <strong className="card-body-head">Cloudiness</strong>
                                    <span className="card-body-value">{this.props.satelliteInsights.satelliteImageryData[this.props.satelliteInsights.satelliteImageryData.length-1].cl}%</span>
                                </div>
                                <div className="card-body">
                                    <strong className="card-body-head">NDVI</strong>
                                    <span className="card-body-value">{this.props.satelliteInsights.ndviStatsData.mean.toPrecision(2)}&nbsp;&nbsp;<svg height="10" width="10"><circle cx="50%" cy="50%" r="5" className={`anti-gradient_${this.props.satelliteInsights.ndviStatsData.mean.toPrecision(1)*10}`} /></svg></span>
                                </div>
                                <div className="card-body">
                                    <strong className="card-body-head">EVI</strong>
                                    <span className="card-body-value">{this.props.satelliteInsights.eviStatsData.mean.toPrecision(2)}&nbsp;&nbsp;<svg height="10" width="10"><circle cx="50%" cy="50%" r="5" className={`anti-gradient_${this.props.satelliteInsights.eviStatsData.mean.toPrecision(1)*10}`} /></svg></span>
                                </div>
                                <div className="bx--form__helper-text" style={{maxWidth: '100%'}}>
                                    This card may take a bit to update, please be patient.
                                </div>
                            </Card>:"Getting Satellite based Crop Health card..."}
                        </Column>
                    </Row>
                    <br />
                    <Row>
                        <Column>
                            {this.props.satelliteInsights.soilData?
                            <Card heading="Soil Data" icon={<Strawberry32 />} subtitle={new Date(this.props.satelliteInsights.soilData.dt*1000).toLocaleString()}>
                            <div className="card-body">
                                    <strong className="card-body-head">Surface Temp</strong>
                                    <span className="card-body-value">{(this.props.satelliteInsights.soilData.t0-273.15).toPrecision(4)}&deg;C</span>
                                </div>
                                <div className="card-body">
                                    <strong className="card-body-head">Temp in 10cm depth</strong>
                                    <span className="card-body-value">{(this.props.satelliteInsights.soilData.t10-273.15).toPrecision(4)}&deg;C</span>
                                </div>
                                <div className="card-body">
                                    <strong className="card-body-head">Moisture</strong>
                                    <span className="card-body-value">{this.props.satelliteInsights.soilData.moisture} m<sup>3</sup>/m<sup>3</sup></span>
                                </div>
                            </Card>:"Getting Satellite based Soil Data card..."}
                        </Column>
                        <Column>
                            {this.props.satelliteInsights.uviData?
                            <Card heading="UVI Data" icon={<Light32 />} subtitle={new Date(this.props.satelliteInsights.uviData.dt*1000).toLocaleString()}>
                                <div className="card-body">
                                    <strong className="card-body-head">UV Index</strong>
                                    <span className="card-body-value">{this.props.satelliteInsights.uviData.uvi}</span>
                                </div>
                            </Card>:"Getting Satellite based UVI Data card..."}
                        </Column>
                    </Row>
                    <br />
                    <Row>
                        <Column>
                            {this.props.satelliteInsights.forecastWeatherData?
                            <Card heading="Weather Forecast" icon={<img src={`https://openweathermap.org/img/w/${this.props.satelliteInsights.forecastWeatherData[this.state.forecastWeatherSlider-1].weather[0].icon}.png`} alt={this.props.satelliteInsights.forecastWeatherData[this.state.forecastWeatherSlider-1].icon} />} subtitle={new Date(this.props.satelliteInsights.forecastWeatherData[this.state.forecastWeatherSlider-1].dt*1000).toLocaleString()}>
                                <div className="card-body">
                                    <Slider id="slider" inputType="number" labelText="Slide for changing data" max={40} min={1} step={1} onChange={this._onForecastWeatherSliderChange} value={this.state.forecastWeatherSlider} />
                                </div>
                                <div className="card-body">
                                    <strong className="card-body-head">Temperature</strong>
                                    <span className="card-body-value">{this.props.satelliteInsights.forecastWeatherData[this.state.forecastWeatherSlider-1].main.temp}&deg;C</span>
                                </div>
                                <div className="card-body">
                                    <strong className="card-body-head">Feels like</strong>
                                    <span className="card-body-value">{this.props.satelliteInsights.forecastWeatherData[this.state.forecastWeatherSlider-1].main.feels_like}&deg;C</span>
                                </div>
                                <div className="card-body">
                                    <strong className="card-body-head">Temp Min</strong>
                                    <span className="card-body-value">{this.props.satelliteInsights.forecastWeatherData[this.state.forecastWeatherSlider-1].main.temp_min}&deg;C</span>
                                </div>
                                <div className="card-body">
                                    <strong className="card-body-head">Temp Max</strong>
                                    <span className="card-body-value">{this.props.satelliteInsights.forecastWeatherData[this.state.forecastWeatherSlider-1].main.temp_max}&deg;C</span>
                                </div>
                                <div className="card-body">
                                    <strong className="card-body-head">Atmospheric Pressure</strong>
                                    <span className="card-body-value">{this.props.satelliteInsights.forecastWeatherData[this.state.forecastWeatherSlider-1].main.pressure} hPa</span>
                                </div>
                                <div className="card-body">
                                    <strong className="card-body-head">Humidity</strong>
                                    <span className="card-body-value">{this.props.satelliteInsights.forecastWeatherData[this.state.forecastWeatherSlider-1].main.humidity}%</span>
                                </div>
                                <div className="card-body">
                                    <strong className="card-body-head">Atmospheric Pressure @ Sea Level</strong>
                                    <span className="card-body-value">{this.props.satelliteInsights.forecastWeatherData[this.state.forecastWeatherSlider-1].main.sea_level} hPa</span>
                                </div>
                                <div className="card-body">
                                    <strong className="card-body-head">Atmospheric Pressure @ Ground Level</strong>
                                    <span className="card-body-value">{this.props.satelliteInsights.forecastWeatherData[this.state.forecastWeatherSlider-1].main.grnd_level} hPa</span>
                                </div>
                                <div className="card-body">
                                    <strong className="card-body-head">Wind Speed</strong>
                                    <span className="card-body-value">{this.props.satelliteInsights.forecastWeatherData[this.state.forecastWeatherSlider-1].wind.speed} m/s</span>
                                </div>
                                <div className="card-body">
                                    <strong className="card-body-head">Wind Direction</strong>
                                    <span className="card-body-value">{this.props.satelliteInsights.forecastWeatherData[this.state.forecastWeatherSlider-1].wind.deg}&deg;</span>
                                </div>
                                <div className="card-body">
                                    <strong className="card-body-head">Cloudiness</strong>
                                    <span className="card-body-value">{this.props.satelliteInsights.forecastWeatherData[this.state.forecastWeatherSlider-1].clouds.all}%</span>
                                </div>
                            </Card>:"Getting Satellite based Weather Forecast card..."}
                        </Column>
                    </Row>
                </Content>:<></>}
            </>
        )
    }
}

const mapStateToProps = (state) =>{
    return {
        user: state.user,
        fields: state.fields,
        busy: state.busy,
        satelliteInsights: state.satelliteInsights
    }
}

const mapDispatchToProps = (dispatch) => {
    return {
        getSatelliteInsights: (fieldResId) => {
            dispatch(getSatelliteInsights({fieldResId}));
        }
    }
}

export default connect(mapStateToProps, mapDispatchToProps)(SatelliteInsightsDashboard);
