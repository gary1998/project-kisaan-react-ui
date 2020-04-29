import React from 'react';
import { getFields, getCrops, newCrop, newField, deleteField, deleteCrop } from '../Actions';
import { connect } from 'react-redux';
import Map from 'pigeon-maps';
const cropsDetails = require('../brain.json');

class Configure extends React.Component{
    state = {
        busyAdding: false,
        busyDeleting: false,
        selectedCrop: 'FR01'
    }

    constructor(props){
        super(props);
        this.props.retrieveCrops(this.props.user.email);
        this.props.retrieveFields(this.props.user.email);
    }

    _handleChangeCropSelection = (evt) => {
        this.setState({selectedCrop: evt.target.value});
    }

    _handleAddCrop = async(evt) => {
        evt.preventDefault();
        this.setState({busyAdding: true});
        await this.count();
        let crop = cropsDetails.filter((crop) => {
            return crop.cropId===this.state.selectedCrop;
        });
        await this.props.addCrop(this.props.user.email, this.state.selectedCrop, crop[0].name);
        this.setState({busyAdding: false});
    }

    deleteField = async(fieldId) => {
        this.setState({busyDeleting: true});
        await this.count();
        await this.props.removeField(this.props.user.email, fieldId);
        this.setState({busyDeleting: false});
    }

    deleteCrop = async(cropId) => {
        this.setState({busyDeleting: true});
        await this.count();
        await this.props.removeCrop(this.props.user.email, cropId);
        this.setState({busyDeleting: false});
    }

    count = async() => {
        return new Promise(resolve => {
            setTimeout(() => {
                resolve();
            }, 1000);
        })
    }

    provider = {
        osm: (x, y, z) => {
            const s = String.fromCharCode(97 + (x + y + z) % 3)
            return `https://${s}.tile.openstreetmap.org/${z}/${x}/${y}.png`
        },
        wikimedia: (x, y, z, dpr) => {
            return `https://maps.wikimedia.org/osm-intl/${z}/${x}/${y}${dpr >= 2 ? '@2x' : ''}.png`
        },
        stamen: (x, y, z, dpr) => {
            return `https://stamen-tiles.a.ssl.fastly.net/terrain/${z}/${x}/${y}${dpr >= 2 ? '@2x' : ''}.jpg`
        }
    }

    render(){
        return(
            <div className="configure-container">
                <div id="fieldsSection">
                    <label>Fields Section</label>
                    <div className="pure-g">
                        <div className="l-box-lrg pure-u-1 pure-u-md-1-2 map">
                            <Map center={[28.946755, 77.726754]} zoom={12} width={600} height={380} provider={this.provider['stamen']} />
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
                                        this.props.fields?this.props.fields.map(field => {
                                            return(
                                                <tr key={field.fieldResId}>
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
                                        this.props.crops?this.props.crops.map(crop => {
                                            return(
                                                <tr key={crop.cropResId}>
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

const mapStateToProps = (state) =>{
    return {
        user: state.user,
        fields: state.fields,
        crops: state.crops,
        last: state.last
    }
}

const mapDispatchToProps = (dispatch) => {
    return {
        addCrop: async(owner, cropId, name) => {
            dispatch(await newCrop(owner, cropId, name))
        },
        removeCrop: async(owner, cropId) => {
            dispatch(await deleteCrop(owner, cropId));
        },
        addField: async(fieldId, location, owner) => {
            dispatch(await newField(fieldId, owner, location));
        },
        removeField: async(owner, fieldId) => {
            dispatch(await deleteField(owner, fieldId));
        },
        retrieveCrops: async(email) => {
            dispatch(await getCrops(email));
        },
        retrieveFields: async(email) => {
            dispatch(await getFields(email));
        }
    }
}

export default connect(mapStateToProps, mapDispatchToProps)(Configure);