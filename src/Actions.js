const serverURL= "https://project-kisaan-graphql-server.herokuapp.com/graphql";

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
            console.log(err);
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
    let query = `query fields($email: String){fields(email: $email){fieldResId fieldId location{coordinates}}}`;
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
            console.log(err);
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
            console.log(err);
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
            console.log(err);
            resp({
                type: "CROP_ADD_FAILED"
            });
        });
    }
}

export const newField = async(owner, fieldId, location) => {
    let query = `mutation addField($owner: String, $fieldId: String, $location: GeoJSONInput, $fieldResId: String){createField(owner: $owner, fieldId: $fieldId, location: $location, fieldResId: $fieldResId){fieldId fieldResId}}`;
    let fieldResId = `${owner}:fields:${fieldId}`;
    let variables = { fieldResId, fieldId, owner, location };
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
            if(body.data.createField.fieldId){
                resp({
                    type: "FIELD_ADD_SUCCESS",
                    payload: body.data.createField.fieldId
                });
            } else {
                resp({
                    type: "FIELD_ADD_FAILED"
                });
            }
        }).catch(err => {
            console.log(err);
            resp({
                type: "FIELD_ADD_FAILED"
            });
        });
    }
}

export const deleteField = async(owner, fieldId) => {
    let query = `mutation deleteField($fieldResId: String){removeField(fieldResId: $fieldResId)}`;
    let fieldResId = `${owner}:fields:${fieldId}`;
    let variables = { fieldResId };
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
            if(body.data.removeField){
                resp({
                    type: "FIELD_REMOVAL_SUCCESS",
                    payload: fieldId
                });
            } else {
                resp({
                    type: "FIELD_REMOVAL_FAILED"
                });
            }
        }).catch(err => {
            console.log(err);
        });
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
            console.log(err);
        });
    }
}