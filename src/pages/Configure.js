import React from 'react';
import {
    Grid,
    Row,
    Column,
    DataTable,
    Button,
    Select,
    SelectItem,
    Form
} from 'carbon-components-react';
import { getGeolocation, getFields, getCrops, newCrop, newField, deleteField, deleteCrop } from '../Actions';
import { connect } from 'react-redux';
import Map from 'pigeon-maps';
import TrashCan20 from "@carbon/icons-react/lib/trash-can/20";
import Add20 from "@carbon/icons-react/lib/add/20";
const cropsDetails = require('../brain.json');
const {
    TableContainer,
    Table,
    TableHead,
    TableRow,
    TableBody,
    TableCell,
    TableHeader,
} = DataTable;

class Configure extends React.Component {
    state = {
        selectedCrop: 'FR01',
        fieldGeoJSON: {},
        fieldName: Math.random().toString(36).substring(2, 15) + Math.random().toString(36).substring(2, 15)
    }

    constructor(props) {
        super(props);
        this._setEnvironment();
    }

    _setEnvironment = () => {
        if (this.props.user) {
            this.props.retrieveGeolocation();
            this.props.retrieveCrops(this.props.user.email);
            this.props.retrieveFields(this.props.user.email);
        }
    }

    _handleChangeCropSelection = (evt) => {
        this.setState({ selectedCrop: evt.target.value });
    }

    _handleAddCrop = async () => {
        if (this.props.user) {
            let crop = cropsDetails.filter((crop) => {
                return crop.cropId === this.state.selectedCrop;
            });
            await this.props.addCrop(this.props.user.email, this.state.selectedCrop, crop[0].name);
        }
    }

    _handleAddField = async () => {
        if (this.props.user) {
            await this.props.addField(this.props.user.email, this.state.fieldGeoJSON);
        }
    }

    deleteField = async (fieldId) => {
        if (this.props.user) {
            await this.props.removeField(this.props.user.email, fieldId);
        }
    }

    deleteCrop = async (cropId) => {
        if (this.props.user) {
            await this.props.removeCrop(this.props.user.email, cropId);
        }
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
        let ne = [data.bounds.ne[1], data.bounds.ne[0]];
        let sw = [data.bounds.sw[1], data.bounds.sw[0]];
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
        this.setState({ fieldGeoJSON: format });
    }

