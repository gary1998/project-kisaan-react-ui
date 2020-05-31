import React from 'react';
import FieldSelector from './FieldSelector';
import { connect } from 'react-redux';
import {
    Row,
    Column,
    Content,
    Button
} from 'carbon-components-react';
import { Camera20, IotConnect20 } from '@carbon/icons-react';
import Card from './Card';
import { getAgriBotInsights } from '../Actions';

class AgriBotInsightsDashboard extends React.Component {
    state = {
        selectedField: this.props.fields[0].fieldResId,
        imgs: [
            "https://cdn.britannica.com/89/126689-004-D622CD2F/Potato-leaf-blight.jpg",
            "https://rhscdn01.azureedge.net/getmedia/67f177c7-02cc-4f46-85fa-3d2f82c2def8/Rust-on-Pear_SCN0002859.jpg",
            "https://www.maximumyield.com/images/uploads/maximum-yield-plant-disease.jpg",
            "https://www.kiwicare.co.nz/assets/blogimages/_resampled/CroppedFocusedImageWzEyMDAsOTAwLGZhbHNlLDBd/Disease-Leaf.jpg",
            "https://www.outsidemyhouse.com/wp-content/uploads/2017/09/bacterial-diseases-of-plants-700x467.jpg"
        ],
        selectedImg: "https://cdn.britannica.com/89/126689-004-D622CD2F/Potato-leaf-blight.jpg"
    }

    constructor(props) {
        super(props);
        this.props.getAgriBotInsights(this.state.selectedField, this.state.imgs[0]);
    }

    _onFieldChange = async (e) => {
        this.setState({ selectedField: e.target.value }, () => {
            this.props.getAgriBotInsights(this.state.selectedField, this.state.imgs[0]);
        });
    }

    _formatName = (text) => {
        text = text.replace("_", " ");
        text = text.toUpperCase();
        return text;
    }

    _analyzeRandomImage = () => {
        this.setState({ selectedImg: this.state.imgs[Math.floor(Math.random() * Math.floor(4))] }, () => {
            this.props.getAgriBotInsights(this.state.selectedField, this.state.selectedImg);
        })
    }

    render() {
        return (
            <>
                <FieldSelector selectedField={this.state.selectedField} onFieldChange={this._onFieldChange} />
                <br />
                {this.props.agriBotInsights ?
                    <Content style={{ backgroundColor: '#f4f4f4' }}>
                        <Row>
                            <Column>
                                {this.props.agriBotInsights.plantDocData ?
                                    <Card heading="PlantDoc Analytics" icon={<img src={`https://www.klick.com/health/wp-content/uploads/2016/04/healthbot.jpg`} width="32px" alt={"plantDoc"} />} subtitle={new Date(this.props.agriBotInsights.plantDocData.report.dt).toLocaleString()}>
                                        <div className="card-body">
                                            <img src={this.state.selectedImg} alt="img" width="100px" />
                                        </div>
                                        <hr />
                                        <div className="card-body">
                                            <h4 className="card-body-head">Nutrient Deficiency Analysis Report</h4>
                                        </div>
                                        <br />
                                        {this.props.agriBotInsights.plantDocData.report.deficiencies.map(deficiency => {
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
                                        })}
                                        <hr />
                                        <div className="card-body">
                                            <h4 className="card-body-head">Disease Analysis Report</h4>
                                        </div>
                                        <br />
                                        {this.props.agriBotInsights.plantDocData.report.diseases.map(disease => {
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
                                        })}
                                        <hr />
                                        <Button onClick={this._analyzeRandomImage} renderIcon={Camera20}>Trigger AgriBot &amp; Update Now</Button>
                                    </Card> : "Getting Satellite based Weather card..."}
                            </Column>
                            <Column>
                                {this.props.agriBotInsights.envData && this.props.agriBotInsights.soilData ?
                                    <Card heading="AgriBot Data" icon={<IotConnect20 />}>
                                        <hr />
                                        <div className="card-body">
                                            <h4 className="card-body-head">Environment Analytics</h4>
                                        </div>
                                        <br />
                                        <div className="card-body">
                                            <strong className="card-body-head">Temperature</strong>
                                            <span className="card-body-value">{this.props.agriBotInsights.envData.temp}&deg;C</span>
                                        </div>
                                        <div className="card-body">
                                            <strong className="card-body-head">Humidity</strong>
                                            <span className="card-body-value">{this.props.agriBotInsights.envData.humidity}%</span>
                                        </div>
                                        <div className="card-body">
                                            <strong className="card-body-head">Pressure</strong>
                                            <span className="card-body-value">{this.props.agriBotInsights.envData.pressure} hPa</span>
                                        </div>
                                        <hr />

                                        <div className="card-body">
                                            <h4 className="card-body-head">Soil Analytics</h4>
                                        </div>
                                        <br />
                                        <div className="card-body">
                                            <strong className="card-body-head">Moisture</strong>
                                            <span className="card-body-value">{this.props.agriBotInsights.soilData.moisture} m<sup>3</sup>/m<sup>3</sup></span>
                                        </div>
                                        <div className="card-body">
                                            <strong className="card-body-head">Soil Temperature</strong>
                                            <span className="card-body-value">{this.props.agriBotInsights.soilData.temp}&deg;C</span>
                                        </div>
                                        <div className="card-body">
                                            <strong className="card-body-head">Nitrogen Value</strong>
                                            <span className="card-body-value">{this.props.agriBotInsights.soilData.fertility.n}&nbsp;&nbsp;<svg height="10" width="10"><circle cx="50%" cy="50%" r="5" className={`${this.props.agriBotInsights.soilData.fertility.n}`} /></svg></span>
                                        </div>
                                        <div className="card-body">
                                            <strong className="card-body-head">Potassium Value</strong>
                                            <span className="card-body-value">{this.props.agriBotInsights.soilData.fertility.p}&nbsp;&nbsp;<svg height="10" width="10"><circle cx="50%" cy="50%" r="5" className={`${this.props.agriBotInsights.soilData.fertility.p}`} /></svg></span>
                                        </div>
                                        <div className="card-body">
                                            <strong className="card-body-head">Phosphorous Value</strong>
                                            <span className="card-body-value">{this.props.agriBotInsights.soilData.fertility.k}&nbsp;&nbsp;<svg height="10" width="10"><circle cx="50%" cy="50%" r="5" className={`${this.props.agriBotInsights.soilData.fertility.k}`} /></svg></span>
                                        </div>
                                    </Card> : <></>}
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
        getAgriBotInsights: (fieldResId, img) => {
            dispatch(getAgriBotInsights({ fieldResId, img }));
        }
    }
}

export default connect(mapStateToProps, mapDispatchToProps)(AgriBotInsightsDashboard);
