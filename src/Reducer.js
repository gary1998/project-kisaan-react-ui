export const reducer = (state, action) => {
    switch(action.type) {
        case "LOGIN_FAILED": {
            alert('No such user found. Check your email and password again.');
            return {
                ...state,
                user: ""
            };
        }
        case "LOGIN_SUCCESS": {
            return {
                ...state,
                user: action.payload
            }
        }
        case "LOGOUT": {
            return {
                ...state,
                user: ""
            };
        }
        case "FIELDS_RETRIEVAL_SUCCESS": {
            return {
                ...state,
                fields: action.payload
            }
        }
        case "FIELDS_RETRIEVAL_FAILED": {
            return state;
        }
        case "CROPS_RETRIEVAL_SUCCESS": {
            return {
                ...state,
                crops: action.payload
            }
        }
        case "CROPS_RETRIEVAL_FAILED": {
            return state;
        }
        case "FIELD_ADD_SUCCESS": {
            let fields = state.fields.concat(action.payload);
            return {
                ...state,
                fields
            }
        }
        case "FIELD_ADD_FAILED": {
            return state;
        }
        case "CROP_ADD_SUCCESS": {
            let crops = state.crops.concat(action.payload);
            return {
                ...state,
                crops
            }
        }
        case "CROP_ADD_FAILED": {
            return state;
        }
        case "FIELD_REMOVAL_SUCCESS": {
            let fields = state.fields.filter(field => {
                return field.fieldResId!==action.payload
            });
            return {
                ...state,
                fields
            }
        }
        case "FIELD_REMOVAL_FAILED": {
            return state;
        }
        case "CROP_REMOVAL_SUCCESS": {
            let crops = state.crops.filter(crop => {
                return crop.cropId!==action.payload
            });
            return {
                ...state,
                crops
            }
        }
        case "CROP_REMOVAL_FAILED": {
            return state;
        }
        default:
            return state;
    }
}