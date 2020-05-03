export const reducer = (state, action) => {
    switch(action.type) {
        case "APP_BUSY": {
            return {
                ...state,
                busy: true
            }
        }
        case "LOGIN_FAILED": {
            alert('No such user found. Check your email and password again.');
            return {
                ...state,
                busy: false,
                user: ""
            };
        }
        case "LOGIN_SUCCESS": {
            return {
                ...state,
                busy: false,
                user: action.payload
            }
        }
        case "LOGOUT": {
            localStorage.setItem('projectkisaanstate', '');
            return {
                ...state,
                busy: false,
                user: ""
            };
        }
        case "FIELDS_RETRIEVAL_SUCCESS": {
            return {
                ...state,
                busy: false,
                fields: action.payload
            }
        }
        case "FIELDS_RETRIEVAL_FAILED": {
            return {
                ...state,
                busy: false
            };
        }
        case "CROPS_RETRIEVAL_SUCCESS": {
            return {
                ...state,
                busy: false,
                crops: action.payload
            }
        }
        case "CROPS_RETRIEVAL_FAILED": {
            return {
                ...state,
                busy: false
            };
        }
        case "FIELD_ADD_SUCCESS": {
            let fields = state.fields.concat(action.payload);
            return {
                ...state,
                busy: false,
                fields
            }
        }
        case "FIELD_ADD_FAILED": {
            return {
                ...state,
                busy: false
            };
        }
        case "CROP_ADD_SUCCESS": {
            let crops = state.crops.concat(action.payload);
            return {
                ...state,
                busy: false,
                crops
            }
        }
        case "CROP_ADD_FAILED": {
            return {
                ...state,
                busy: false
            };
        }
        case "FIELD_REMOVAL_SUCCESS": {
            let fields = state.fields.filter(field => {
                return field.fieldResId!==action.payload
            });
            return {
                ...state,
                busy: false,
                fields
            }
        }
        case "FIELD_REMOVAL_FAILED": {
            return {
                ...state,
                busy: false
            };
        }
        case "CROP_REMOVAL_SUCCESS": {
            let crops = state.crops.filter(crop => {
                return crop.cropId!==action.payload
            });
            return {
                ...state,
                busy: false,
                crops
            }
        }
        case "CROP_REMOVAL_FAILED": {
            return {
                ...state,
                busy: false
            };
        }
        default:
            return state;
    }
}