import * as actionTypes from './constants';

const reducer = (state, action) => {
    switch(action.type){

        // Request Actions
        case actionTypes.LOGIN_REQUEST: {
            return {
                ...state,
                satelliteBusy: false,
                busy: true
            }
        }

        case actionTypes.LOGOUT_REQUEST: {
            return {
                ...state,
                satelliteBusy: false,
                busy: true
            }
        }

        case actionTypes.GEOLOCATION_RETRIEVAL_REQUEST: {
            return {
                ...state,
                satelliteBusy: false,
                busy: true
            }
        }

        case actionTypes.FIELDS_RETRIEVAL_REQUEST: {
            return {
                ...state,
                satelliteBusy: false,
                busy: true
            }
        }

        case actionTypes.CROPS_RETRIEVAL_REQUEST: {
            return {
                ...state,
                satelliteBusy: false,
                busy: true
            }
        }

        case actionTypes.ADD_FIELD_REQUEST: {
            return {
                ...state,
                satelliteBusy: false,
                busy: true
            }
        }

        case actionTypes.ADD_CROP_REQUEST: {
            return {
                ...state,
                satelliteBusy: false,
                busy: true
            }
        }

        case actionTypes.DELETE_FIELD_REQUEST: {
            return {
                ...state,
                satelliteBusy: false,
                busy: true
            }
        }

        case actionTypes.DELETE_CROP_REQUEST: {
            return {
                ...state,
                satelliteBusy: false,
                busy: true
            }
        }

        case actionTypes.SATELLITE_INSIGHTS_RETRIEVAL_REQUEST: {
            return {
                ...state,
                busy: true,
                agriBotBusy: false,
                satelliteBusy: true
            }
        }

        case actionTypes.AGRIBOT_INSIGHTS_RETRIEVAL_REQUEST: {
            return {
                ...state,
                busy: true,
                satelliteBusy: false,
                agriBotBusy: true
            }
        }

        // Failure Actions
        case actionTypes.LOGIN_FAILURE: {
            console.log('success:', action.message);
            return {
                ...state,
                busy: false,
                satelliteBusy: false,
                user: undefined
            }
        }

        case actionTypes.LOGOUT_FAILURE: {
            console.log('success:', action.message);
            return {
                ...state,
                busy: false,
                satelliteBusy: false,
                user: undefined
            }
        }

        case actionTypes.GEOLOCATION_RETRIEVAL_FAILURE: {
            console.log('success:', action.message);
            return {
                ...state,
                busy: false,
                satelliteBusy: false,
                geolocation: undefined
            }
        }
        
        case actionTypes.FIELDS_RETRIEVAL_FAILURE: {
            console.log('success:', action.message);
            return {
                ...state,
                busy: false,
                fields: undefined
            }
        }
        
        case actionTypes.CROPS_RETRIEVAL_FAILURE: {
            console.log('success:', action.message);
            return {
                ...state,
                busy: false,
                satelliteBusy: false,
                crops: undefined
            }
        }
        
        case actionTypes.ADD_FIELD_FAILURE: {
            console.log('success:', action.message);
            return {
                ...state,
                busy: false,
                satelliteBusy: false
            }
        }

        case actionTypes.ADD_CROP_FAILURE: {
            console.log('success:', action.message);
            return {
                ...state,
                busy: false,
                satelliteBusy: false
            }
        }

        case actionTypes.DELETE_FIELD_FAILURE: {
            console.log('success:', action.message);
            return {
                ...state,
                busy: false,
                satelliteBusy: false
            }
        }

        case actionTypes.DELETE_CROP_FAILURE: {
            console.log('success:', action.message);
            return {
                ...state,
                busy: false,
                satelliteBusy: false
            }
        }

        case actionTypes.SATELLITE_INSIGHTS_RETRIEVAL_FAILURE: {
            console.log('success:', action.message);
            return {
                ...state,
                busy: false,
                satelliteBusy: false,
                agriBotBusy: false,
                satelliteInsights: undefined
            }
        }

        case actionTypes.AGRIBOT_INSIGHTS_RETRIEVAL_FAILURE: {
            console.log('success:', action.message);
            return {
                ...state,
                busy: false,
                agriBotBusy: false,
                satelliteBusy: false,
                agriBotInsights: undefined
            }
        }

        // Success Actions
        case actionTypes.LOGIN_SUCCESS: {
            console.log('success:', action.message);
            return {
                ...state,
                busy: false,
                satelliteBusy: false,
                user: action.user
            }
        }

        case actionTypes.LOGOUT_SUCCESS: {
            console.log('success:', action.message);
            return {
                ...state,
                busy: false,
                satelliteBusy: false,
                user: undefined
            }
        }

        case actionTypes.GEOLOCATION_RETRIEVAL_SUCCESS: {
            console.log('success:', action.message);
            return {
                ...state,
                busy: false,
                satelliteBusy: false,
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
                satelliteBusy: false,
                crops: action.crops
            }
        }
        
        case actionTypes.ADD_FIELD_SUCCESS: {
            console.log('success:', action.message);
            let fields = state.fields.concat(action.newField);
            return {
                ...state,
                busy: false,
                satelliteBusy: false,
                fields
            }
        }

        case actionTypes.ADD_CROP_SUCCESS: {
            console.log('success:', action.message);
            let crops = state.crops.concat(action.newCrop);
            return {
                ...state,
                busy: false,
                satelliteBusy: false,
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
                satelliteBusy: false,
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
                satelliteBusy: false,
                crops
            }
        }

        case actionTypes.SATELLITE_INSIGHTS_RETRIEVAL_SUCCESS: {
            console.log('success:', action.message);
            return {
                ...state,
                busy: false,
                satelliteBusy: false,
                agriBotBusy: false,
                satelliteInsights: action.satelliteInsights
            }
        }

        case actionTypes.AGRIBOT_INSIGHTS_RETRIEVAL_SUCCESS: {
            console.log('success:', action.message);
            return {
                ...state,
                busy: false,
                agriBotBusy: false,
                satelliteBusy: false,
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
