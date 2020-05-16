import React from 'react';
import FieldSelector from './FieldSelector';
import { connect } from 'react-redux';
import Card from './Card';

class AgriBotInsightsDashboard extends React.Component {
    state = {
        selectedField: this.props.fields[0].fieldResId
    }

    _onFieldChange = (e) => {
        this.setState({selectedField: e.target.value});
    }

    render(){
        return(
            <>
                <FieldSelector selectedField={this.state.selectedField} onFieldChange={this._onFieldChange}/>
                <br/>
                Coming soon...
            </>
        )
    }
}

const mapStateToProps = (state) =>{
    return {
        fields: state.fields,
        busy: state.busy,
    }
}

export default connect(mapStateToProps)(AgriBotInsightsDashboard);
