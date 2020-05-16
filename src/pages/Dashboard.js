import React from 'react';
import Card from '../components/Card';
import {
    Row, Column
} from 'carbon-components-react';
import Cloud20 from "@carbon/icons-react/lib/cloud/20";
import Sprout20 from "@carbon/icons-react/lib/sprout/20";

export default class Dashboard extends React.Component {
    render(){
        return(
            <Row>
                <Column>
                    <Card icon={<Cloud20 />} header={<h4>Weather Report</h4>}>
                        Card1
                    </Card>
                </Column>
                <Column>
                    <Card icon={<Sprout20 />} header={<h4>Soil Report</h4>}>
                        Card2
                    </Card>
                </Column>
            </Row>
        )
    }
}