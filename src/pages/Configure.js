import React from 'react';
import { getFields, getCrops, newCrop, newField, deleteField, deleteCrop } from '../Actions';
import { connect } from 'react-redux';
import Map from 'pigeon-maps';
const cropsDetails = require('../brain.json');

class Configure extends React.Component{
    state = {
        busyAddingCrop: false,
        busyDeletingCrop: false,
        busyAddingField: false,
        busyDeletingField: false,
        selectedCrop: 'FR01',
        fieldGeoJSON: {},
        fieldName: Math.random().toString(36).substring(2, 15) + Math.random().toString(36).substring(2, 15)
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
        this.setState({busyAddingCrop: true});
        await this.count(5000);
        let crop = cropsDetails.filter((crop) => {
            return crop.cropId===this.state.selectedCrop;
        });
        await this.props.addCrop(this.props.user.email, this.state.selectedCrop, crop[0].name);
        this.setState({busyAddingCrop: false});
    }

    _handleAddField = async() => {
        this.setState({busyAddingField: true});
        await this.count(6500);
        await this.props.addField(this.props.user.email, this.state.fieldGeoJSON);
        this.setState({busyAddingField: false});
    }

    deleteField = async(fieldId) => {
        this.setState({busyDeletingField: true});
        await this.count(5000);
        await this.props.removeField(this.props.user.email, fieldId);
        this.setState({busyDeletingField: false});
    }

    deleteCrop = async(cropId) => {
        this.setState({busyDeletingCrop: true});
        await this.count(5000);
        await this.props.removeCrop(this.props.user.email, cropId);
        this.setState({busyDeletingCrop: false});
    }

    count = async(time) => {
        return new Promise(resolve => {
            setTimeout(() => {
                resolve();
            }, time);
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

    _handleMapBoundChange = (data) => {
        let ne = data.bounds.ne;
        let sw = data.bounds.sw;
        let nw = [sw[0], ne[1]];
        let se = [ne[0], sw[1]];
        let format = {
            "name": this.state.fieldName,
            "geo_json": {
                "type": "FeatureCollection",
                "features": [
                    {
                        "type": "Feature",
                        "properties": {},
                        "geometry": {
                            "type": "Polygon",
                            "coordinates": [
                                [
                                    sw,
                                    se,
                                    ne,
                                    nw,
                                    sw,
                                ]
                            ]
                        }
                    }
                ]
            }
        }
        this.setState({fieldGeoJSON: format});
    }

    render(){
        return(
            <div className="configure-container">
                <div id="fieldsSection">
                    <label>Fields Section</label>
                    <div className="pure-g">
                        <div className="l-box-lrg pure-u-1 pure-u-md-1-2 map">
                            <Map center={[28.946755, 77.726754]} animate={true} zoom={12} height={300} onBoundsChanged={this._handleMapBoundChange} provider={this.provider['osm']} />
                            <span className="pure-form-message">Zoom to your fields (maximum 3000 Ha) and click on button below.</span>
                            {
                                this.state.busyAddingField?<button className="pure-button pure-button-disabled"><i className="fa fa-spin fa-spinner"/>&nbsp;Wait</button>:<button className="pure-button" onClick={this._handleAddField}>Add Field</button>
                            }
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
                                        this.props.fields.length?
                                        this.props.fields.map(field => {
                                            let seperator = field.fieldResId.lastIndexOf(":");
                                            let id = field.fieldResId.substring(seperator+1);
                                            let pt1 = field.data.geo_json.features[0].geometry.coordinates[0][0];
                                            let pt2 = field.data.geo_json.features[0].geometry.coordinates[0][2];
                                            return(
                                                <tr key={field.fieldResId}>
                                                    <td>{id}</td>
                                                    <td>{pt1[0]+"\n"+pt1[1]+"\n"+pt2[0]+"\n"+pt2[1]}</td>
                                                    <td>{this.state.busyDeletingField?<i className="fa pure-button-disabled fa-trash-o"/>:<i onClick={() => this.deleteField(id)} className="deleteIcon fa fa-trash-o"/>}</td>
                                                </tr>
                                            )
                                        })
                                        :
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
                                    {!this.state.busyAddingCrop?
                                    <button type="submit" className="pure-button">
                                        Add Crop
                                    </button>:
                                    <button type="submit" className="pure-button pure-button-disabled">
                                        <i className="fa fa-spin fa-spinner"/>&nbsp;Wait
                                    </button>}
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
                                                    <td>{this.state.busyDeletingCrop?<i className="fa pure-button-disabled fa-trash-o"/>:<i onClick={() => this.deleteCrop(crop.cropId)} className="deleteIcon fa fa-trash-o"/>}</td>
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
        addField: async(owner, data) => {
            dispatch(await newField(owner, data));
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