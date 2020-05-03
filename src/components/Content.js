import React from 'react';
import {
    Grid,
    Column,
    Row
} from 'carbon-components-react/lib/components/Grid';

export default class Content extends React.Component {
    render(){
        return(
            <Grid>
                <Row>
                    <Column>
                        {
                            this.props.children
                        }
                    </Column>
                </Row>
            </Grid>
        )
    }
}