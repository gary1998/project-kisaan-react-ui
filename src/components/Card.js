import React from 'react';
import {
    Tile
} from 'carbon-components-react';

export default class Card extends React.Component {
    render(){
        return(
            <Tile>
                <Tile>{this.props.icon}&nbsp;{this.props.header}</Tile>
                <Tile>{this.props.children}</Tile>
                <Tile>{this.props.footer}</Tile>
            </Tile>
        )
    }
}