import * as actionTypes from './constants';

export const getGeolocation = () => ({
    type: actionTypes.GEOLOCATION_RETRIEVAL_REQUEST
})

export const loginUser = (input) => ({
    type: actionTypes.LOGIN_REQUEST,
    input
})

export const logoutUser = () => ({
    type: actionTypes.LOGOUT_REQUEST
})

export const getFields = (input) => ({
    type: actionTypes.FIELDS_RETRIEVAL_REQUEST,
    input
})

export const getCrops = (input) => ({
    type: actionTypes.CROPS_RETRIEVAL_REQUEST,
    input
})

export const newCrop = (input) => ({
    type: actionTypes.ADD_CROP_REQUEST,
    input
})

export const newField = (input) => ({
    type: actionTypes.ADD_FIELD_REQUEST,
    input
})

export const deleteField = (input) => ({
    type: actionTypes.DELETE_FIELD_REQUEST,
    input
})

export const deleteCrop = (input) => ({
    type: actionTypes.DELETE_CROP_REQUEST,
    input
})

export const getSatelliteInsights = (input) => ({
    type: actionTypes.SATELLITE_INSIGHTS_RETRIEVAL_REQUEST,
    input
})

export const getAgriBotInsights = (input) => ({
    type: actionTypes.AGRIBOT_INSIGHTS_RETRIEVAL_REQUEST,
    input
})
