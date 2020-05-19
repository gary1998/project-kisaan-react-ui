import React from 'react';
import {
    Select,
    SelectItem,
    Row,
    Column,
    Button
} from 'carbon-components-react';
import { connect } from 'react-redux';

class FieldSelector extends React.Component{
    state = {
        datetime: "",
        datetimeupdater: ""
    }

    componentDidMount(){
        let updater = setInterval(() => {
            this.setState({datetime: new Date().toLocaleString()});
        }, 100);
        this.setState({datetimeupdater: updater});
    }

    componentWillUnmount(){
        clearInterval(this.state.datetimeupdater);
    }

    render(){
        return(
            <Row>
                <Column>
                    <Button disabled kind="ghost" size="field">{this.state.datetime}</Button>
                </Column>
                <Column>
                    <Select value={this.props.selectedField} onChange={this.props.onFieldChange} width={'xl'} id="agriBotDashboardfieldSelector" inline labelText="Select one field to get cards on dashboard">
                        {
                            this.props.fields.map(field => {
                                let seperator = field.fieldResId.lastIndexOf(":");
                                let id = field.fieldResId.substring(seperator+1);
                                return(
                                    <SelectItem key={field.fieldResId} text={id} value={field.fieldResId} />
                                )
                            })
                        }
                    </Select>
                </Column>
            </Row>
        )
    }
}

const mapStateToProps = (state) =>{
    return {
        fields: state.fields
    }
}

export default connect(mapStateToProps)(FieldSelector);
