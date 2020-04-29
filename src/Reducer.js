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
            return {
                ...state,
                fields: ""
            }
        }
        case "CROPS_RETRIEVAL_SUCCESS": {
            return {
                ...state,
                crops: action.payload
            }
        }
        case "CROPS_RETRIEVAL_FAILED": {
            return {
                ...state,
                crops: ""
            }
        }
        case "CROP_ADD_SUCCESS": {
            return {
                ...state,
                last: "crop_added"
            }
        }
        case "CROP_ADD_FAILED": {
            return {
                ...state,
                last: "crop_not_added"
            }
        }
        case "FIELD_REMOVAL_SUCCESS": {
            return {
                ...state,
                last: "field_deleted"
            }
        }
        case "FIELD_REMOVAL_FAILED": {
            return {
                ...state,
                last: "field_not_deleted"
            }
        }
        case "CROP_REMOVAL_SUCCESS": {
            return {
                ...state,
                last: "crop_deleted"
            }
        }
        case "CROP_REMOVAL_FAILED": {
            return {
                ...state,
                last: "crop_not_deleted"
            }
        }
        default:
            return state;
    }
}