import React from 'react';
import { connect } from 'react-redux';
import {
    Row,
    Column,
    Content,
    Button
} from 'carbon-components-react';
import { Renew20, IotConnect20, Printer20 } from '@carbon/icons-react';
import Card from './Card';
import { getAgriBotInsights } from '../Actions';

class AgriBotInsightsDashboard extends React.Component {
    state = {
        pH: parseFloat((this.props.agriBotInsights.deviceResponse['arduino-uno'].soil.r+this.props.agriBotInsights.deviceResponse['arduino-uno'].soil.g)/(2*this.props.agriBotInsights.deviceResponse['arduino-uno'].soil.b)).toPrecision(2),
        n: [6, 7.5],
        p: [6.5, 7.5],
        k: [6, 10],
        s: [6, 10],
        ca: [6.5, 7.5],
        mg: [6.5, 8.5],
        fe: [4, 6],
        mn: [5, 7.5],
        b: [5.5, 7],
        cu: [5, 7],
        zn: [5, 7],
        mo: [8.5, 10]
    }

    constructor(props) {
        super(props);
        this.props.getAgriBotInsights();
    }

    _formatName = (text) => {
        text = text.replace("_", " ");
        text = text.toUpperCase();
        return text;
    }

    _getNutrients = (name) => {
        if(this.state.pH<this.state[name][0]){
            return "low"
        } else if(this.state.pH>this.state[name][1]){
            return "high"
        } else {
            return "moderate"
        }
    }

