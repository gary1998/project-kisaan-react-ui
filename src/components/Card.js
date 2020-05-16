import React from 'react';
import {
    Tile
} from 'carbon-components-react';

export default class Card extends React.Component {
    render(){
        return(
            <Tile className="card">
                <Tile light className="card-header">
                    <div>
                        <h3 className="inline">
                            { this.props.heading }
                        </h3>
                        <span className="inline card-icon">
                            { this.props.icon }
                        </span>
                    </div>
                    <div className=" inline bx--form__helper-text">{ this.props.subtitle }</div>
                </Tile>
                <Tile light className="card-body">
                    { this.props.children }
                </Tile>
            </Tile>
        )
    }
}