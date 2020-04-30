const serverURL= "https://project-kisaan-graphql-server.herokuapp.com/graphql";
const apiURL = "https://api.agromonitoring.com/agro/1.0/polygons";

export const loginUser = async(email, password) => {
    let query = `query login($email: String, $password: String){login(email: $email, password: $password){name photo email}}`;
    let variables = { email, password };

    return user => {
        fetch(serverURL, {
            method: 'POST',
            headers: {
                'Content-Type': 'application/json'
            },
            body: JSON.stringify({ query, variables })
        }).then(data => {
            return data.json();
        }).then(body => {
            if(body.data.login){
                user({
                    type: "LOGIN_SUCCESS",
                    payload: body.data.login
                });
            } else {
                user({
                    type: "LOGIN_FAILED"
                });
            }
        }).catch(err => {
            console.log('error while loggin in', err);
            user({
                type: "LOGIN_FAILED"
            });
        });
    }
}

export const logoutUser = () => {
    return user => {
        user({
            type: "LOGOUT",
        })
    }
}

export const getFields = async(email) => {
    let query = `query fields($email: String){fields(email: $email){fieldResId data{name geo_json{features{geometry{coordinates}}}}}}`;
    let variables = { email };
    return fields => {
        fetch(serverURL, {
            method: 'POST',
            headers: {
                'Content-Type': 'application/json'
            },
            body: JSON.stringify({ query, variables })
        }).then(data => {
            return data.json();
        }).then(body => {
            if(body.data.fields){
                fields({
                    type: "FIELDS_RETRIEVAL_SUCCESS",
                    payload: body.data.fields
                });
            } else {
                fields({
                    type: "FIELDS_RETRIEVAL_FAILED"
                });
            }
        }).catch(err => {
            console.log('error while retrieving fields', err);
            fields({
                type: "FIELDS_RETRIEVAL_FAILED"
            });
        });
    }
}

export const getCrops = async(email) => {
    let query = `query crops($email: String){crops(email: $email){cropId name cropResId}}`;
    let variables = { email };
    return crops => {
        fetch(serverURL, {
            method: 'POST',
            headers: {
                'Content-Type': 'application/json'
            },
            body: JSON.stringify({ query, variables })
        }).then(data => {
            return data.json();
        }).then(body => {
            if(body.data.crops){
                crops({
                    type: "CROPS_RETRIEVAL_SUCCESS",
                    payload: body.data.crops
                });
            } else {
                crops({
                    type: "CROPS_RETRIEVAL_FAILED"
                });
            }
        }).catch(err => {
            console.log('error while retrieving crops', err);
            crops({
                type: "CROPS_RETRIEVAL_FAILED"
            });
        });
    }
}

export const newCrop = async(owner, cropId, name) => {
    let query = `mutation addCrop($owner: String, $cropId: String, $cropResId: String, $name: String){createCrop(owner: $owner, cropId: $cropId, name: $name, cropResId: $cropResId){cropResId cropId}}`;
    let cropResId = `${owner}:crops:${cropId}`;
    let variables = { cropId, name, owner, cropResId};
    return resp => {
        fetch(serverURL, {
            method: 'POST',
            headers: {
                'Content-Type': 'application/json'
            },
            body: JSON.stringify({ query, variables })
        }).then(data => {
            return data.json();
        }).then(body => {
            if(body.data.createCrop.cropId){
                resp({
                    type: "CROP_ADD_SUCCESS",
                    payload: {
                        cropId, name
                    }
                });
            } else {
                resp({
                    type: "CROP_ADD_FAILED"
                });
            }
        }).catch(err => {
            console.log('error while adding crop', err);
            resp({
                type: "CROP_ADD_FAILED"
            });
        });
    }
}

export const newField = async(owner, data) => {
    return resp => {
        addFieldToAgro(data).then(body => {
            let fieldResId = `${owner}:fields:${body.id}`;
            let query = `mutation addField($owner: String, $data: FieldInputData, $fieldResId: String){createField(owner: $owner, data: $data, fieldResId: $fieldResId){fieldResId data{name geo_json{features{geometry{coordinates}}}}}}`;
            delete data.geo_json.features[0].properties;
            let variables = { fieldResId, owner, data };
            fetch(serverURL, {
                method: 'POST',
                headers: {
                    'Content-Type': 'application/json'
                },
                body: JSON.stringify({ query, variables })
            }).then(data => {
                return data.json();
            }).then(body => {
                if(body.data.createField.data){
                    resp({
                        type: "FIELD_ADD_SUCCESS",
                        payload: body.data.createField
                    });
                } else {
                    resp({
                        type: "FIELD_ADD_FAILED"
                    });
                }
            }).catch(err => {
                console.log('error while adding field to db', err);
                resp({
                    type: "FIELD_ADD_FAILED"
                });
            });
        }).catch(err => {
            console.log('error while adding field to api', err);
            resp({
                type: "FIELD_ADD_FAILED"
            })
        })
    }
}

export const deleteField = async(owner, id) => {
    return resp => {
        deleteFieldFromAgro(id).then(() => {
            let query = `mutation deleteField($fieldResId: String){removeField(fieldResId: $fieldResId)}`;
            let fieldResId = `${owner}:fields:${id}`;
            let variables = { fieldResId };
            fetch(serverURL, {
                method: 'POST',
                headers: {
                    'Content-Type': 'application/json'
                },
                body: JSON.stringify({ query, variables })
            }).then(data => {
                return data.json();
            }).then(body => {
                if(body.data.removeField){
                    resp({
                        type: "FIELD_REMOVAL_SUCCESS",
                        payload: fieldResId
                    });
                } else {
                    resp({
                        type: "FIELD_REMOVAL_FAILED"
                    });
                }
            }).catch(err => {
                console.log('error while deleting field', err);
            });
        }).catch(err => {
            console.log('error while deleting field from api', err);
        })
    }
}

export const deleteCrop = async(owner, cropId) => {
    let query = `mutation deleteCrop($cropResId: String){removeCrop(cropResId: $cropResId)}`;
    let cropResId = `${owner}:crops:${cropId}`;
    let variables = { cropResId };
    return resp => {
        fetch(serverURL, {
            method: 'POST',
            headers: {
                'Content-Type': 'application/json'
            },
            body: JSON.stringify({ query, variables })
        }).then(data => {
            return data.json();
        }).then(body => {
            if(body.data.removeCrop){
                resp({
                    type: "CROP_REMOVAL_SUCCESS",
                    payload: cropId
                });
            } else {
                resp({
                    type: "CROP_REMOVAL_FAILED"
                });
            }
        }).catch(err => {
            console.log('error while deleting crop', err);
        });
    }
}

const addFieldToAgro = (fieldData) => {
    return new Promise((resolve, reject) => {
        fetch(`${apiURL}?appid=83e9d92cb19c29c0045da2e0282321f5`, {
            method: 'POST',
            headers: {
                'Content-Type': 'application/json'
            },
            body: JSON.stringify(fieldData)
        }).then(async data => {
            if(data.ok){
                return data.json()
            } else {
                console.log('error while adding field to agro', data.statusText);
                reject(data.statusText);
            }
        }).then(body => {
            resolve(body);
        })
    })
}

const deleteFieldFromAgro = (fieldId) => {
    return new Promise((resolve, reject) => {
        fetch(`${apiURL}/${fieldId}?appid=83e9d92cb19c29c0045da2e0282321f5`, {
            method: 'DELETE'
        }).then(data => {
            if(data.ok){
                resolve()
            } else {
                alert(data.response);
                console.log('error while deleting field from agro', data.statusText);
                reject(data.statusText);
            }
        })
    })
}