    render() {
        return (
            <>
                <br />
                {this.props.agriBotInsights ?
                    <Content style={{ backgroundColor: '#f4f4f4' }}>
                        <Row>
                            <Column style={{textAlign: 'center'}}>
                                <Button onClick={() => window.location.reload()} renderIcon={Renew20}>Refresh</Button>&nbsp;&nbsp;
                                <Button onClick={() => window.print()} renderIcon={Printer20}>Print</Button>
                            </Column>
                        </Row>
                        <br />
                        <Row id="printableArea">
                            <Column>
                                {this.props.agriBotInsights.deviceResponse['arduino-uno'] && this.props.agriBotInsights.deviceResponse.bmp280 && this.props.agriBotInsights.deviceResponse.dht11 ?
                                    <Card heading="AgriBot Data" icon={<IotConnect20 />} subtitle={new Date(this.props.agriBotInsights.deviceResponse.timestamp).toLocaleString()}>
                                        <hr />
                                        <div className="card-body">
                                            <h4 className="card-body-head">Environment Analytics</h4>
                                        </div>
                                        <br />
                                        <div className="card-body">
                                            <strong className="card-body-head">Temperature</strong>
                                            <span className="card-body-value">{this.props.agriBotInsights.deviceResponse.dht11.env_temp}&deg;C</span>
                                        </div>
                                        <div className="card-body">
                                            <strong className="card-body-head">Humidity</strong>
                                            <span className="card-body-value">{this.props.agriBotInsights.deviceResponse.dht11.env_humidity} %</span>
                                        </div>
                                        <hr />

                                        <div className="card-body">
                                            <h4 className="card-body-head">Soil Analytics</h4>
                                        </div>
                                        <br />
                                        <div className="card-body">
                                            <strong className="card-body-head">Moisture</strong>
                                            <span className="card-body-value">{this.props.agriBotInsights.deviceResponse['arduino-uno'].soil.moist} m<sup>3</sup>/m<sup>3</sup></span>
                                        </div>
                                        <div className="card-body">
                                            <strong className="card-body-head">Temperature</strong>
                                            <span className="card-body-value">{this.props.agriBotInsights.deviceResponse.ds18b20.soil_temp}&deg;C</span>
                                        </div>
                                        <div className="card-body">
                                            <strong className="card-body-head">Index</strong>
                                            <span className="card-body-value">{this.props.agriBotInsights.deviceResponse['arduino-uno'].soil.pH}</span>
                                        </div>
                                        <div className="card-body">
                                            <strong className="card-body-head">pH</strong>
                                            <span className="card-body-value">{this.state.pH}</span>
                                        </div>

                                        <hr />
                                        <div className="card-body">
                                            <h4 className="card-body-head">Air Analytics</h4>
                                        </div>
                                        <br />
                                        <div className="card-body">
                                            <strong className="card-body-head">AQI</strong>
                                            <span className="card-body-value">{this.props.agriBotInsights.deviceResponse['arduino-uno'].aqi}</span>
                                        </div>
                                        <div className="card-body">
                                            <strong className="card-body-head">Air Pressure</strong>
                                            <span className="card-body-value">{this.props.agriBotInsights.deviceResponse.bmp280.air_pressure} hPa</span>
                                        </div>
                                        <div className="card-body">
                                            <strong className="card-body-head">Air Temperature</strong>
                                            <span className="card-body-value">{this.props.agriBotInsights.deviceResponse.bmp280.air_temp}&deg;C</span>
                                        </div>
                                        <div className="card-body">
                                            <strong className="card-body-head">Altitude</strong>
                                            <span className="card-body-value">{this.props.agriBotInsights.deviceResponse.bmp280.altitude} m</span>
                                        </div>

                                        <hr />
                                        <div className="card-body">
                                            <h4 className="card-body-head">Soil Nutrients Analytics</h4>
                                        </div>
                                        <br />
                                        <div className="card-body">
                                            <strong className="card-body-head">Nitrogen (N)</strong>
                                            <span className="card-body-value">{this._getNutrients('n')}&nbsp;&nbsp;<svg height="10" width="10"><circle cx="50%" cy="50%" r="5" className={`${this._getNutrients('n')}`} /></svg></span>
                                        </div>
                                        <div className="card-body">
                                            <strong className="card-body-head">Potassium (P)</strong>
                                            <span className="card-body-value">{this._getNutrients('p')}&nbsp;&nbsp;<svg height="10" width="10"><circle cx="50%" cy="50%" r="5" className={`${this._getNutrients('p')}`} /></svg></span>
                                        </div>
                                        <div className="card-body">
                                            <strong className="card-body-head">Phosphorous (K)</strong>
                                            <span className="card-body-value">{this._getNutrients('k')}&nbsp;&nbsp;<svg height="10" width="10"><circle cx="50%" cy="50%" r="5" className={`${this._getNutrients('k')}`} /></svg></span>
                                        </div>
                                        <div className="card-body">
                                            <strong className="card-body-head">Sulphur (S)</strong>
                                            <span className="card-body-value">{this._getNutrients('s')}&nbsp;&nbsp;<svg height="10" width="10"><circle cx="50%" cy="50%" r="5" className={`${this._getNutrients('s')}`} /></svg></span>
                                        </div>
                                        <div className="card-body">
                                            <strong className="card-body-head">Calcium (Ca)</strong>
                                            <span className="card-body-value">{this._getNutrients('ca')}&nbsp;&nbsp;<svg height="10" width="10"><circle cx="50%" cy="50%" r="5" className={`${this._getNutrients('ca')}`} /></svg></span>
                                        </div>
                                        <div className="card-body">
                                            <strong className="card-body-head">Magnesium (Mg)</strong>
                                            <span className="card-body-value">{this._getNutrients('mg')}&nbsp;&nbsp;<svg height="10" width="10"><circle cx="50%" cy="50%" r="5" className={`${this._getNutrients('mg')}`} /></svg></span>
                                        </div>
                                        <div className="card-body">
                                            <strong className="card-body-head">Iron (Fe)</strong>
                                            <span className="card-body-value">{this._getNutrients('fe')}&nbsp;&nbsp;<svg height="10" width="10"><circle cx="50%" cy="50%" r="5" className={`${this._getNutrients('fe')}`} /></svg></span>
                                        </div>
                                        <div className="card-body">
                                            <strong className="card-body-head">Manganese (Mn)</strong>
                                            <span className="card-body-value">{this._getNutrients('mn')}&nbsp;&nbsp;<svg height="10" width="10"><circle cx="50%" cy="50%" r="5" className={`${this._getNutrients('mn')}`} /></svg></span>
                                        </div>
                                        <div className="card-body">
                                            <strong className="card-body-head">Boron (B)</strong>
                                            <span className="card-body-value">{this._getNutrients('b')}&nbsp;&nbsp;<svg height="10" width="10"><circle cx="50%" cy="50%" r="5" className={`${this._getNutrients('b')}`} /></svg></span>
                                        </div>
                                        <div className="card-body">
                                            <strong className="card-body-head">Copper (Cu)</strong>
                                            <span className="card-body-value">{this._getNutrients('cu')}&nbsp;&nbsp;<svg height="10" width="10"><circle cx="50%" cy="50%" r="5" className={`${this._getNutrients('cu')}`} /></svg></span>
                                        </div>
                                        <div className="card-body">
                                            <strong className="card-body-head">Zinc (Zn)</strong>
                                            <span className="card-body-value">{this._getNutrients('zn')}&nbsp;&nbsp;<svg height="10" width="10"><circle cx="50%" cy="50%" r="5" className={`${this._getNutrients('zn')}`} /></svg></span>
                                        </div>
                                        <div className="card-body">
                                            <strong className="card-body-head">Molybdenum (Mo)</strong>
                                            <span className="card-body-value">{this._getNutrients('mo')}&nbsp;&nbsp;<svg height="10" width="10"><circle cx="50%" cy="50%" r="5" className={`${this._getNutrients('mo')}`} /></svg></span>
                                        </div>
                                    </Card> : <></>}
                            </Column>
                        </Row>
                        <br />
                        <Row>
                            <Column>
                                {this.props.agriBotInsights.deviceResponse.plantdoc ?
                                    <Card heading="PlantDoc Analytics" icon={<img src={`https://www.klick.com/health/wp-content/uploads/2016/04/healthbot.jpg`} width="32px" alt={"plantDoc"} />} subtitle={new Date(this.props.agriBotInsights.deviceResponse.plantdoc.report.dt).toLocaleString()}>
                                        <div className="card-body">
                                            <img src={this.props.agriBotInsights.deviceResponse.plantdoc.url} alt="img" width="500px" />
                                        </div>
                                        <hr />
                                        <div className="card-body">
                                            <h4 className="card-body-head">Nutrient Deficiency Analysis Report</h4>
                                        </div>
                                        <br />
                                        {this.props.agriBotInsights.deviceResponse.plantdoc.report.deficiencies?
                                            this.props.agriBotInsights.deviceResponse.plantdoc.report.deficiencies.map(deficiency => {
                                                return (
                                                    <>
                                                        <div className="card-body">
                                                            <strong className="card-body-head">{this._formatName(deficiency.name)}</strong>
                                                        </div>
                                                        <div className="card-body">
                                                            <span className="card-body-head">{deficiency.text}</span>
                                                        </div>
                                                    </>
                                                )
                                            }):""
                                        }
                                        <hr />
                                        <div className="card-body">
                                            <h4 className="card-body-head">Disease Analysis Report</h4>
                                        </div>
                                        <br />
                                        {this.props.agriBotInsights.deviceResponse.plantdoc.report.deficiencies?
                                            this.props.agriBotInsights.deviceResponse.plantdoc.report.diseases.map(disease => {
                                                return (
                                                    <>
                                                        <div className="card-body">
                                                            <strong className="card-body-head">{this._formatName(disease.name)}</strong>
                                                        </div>
                                                        <div className="card-body">
                                                            <span className="card-body-head">{disease.text}</span>
                                                        </div>
                                                    </>
                                                )
                                            }):""
                                        }
                                    </Card> : "Connecting to AgriBot..."}
                            </Column>
                        </Row>
                    </Content> : <></>}
            </>
        )
    }
}

const mapStateToProps = (state) => {
    return {
        fields: state.fields,
        busy: state.busy,
        agriBotInsights: state.agriBotInsights
    }
}

const mapDispatchToProps = (dispatch) => {
    return {
        getAgriBotInsights: () => {
            dispatch(getAgriBotInsights({}));
        }
    }
}

export default connect(mapStateToProps, mapDispatchToProps)(AgriBotInsightsDashboard);
