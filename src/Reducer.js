import * as actionTypes from './constants';

const reducer = (state, action) => {
    switch(action.type){

        // Request Actions
        case actionTypes.LOGIN_REQUEST: {
            return {
                ...state,
                busy: true
            }
        }

        case actionTypes.LOGOUT_REQUEST: {
            return {
                ...state,
                busy: true
            }
        }

        case actionTypes.GEOLOCATION_RETRIEVAL_REQUEST: {
            return {
                ...state,
                busy: true
            }
        }

        case actionTypes.FIELDS_RETRIEVAL_REQUEST: {
            return {
                ...state,
                busy: true
            }
        }

        case actionTypes.CROPS_RETRIEVAL_REQUEST: {
            return {
                ...state,
                busy: true
            }
        }

        case actionTypes.ADD_FIELD_REQUEST: {
            return {
                ...state,
                busy: true
            }
        }

        case actionTypes.ADD_CROP_REQUEST: {
            return {
                ...state,
                busy: true
            }
        }

        case actionTypes.DELETE_FIELD_REQUEST: {
            return {
                ...state,
                busy: true
            }
        }

        case actionTypes.DELETE_CROP_REQUEST: {
            return {
                ...state,
                busy: true
            }
        }

        case actionTypes.SATELLITE_INSIGHTS_RETRIEVAL_REQUEST: {
            return {
                ...state,
                busy: true
            }
        }

        case actionTypes.AGRIBOT_INSIGHTS_RETRIEVAL_REQUEST: {
            return {
                ...state,
                busy: true
            }
        }

        // Failure Actions
        case (actionTypes.LOGIN_FAILURE || actionTypes.LOGOUT_FAILURE || actionTypes.GEOLOCATION_RETRIEVAL_FAILURE || actionTypes.FIELDS_RETRIEVAL_FAILURE || actionTypes.CROPS_RETRIEVAL_FAILURE || actionTypes.ADD_FIELD_FAILURE || actionTypes.DELETE_FIELD_FAILURE || actionTypes.ADD_CROP_FAILURE || actionTypes.DELETE_CROP_FAILURE || actionTypes.SATELLITE_INSIGHTS_RETRIEVAL_FAILURE || actionTypes.AGRIBOT_INSIGHTS_RETRIEVAL_FAILURE): {
            console.log('error occurred:', action.error);
            return {
                ...state,
                busy: false
            }
        }

        // Success Actions
        case actionTypes.LOGIN_SUCCESS: {
            console.log('success:', action.message);
            return {
                ...state,
                busy: false,
                user: action.user
            }
        }

        case actionTypes.LOGOUT_SUCCESS: {
            console.log('success:', action.message);
            return {
                ...state,
                busy: false,
                user: undefined
            }
        }

        case actionTypes.GEOLOCATION_RETRIEVAL_SUCCESS: {
            console.log('success:', action.message);
            return {
                ...state,
                busy: false,
                geolocation: action.geolocation
            }
        }
        
        case actionTypes.FIELDS_RETRIEVAL_SUCCESS: {
            console.log('success:', action.message);
            return {
                ...state,
                busy: false,
                fields: action.fields
            }
        }
        
        case actionTypes.CROPS_RETRIEVAL_SUCCESS: {
            console.log('success:', action.message);
            return {
                ...state,
                busy: false,
                crops: action.crops
            }
        }
        
        case actionTypes.ADD_FIELD_SUCCESS: {
            console.log('success:', action.message);
            let fields = state.fields.concat(action.newField);
            return {
                ...state,
                busy: false,
                fields
            }
        }

        case actionTypes.ADD_CROP_SUCCESS: {
            console.log('success:', action.message);
            let crops = state.crops.concat(action.newCrop);
            return {
                ...state,
                busy: false,
                crops
            }
        }

        case actionTypes.DELETE_FIELD_SUCCESS: {
            console.log('success:', action.message);
            let fields = state.fields.filter(field => {
                return field.fieldResId!==action.removedField
            });
            return {
                ...state,
                busy: false,
                fields
            }
        }

        case actionTypes.DELETE_CROP_SUCCESS: {
            console.log('success:', action.message);
            let crops = state.crops.filter(crop => {
                return crop.cropId!==action.removedCrop
            });
            return {
                ...state,
                busy: false,
                crops
            }
        }

        case actionTypes.SATELLITE_INSIGHTS_RETRIEVAL_SUCCESS: {
            console.log('success:', action.message);
            return {
                ...state,
                busy: false,
                satelliteInsights: action.satelliteInsights
            }
        }

        case actionTypes.AGRIBOT_INSIGHTS_RETRIEVAL_SUCCESS: {
            console.log('success:', action.message);
            return {
                ...state,
                busy: false,
                agriBotInsights: action.agriBotInsights
            }
        }

        default: {
            console.log('invalid action type')
            return {
                ...state
            }
        }
    }

}

export default reducer;
