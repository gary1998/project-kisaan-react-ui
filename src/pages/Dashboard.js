import React from 'react';
import {
    Row, 
    ContentSwitcher,
    Switch,
    Grid
} from 'carbon-components-react';
import AgriBotInsightsDashboard from '../components/AgriBotInsightsDashboard';
import SatelliteInsightsDashboard from '../components/SatelliteInsightsDashboard';

class Dashboard extends React.Component {
    state = {
        selectedField: '',
        selectedTab: 0
    }

    _handleContentChange = (e) => {
        this.setState({selectedTab: e.index})
    }

    render(){
        return(
            <Grid>
                <Row>
                    <ContentSwitcher selectedIndex={0} onChange={this._handleContentChange}>
                        <Switch name="satelliteInsights" text="&nbsp;Satellite" />
                        <Switch name="agriBotInsights" text="&nbsp;AgriBot"/>
                    </ContentSwitcher>
                </Row>
                <Grid>
                    {
                        this.state.selectedTab===0?
                        <SatelliteInsightsDashboard />:
                        <AgriBotInsightsDashboard />
                    }
                </Grid>
            </Grid>
        )
    }
}

export default Dashboard;