    render() {
        return (
            <>
                {
                    !this.props.user ?
                        <div>You're not logged in</div> :
                        <Grid>
                            <Row>
                                <h2 style={{ width: '100%', textAlign: 'center' }}>Fields Section</h2>
                            </Row>
                            <br />
                            <Row>
                                <Column sm={4} lg={6} style={{ textAlign: 'center' }}>
                                    <Map center={this.props.geolocation ? this.props.geolocation : [21, 73]} animate={true} zoom={12} height={300} onBoundsChanged={this._handleMapBoundChange} provider={this.provider['osm']} />
                                    <div className="bx--form__helper-text" style={{ maxWidth: '100%' }}>
                                        Zoom to your fields (1 Ha to 3000 Ha) and click on button below.
                                        </div>
                                    <Button renderIcon={Add20} onClick={this._handleAddField}>
                                        Add
                                        </Button>
                                </Column>
                                <Column sm={4} lg={6}>
                                    <TableContainer title="Your Fields">
                                        <Table>
                                            <TableHead>
                                                <TableRow>
                                                    <TableHeader key="fieldId">
                                                        Field Id
                                                </TableHeader>
                                                    <TableHeader key="fieldLoc">
                                                        Field Location
                                                </TableHeader>
                                                    <TableHeader key="delete">

                                                    </TableHeader>
                                                </TableRow>
                                            </TableHead>
                                            <TableBody>
                                                {
                                                    !this.props.fields ?
                                                        <TableRow key={"no-fields"}>
                                                            <TableCell colspan={3}>
                                                                Receiving your fields...
                                                            </TableCell>
                                                        </TableRow> :
                                                        this.props.fields.length < 1 ?
                                                            <TableRow key={"no-fields"}>
                                                                <TableCell colspan={3}>
                                                                    No fields yet
                                                                </TableCell>
                                                            </TableRow> :
                                                            this.props.fields.map(field => {
                                                                let seperator = field.fieldResId.lastIndexOf(":");
                                                                let id = field.fieldResId.substring(seperator + 1);
                                                                let pt1 = field.data.geo_json.features[0].geometry.coordinates[0][0];
                                                                let pt2 = field.data.geo_json.features[0].geometry.coordinates[0][2];
                                                                return (
                                                                    <TableRow key={field.fieldResId}>
                                                                        <TableCell>
                                                                            {id}
                                                                        </TableCell>
                                                                        <TableCell>
                                                                            {pt1[0] + "\n" + pt1[1] + "\n" + pt2[0] + "\n" + pt2[1]}
                                                                        </TableCell>
                                                                        <TableCell>
                                                                            <Button
                                                                                kind="ghost"
                                                                                tabIndex={0}
                                                                                hasonlyicon="true"
                                                                                renderIcon={TrashCan20}
                                                                                iconDescription="Delete"
                                                                                onClick={() => { this.deleteField(id) }}
                                                                            />
                                                                        </TableCell>
                                                                    </TableRow>
                                                                )
                                                            })
                                                }
                                            </TableBody>
                                        </Table>
                                    </TableContainer>
                                </Column>
                            </Row>
                            <br />
                            <Row>
                                <h2 style={{ width: '100%', textAlign: 'center' }}>Crops Section</h2>
                            </Row>
                            <br />
                            <Row>
                                <Column sm={4} lg={6}>
                                    <Form>
                                        <Select
                                            id="crop-selector"
                                            helperText="Select crop to add"
                                            labelText="Crop"
                                            inline={false}
                                            defaultValue={this.state.selectedCrop}
                                            onChange={this._handleChangeCropSelection}
                                        >
                                            {
                                                cropsDetails.map(crop => {
                                                    return (
                                                        <SelectItem key={crop.cropId} text={crop.name} value={crop.cropId} />
                                                    )
                                                })
                                            }
                                        </Select>
                                        <br />
                                        <Button
                                            renderIcon={Add20}
                                            onClick={this._handleAddCrop}
                                        >
                                            Add
                                    </Button>
                                    </Form>
                                </Column>
                                <Column sm={4} lg={6}>
                                    <TableContainer>
                                        <Table>
                                            <TableHead>
                                                <TableRow>
                                                    <TableHeader key="cropId">
                                                        Crop Id
                                                </TableHeader>
                                                    <TableHeader key="cropName">
                                                        Crop Name
                                                </TableHeader>
                                                    <TableHeader key="delete">

                                                    </TableHeader>
                                                </TableRow>
                                            </TableHead>
                                            <TableBody>
                                                {
                                                    !this.props.crops ?
                                                        <TableRow key={"no-crops"}>
                                                            <TableCell colspan={3}>
                                                                Receiving your crops...
                                                            </TableCell>
                                                        </TableRow> :
                                                        this.props.crops.length < 1 ?
                                                            <TableRow key={"no-crops"}>
                                                                <TableCell colspan={3}>
                                                                    No crops yet
                                                        </TableCell>
                                                            </TableRow> :
                                                            this.props.crops.map(crop => {
                                                                return (
                                                                    <TableRow key={crop.cropId}>
                                                                        <TableCell>
                                                                            {crop.cropId}
                                                                        </TableCell>
                                                                        <TableCell>
                                                                            {crop.name}
                                                                        </TableCell>
                                                                        <TableCell>
                                                                            <Button
                                                                                kind="ghost"
                                                                                tabIndex={0}
                                                                                hasonlyicon="true"
                                                                                renderIcon={TrashCan20}
                                                                                iconDescription="Delete"
                                                                                onClick={() => { this.deleteCrop(crop.cropId) }}
                                                                            />
                                                                        </TableCell>
                                                                    </TableRow>
                                                                )
                                                            })
                                                }
                                            </TableBody>
                                        </Table>
                                    </TableContainer>
                                </Column>
                            </Row>
                        </Grid>
                }
            </>
        )
    }
}

const mapStateToProps = (state) => {
    return {
        user: state.user,
        fields: state.fields,
        crops: state.crops,
        busy: state.busy,
        geolocation: state.geolocation
    }
}

const mapDispatchToProps = (dispatch) => {
    return {
        addCrop: (owner, cropId, name) => {
            dispatch(newCrop({ owner, cropId, name }))
        },
        removeCrop: (owner, cropId) => {
            dispatch(deleteCrop({ owner, cropId }));
        },
        addField: (owner, data) => {
            dispatch(newField({ owner, data }));
        },
        removeField: (owner, fieldId) => {
            dispatch(deleteField({ owner, fieldId }));
        },
        retrieveCrops: (email) => {
            dispatch(getCrops({ email }));
        },
        retrieveFields: (email) => {
            dispatch(getFields({ email }));
        },
        retrieveGeolocation: () => {
            dispatch(getGeolocation());
        }
    }
}

export default connect(mapStateToProps, mapDispatchToProps)(Configure);