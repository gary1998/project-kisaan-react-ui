import React from 'react';
import FieldSelector from './FieldSelector';
import { connect } from 'react-redux';
import {
    Row, 
    Column,
    Content,
    Slider,
    Loading
} from 'carbon-components-react';
import Card from './Card';
import { 
    setBusy,
    getFieldDetails
} from '../Actions';
import Image32 from "@carbon/icons-react/lib/image/32";
import Strawberry32 from "@carbon/icons-react/lib/strawberry/32";
import Light32 from "@carbon/icons-react/lib/light/32";

class SatelliteInsightsDashboard extends React.Component {
    state = {
        selectedField: this.props.fields[0].fieldResId,
        forecastWeatherSlider: 1
    }

    constructor(props){
        super(props);
        this._setEnvironment();
    }

    _setEnvironment = async() => {
        await this.props.getFieldDetails(this.state.selectedField);
    }

    _onFieldChange = async(e) => {
        this.setState({selectedField: e.target.value}, async() => {
            await this._setEnvironment();
        });
    }

    _onForecastWeatherSliderChange = (e) => {
        this.setState({forecastWeatherSlider: e.value});
    }

    render(){
        return(
            <>
                {this.props.busy?<Loading withOverlay={true} active={this.props.busy}/>:<></>}
                <FieldSelector selectedField={this.state.selectedField} onFieldChange={this._onFieldChange}/>
                <br/>
                <Content style={{backgroundColor: '#f4f4f4'}}>
                    <Row>
                        <Column>
                        <Card heading="Current Weather" icon={<img src={`https://openweathermap.org/img/w/${this.props.fieldData.weatherData.weather[0].icon}.png`} alt={this.props.fieldData.weatherData.weather.icon} />} subtitle={new Date(this.props.fieldData.weatherData.dt*1000).toLocaleString()}>
                            <div className="card-body">
                                <strong className="card-body-head">Temperature</strong>
                                <span className="card-body-value">{this.props.fieldData.weatherData.main.temp}&deg;C</span>
                            </div>
                            <div className="card-body">
                                <strong className="card-body-head">Feels like</strong>
                                <span className="card-body-value">{this.props.fieldData.weatherData.main.feels_like}&deg;C</span>
                            </div>
                            <div className="card-body">
                                <strong className="card-body-head">Temp Min</strong>
                                <span className="card-body-value">{this.props.fieldData.weatherData.main.temp_min}&deg;C</span>
                            </div>
                            <div className="card-body">
                                <strong className="card-body-head">Temp Max</strong>
                                <span className="card-body-value">{this.props.fieldData.weatherData.main.temp_max}&deg;C</span>
                            </div>
                            <div className="card-body">
                                <strong className="card-body-head">Atmospheric Pressure</strong>
                                <span className="card-body-value">{this.props.fieldData.weatherData.main.pressure} hPa</span>
                            </div>
                            <div className="card-body">
                                <strong className="card-body-head">Humidity</strong>
                                <span className="card-body-value">{this.props.fieldData.weatherData.main.humidity}%</span>
                            </div>
                            <div className="card-body">
                                <strong className="card-body-head">Atmospheric Pressure @ Sea Level</strong>
                                <span className="card-body-value">{this.props.fieldData.weatherData.main.sea_level} hPa</span>
                            </div>
                            <div className="card-body">
                                <strong className="card-body-head">Atmospheric Pressure @ Ground Level</strong>
                                <span className="card-body-value">{this.props.fieldData.weatherData.main.grnd_level} hPa</span>
                            </div>
                            <div className="card-body">
                                <strong className="card-body-head">Wind Speed</strong>
                                <span className="card-body-value">{this.props.fieldData.weatherData.wind.speed} m/s</span>
                            </div>
                            <div className="card-body">
                                <strong className="card-body-head">Wind Direction</strong>
                                <span className="card-body-value">{this.props.fieldData.weatherData.wind.deg}&deg;</span>
                            </div>
                            <div className="card-body">
                                <strong className="card-body-head">Cloudiness</strong>
                                <span className="card-body-value">{this.props.fieldData.weatherData.clouds.all}%</span>
                            </div>
                        </Card>
                        </Column>
                        <Column>
                            <Card heading="Satellite Imagery" icon={<Image32 />} subtitle={new Date(this.props.fieldData.satelliteImageryData[this.props.fieldData.satelliteImageryData.length-1].dt*1000).toLocaleString()+" by "+this.props.fieldData.satelliteImageryData[this.props.fieldData.satelliteImageryData.length-1].type}>
                                <div className="card-body">
                                    <img width="100%" src={this.props.fieldData.satelliteImageryData[this.props.fieldData.satelliteImageryData.length-1].image.truecolor} alt="satellite imagery"/>
                                </div>
                                <div className="card-body">
                                    <strong className="card-body-head">Valid Data</strong>
                                    <span className="card-body-value">{this.props.fieldData.satelliteImageryData[this.props.fieldData.satelliteImageryData.length-1].dc}%</span>
                                </div>
                                <div className="card-body">
                                    <strong className="card-body-head">Cloudiness</strong>
                                    <span className="card-body-value">{this.props.fieldData.satelliteImageryData[this.props.fieldData.satelliteImageryData.length-1].cl}%</span>
                                </div>
                                <div className="bx--form__helper-text" style={{maxWidth: '100%'}}>
                                    This card may take a bit to update, please be patient.
                                </div>
                            </Card>
                        </Column>
                    </Row>
                    <br />
                    <Row>
                        <Column>
                            <Card heading="Soil Data" icon={<Strawberry32 />} subtitle={new Date(this.props.fieldData.soilData.dt*1000).toLocaleString()}>
                            <div className="card-body">
                                    <strong className="card-body-head">Surface Temp</strong>
                                    <span className="card-body-value">{(this.props.fieldData.soilData.t0-273.15).toPrecision(4)}&deg;C</span>
                                </div>
                                <div className="card-body">
                                    <strong className="card-body-head">Temp in 10cm depth</strong>
                                    <span className="card-body-value">{(this.props.fieldData.soilData.t10-273.15).toPrecision(4)}&deg;C</span>
                                </div>
                                <div className="card-body">
                                    <strong className="card-body-head">Moisture</strong>
                                    <span className="card-body-value">{this.props.fieldData.soilData.moisture} m<sup>3</sup>/m<sup>3</sup></span>
                                </div>
                            </Card>
                        </Column>
                        <Column>
                            <Card heading="UVI Data" icon={<Light32 />} subtitle={new Date(this.props.fieldData.uviData.dt*1000).toLocaleString()}>
                                <div className="card-body">
                                    <strong className="card-body-head">UV Index</strong>
                                    <span className="card-body-value">{this.props.fieldData.uviData.uvi}</span>
                                </div>
                            </Card>
                        </Column>
                    </Row>
                    <br />
                    <Row>
                        <Column>
                            <Card heading="Weather Forecast" icon={<img src={`https://openweathermap.org/img/w/${this.props.fieldData.forecastWeatherData[this.state.forecastWeatherSlider-1].weather[0].icon}.png`} alt={this.props.fieldData.forecastWeatherData[this.state.forecastWeatherSlider-1].icon} />} subtitle={new Date(this.props.fieldData.forecastWeatherData[this.state.forecastWeatherSlider-1].dt*1000).toLocaleString()}>
                                <div className="card-body">
                                    <Slider id="slider" inputType="number" labelText="Slide for changing data" max={40} min={1} step={1} onChange={this._onForecastWeatherSliderChange} value={this.state.forecastWeatherSlider} />
                                </div>
                                <div className="card-body">
                                    <strong className="card-body-head">Temperature</strong>
                                    <span className="card-body-value">{this.props.fieldData.forecastWeatherData[this.state.forecastWeatherSlider-1].main.temp}&deg;C</span>
                                </div>
                                <div className="card-body">
                                    <strong className="card-body-head">Feels like</strong>
                                    <span className="card-body-value">{this.props.fieldData.forecastWeatherData[this.state.forecastWeatherSlider-1].main.feels_like}&deg;C</span>
                                </div>
                                <div className="card-body">
                                    <strong className="card-body-head">Temp Min</strong>
                                    <span className="card-body-value">{this.props.fieldData.forecastWeatherData[this.state.forecastWeatherSlider-1].main.temp_min}&deg;C</span>
                                </div>
                                <div className="card-body">
                                    <strong className="card-body-head">Temp Max</strong>
                                    <span className="card-body-value">{this.props.fieldData.forecastWeatherData[this.state.forecastWeatherSlider-1].main.temp_max}&deg;C</span>
                                </div>
                                <div className="card-body">
                                    <strong className="card-body-head">Atmospheric Pressure</strong>
                                    <span className="card-body-value">{this.props.fieldData.forecastWeatherData[this.state.forecastWeatherSlider-1].main.pressure} hPa</span>
                                </div>
                                <div className="card-body">
                                    <strong className="card-body-head">Humidity</strong>
                                    <span className="card-body-value">{this.props.fieldData.forecastWeatherData[this.state.forecastWeatherSlider-1].main.humidity}%</span>
                                </div>
                                <div className="card-body">
                                    <strong className="card-body-head">Atmospheric Pressure @ Sea Level</strong>
                                    <span className="card-body-value">{this.props.fieldData.forecastWeatherData[this.state.forecastWeatherSlider-1].main.sea_level} hPa</span>
                                </div>
                                <div className="card-body">
                                    <strong className="card-body-head">Atmospheric Pressure @ Ground Level</strong>
                                    <span className="card-body-value">{this.props.fieldData.forecastWeatherData[this.state.forecastWeatherSlider-1].main.grnd_level} hPa</span>
                                </div>
                                <div className="card-body">
                                    <strong className="card-body-head">Wind Speed</strong>
                                    <span className="card-body-value">{this.props.fieldData.forecastWeatherData[this.state.forecastWeatherSlider-1].wind.speed} m/s</span>
                                </div>
                                <div className="card-body">
                                    <strong className="card-body-head">Wind Direction</strong>
                                    <span className="card-body-value">{this.props.fieldData.forecastWeatherData[this.state.forecastWeatherSlider-1].wind.deg}&deg;</span>
                                </div>
                                <div className="card-body">
                                    <strong className="card-body-head">Cloudiness</strong>
                                    <span className="card-body-value">{this.props.fieldData.forecastWeatherData[this.state.forecastWeatherSlider-1].clouds.all}%</span>
                                </div>
                            </Card>
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
        fieldData: state.fieldData
    }
}

const mapDispatchToProps = (dispatch) => {
    return {
        getFieldDetails: async(fieldResId) => {
            dispatch(await setBusy());
            dispatch(await getFieldDetails(fieldResId));
        }
    }
}

export default connect(mapStateToProps, mapDispatchToProps)(SatelliteInsightsDashboard);
