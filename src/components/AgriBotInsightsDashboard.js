import React from 'react';
import FieldSelector from './FieldSelector';
import { connect } from 'react-redux';
import {
    Row,
    Column,
    Content,
    Button
} from 'carbon-components-react';
import { Camera20 } from '@carbon/icons-react';
import Card from './Card';
import { getAgriBotInsights } from '../Actions';

class AgriBotInsightsDashboard extends React.Component {
    state = {
        selectedField: this.props.fields[0].fieldResId
    }

    constructor(props) {
        super(props);
        this.props.getAgriBotInsights(this.state.selectedField);
    }

    _onFieldChange = async (e) => {
        this.setState({ selectedField: e.target.value }, async () => {
            await this.props.getAgriBotInsights(this.state.selectedField);
        });
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
                                    <Card heading="Crop Health" icon={<img src={`https://www.klick.com/health/wp-content/uploads/2016/04/healthbot.jpg`} width="32px" alt={this.props.satelliteInsights.weatherData.weather.icon} />} subtitle={new Date(this.props.satelliteInsights.weatherData.dt * 1000).toLocaleString()}>
                                        <Button renderIcon={Camera20}>Trigger AgriBot &amp; Update Now</Button>
                                    </Card> : "Getting Satellite based Weather card..."}
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
        getAgriBotInsights: (fieldResId) => {
            dispatch(getAgriBotInsights({ fieldResId }));
        }
    }
}

export default connect(mapStateToProps, mapDispatchToProps)(AgriBotInsightsDashboard);
