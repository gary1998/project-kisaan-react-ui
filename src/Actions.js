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
    let query = `query fields($email: String){fields(email: $email){fieldId location{coordinates}}}`;
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
    let query = `query crops($email: String){crops(email: $email){cropId name}}`;
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

export const addCrop = async(owner, cropId, name) => {
    let query = `mutation addCrop($owner: String, $cropId: String, $name: String){createCrop(owner: $owner, cropId: $cropId, name: $name){cropId}}`;
    let variables = { cropId, name, owner };
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
            if(body.data.cropId){
                resp({
                    type: "CROP_ADD_SUCCESS",
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

export const removeField = async(fieldId) => {
    let query = `mutation deleteField($fieldId: String){removeField(fieldId: $fieldId)}`;
    let variables = { fieldId };
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
            if(body){
                resp({
                    type: "FIELD_REMOVAL_SUCCESS",
                });
            } else {
                resp({
                    type: "FIELD_REMOVAL_FAILED"
                });
            }
        }).catch(err => {
            console.error(err);
        });
    }
}

export const removeCrop = async(cropId) => {
    let query = `mutation deleteCrop($cropId: String){removeCrop(cropId: $cropId)}`;
    let variables = { cropId };
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
            if(body){
                resp({
                    type: "CROP_REMOVAL_SUCCESS",
                });
            } else {
                resp({
                    type: "CROP_REMOVAL_FAILED"
                });
            }
        }).catch(err => {
            console.error(err);
        });
    }
}