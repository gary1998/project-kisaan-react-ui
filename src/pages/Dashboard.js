import React from 'react';
import {
    Row,
    ContentSwitcher,
    Switch,
    Grid
} from 'carbon-components-react';
import { getFields } from '../Actions';
import { connect } from 'react-redux';
import AgriBotInsightsDashboard from '../components/AgriBotInsightsDashboard';
import SatelliteInsightsDashboard from '../components/SatelliteInsightsDashboard';

class Dashboard extends React.Component {
    state = {
        selectedField: '',
        selectedTab: 1
    }

    constructor(props) {
        super(props);
        this._setEnvironment();
    }

    _setEnvironment = async () => {
        if (this.props.user) {
            await this.props.getFields(this.props.user.email);
        }
    }

    _handleContentChange = (e) => {
        this.setState({ selectedTab: e.index })
    }

    render() {
        return (
            <>
                {
                    !this.props.user ? <div>You're not logged in</div> :
                        <Grid>
                            <Row>
                                <ContentSwitcher selectedIndex={this.state.selectedTab} onChange={this._handleContentChange}>
                                    <Switch name="satelliteInsights" text="&nbsp;Satellite" />
                                    <Switch name="agriBotInsights" text="&nbsp;AgriBot" />
                                </ContentSwitcher>
                            </Row>
                            <Grid>
                                {
                                    this.state.selectedTab === 0 ?
                                        <SatelliteInsightsDashboard /> :
                                        <AgriBotInsightsDashboard />
                                }
                            </Grid>
                        </Grid>
                }
            </>
        )
    }
}

const mapStateToProps = (state) => {
    return {
        user: state.user,
        fields: state.fields,
        busy: state.busy
    }
}

const mapDispatchToProps = (dispatch) => {
    return {
        getFields: (email) => {
            dispatch(getFields({email}));
        }
    }
}

export default connect(mapStateToProps, mapDispatchToProps)(Dashboard);
