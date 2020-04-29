import React from 'react';
import store from '../Store';
import { getFields, getCrops, addCrop, removeField, removeCrop } from '../Actions';
import { connect } from 'react-redux';
const cropsDetails = require('../brain.json');

class Configure extends React.Component{
    state = {
        busyAdding: false,
        busyDeleting: false,
        selectedCrop: 'FR01'
    }

    _handleEnvironmentPrepare = async() => {
        store.dispatch(await getFields(this.props.user.email));
        store.dispatch(await getCrops(this.props.user.email));
    }

    constructor(props){
        super(props);
        this._handleEnvironmentPrepare().then(() => {
            this.setState({busyDeleting: false, busyAdding: false});
        });
    }

    _handleChangeCropSelection = (evt) => {
        this.setState({selectedCrop: evt.target.value});
    }

    _handleAddCrop = async(evt) => {
        evt.preventDefault();
        this.setState({busyAdding: true});
        let crop = cropsDetails.filter((crop) => {
            return crop.cropId===this.state.selectedCrop;
        });
        store.dispatch(await addCrop(this.props.user.email, this.state.selectedCrop, crop[0].name));
        // window.location.reload();
    }

    deleteField = async(fieldId) => {
        this.setState({busyDeleting: true});
        store.dispatch(await removeField(fieldId));
        // window.location.reload();
    }

    deleteCrop = async(cropId) => {
        this.setState({busyDeleting: true});
        store.dispatch(await removeCrop(cropId));
        // window.location.reload();
    }

    render(){
        return(
            <div className="configure-container">
                <div id="fieldsSection">
                    <label>Fields Section</label>
                    <div className="pure-g">
                        <div className="l-box-lrg pure-u-1 pure-u-md-1-2">
                            Map
                        </div>
                        <div className="l-box-lrg pure-u-1 pure-u-md-1-2">
                            <table className="pure-table pure-table-bordered">
                                <thead>
                                    <tr>
                                        <th>Field Id</th>
                                        <th>Field Location</th>
                                        <th></th>
                                    </tr>
                                </thead>
                                <tbody>
                                    {
                                        this.props.fields.length?this.props.fields.map(field => {
                                            return(
                                                <tr key={field.fieldId}>
                                                    <td>{field.fieldId}</td>
                                                    <td>{field.location.coordinates[0][0][0]}</td>
                                                    <td>{this.state.busyDeleting?<i className="fa fa-spin fa-trash-o" disabled/>:<i onClick={() => this.deleteField(field.fieldId)} className="deleteIcon fa fa-trash-o"/>}</td>
                                                </tr>
                                            )
                                        }):
                                        <tr>
                                            <td colSpan={3}>No fields yet.</td>
                                        </tr>
                                    }
                                </tbody>
                            </table>
                        </div>
                    </div>
                </div>
                <section id="cropsSection">
                    <label>Crops Section</label>
                    <div className="pure-g">
                        <div className="l-box-lrg pure-u-1 pure-u-md-1-2">
                            <form className="pure-form" onSubmit={this._handleAddCrop}>
                                <fieldset>
                                    <select id="state" value={this.state.selectedCrop} onChange={this._handleChangeCropSelection}>
                                        {
                                            cropsDetails.map(crop => {
                                                return (
                                                    <option key={crop.cropId} value={crop.cropId}>{crop.name}</option>
                                                )
                                            })
                                        }
                                    </select>
                                    &nbsp;
                                    <button type="submit" className="pure-button">
                                        {this.state.busyAdding?<i className="fa fa-spin fa-spinner" aria-hidden="true"></i>:""}
                                        {this.state.busyAdding?" Wait":"Add"}
                                    </button>
                                </fieldset>
                            </form>
                        </div>
                        <div className="l-box-lrg pure-u-1 pure-u-md-1-2">
                            <table className="pure-table pure-table-bordered">
                                <thead>
                                    <tr>
                                        <th>Crop Id</th>
                                        <th>Crop Name</th>
                                        <th></th>
                                    </tr>
                                </thead>
                                <tbody>
                                    {
                                        this.props.crops.length?this.props.crops.map(crop => {
                                            return(
                                                <tr key={crop.cropId}>
                                                    <td>{crop.cropId}</td>
                                                    <td>{crop.name}</td>
                                                    <td>{this.state.busyDeleting?<i className="fa fa-spin fa-trash-o" disabled/>:<i onClick={() => this.deleteCrop(crop.cropId)} className="deleteIcon fa fa-trash-o"/>}</td>
                                                </tr>
                                            )
                                        }):
                                        <tr>
                                            <td colSpan={3}>No crops yet.</td>
                                        </tr>
                                    }
                                </tbody>
                            </table>
                        </div>
                    </div>
                </section>
            </div>
        )
    }
}

function mapStateToProps(state){
    return {
        user: state.user,
        fields: state.fields,
        crops: state.crops,
        last: state.last
    }
}

export default connect(mapStateToProps)(Configure);