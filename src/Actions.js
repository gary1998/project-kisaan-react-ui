import * as actionTypes from './constants';

// const serverURL = "https://project-kisaan-graphql-server.herokuapp.com/graphql";
// const agroAPIURL = "https://api.agromonitoring.com/agro/1.0";

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

// const catchError = (err) => {
//     console.log('error occurred while retrieving field data from agro', err);
//     return {
//         type: "FIELD_DETAILS_RETRIEVAL_FAILED"
//     };
// }

// const getWeatherDataFromAgro = (fieldResId) => {
//     let id = idFromResId(fieldResId);
//     return new Promise((resolve, reject) => {
//         fetch(`${agroAPIURL}/weather?polyid=${id}&appid=83e9d92cb19c29c0045da2e0282321f5&units=metric`, {
//             method: 'GET',
//             headers: {
//                 'Content-Type': 'application/json'
//             }
//         }).then(async data => {
//             if (data.ok) {
//                 return data.json();
//             } else {
//                 console.log('error while retreiving weather data from agro', data.statusText);
//                 reject(data.statusText);
//             }
//         }).then(body => {
//             resolve(body);
//         });
//     })
// }

// const getForecastWeatherDataFromAgro = (fieldResId) => {
//     let id = idFromResId(fieldResId);
//     return new Promise((resolve, reject) => {
//         fetch(`${agroAPIURL}/weather/forecast?polyid=${id}&appid=83e9d92cb19c29c0045da2e0282321f5&units=metric`, {
//             method: 'GET',
//             headers: {
//                 'Content-Type': 'application/json'
//             }
//         }).then(async data => {
//             if (data.ok) {
//                 return data.json();
//             } else {
//                 console.log('error while retreiving forecast weather data from agro', data.statusText);
//                 reject(data.statusText);
//             }
//         }).then(body => {
//             resolve(body);
//         });
//     });
// }

// const getSoilDataFromAgro = (fieldResId) => {
//     let id = idFromResId(fieldResId);
//     return new Promise((resolve, reject) => {
//         fetch(`${agroAPIURL}/soil?polyid=${id}&appid=83e9d92cb19c29c0045da2e0282321f5&units=metric`, {
//             method: 'GET',
//             headers: {
//                 'Content-Type': 'application/json'
//             }
//         }).then(async data => {
//             if (data.ok) {
//                 return data.json();
//             } else {
//                 console.log('error while retreiving soil data from agro', data.statusText);
//                 reject(data.statusText);
//             }
//         }).then(body => {
//             resolve(body);
//         });
//     });
// }

// const getUVIDataFromAgro = (fieldResId) => {
//     let id = idFromResId(fieldResId);
//     return new Promise((resolve, reject) => {
//         fetch(`${agroAPIURL}/uvi?polyid=${id}&appid=83e9d92cb19c29c0045da2e0282321f5&units=metric`, {
//             method: 'GET',
//             headers: {
//                 'Content-Type': 'application/json'
//             }
//         }).then(async data => {
//             if (data.ok) {
//                 return data.json();
//             } else {
//                 console.log('error while retreiving uvi data from agro', data.statusText);
//                 reject(data.statusText);
//             }
//         }).then(body => {
//             resolve(body);
//         });
//     });
// }

// const getSatelliteImageryFromAgro = (fieldResId) => {
//     let id = idFromResId(fieldResId);
//     return new Promise((resolve, reject) => {
//         fetch(`${agroAPIURL}/image/search?start=0&end=1&polyid=${id}&appid=83e9d92cb19c29c0045da2e0282321f5&units=metric`, {
//             method: 'GET',
//             headers: {
//                 'Content-Type': 'application/json'
//             }
//         }).then(async data => {
//             if (data.ok) {
//                 return data.json();
//             } else {
//                 console.log('error while retreiving satellite imagery from agro', data.statusText);
//                 reject(data.statusText);
//             }
//         }).then(body => {
//             let response = { body };
//             Promise.all([
//                 getNDVIStatsFromAgro(body[body.length - 1].stats.ndvi).then(ndviStats => { response.ndviStats = ndviStats }).catch(catchError),
//                 getEVIStatsFromAgro(body[body.length - 1].stats.evi2).then(eviStats => { response.eviStats = eviStats }).catch(catchError)
//             ]).then(() => {
//                 resolve(response);
//             }).catch(catchError);
//         });
//     });
// }

// const getNDVIStatsFromAgro = (url) => {
//     return new Promise((resolve, reject) => {
//         fetch(`${url.replace("http://", "https://")}`, {
//             method: 'GET',
//             headers: {
//                 'Content-Type': 'application/json'
//             }
//         }).then(async data => {
//             if (data.ok) {
//                 return data.json();
//             } else {
//                 console.log('error while retreiving ndvi stats from agro', data.statusText);
//                 reject(data.statusText);
//             }
//         }).then(body => {
//             resolve(body);
//         });
//     });
// }

// const getEVIStatsFromAgro = (url) => {
//     return new Promise((resolve, reject) => {
//         fetch(`${url.replace("http://", "https://")}`, {
//             method: 'GET',
//             headers: {
//                 'Content-Type': 'application/json'
//             }
//         }).then(async data => {
//             if (data.ok) {
//                 return data.json();
//             } else {
//                 console.log('error while retreiving evi stats from agro', data.statusText);
//                 reject(data.statusText);
//             }
//         }).then(body => {
//             resolve(body);
//         });
//     });
// }

// const addFieldToAgro = (fieldData) => {
//     return new Promise((resolve, reject) => {
//         fetch(`${agroAPIURL}/polygons?appid=83e9d92cb19c29c0045da2e0282321f5`, {
//             method: 'POST',
//             headers: {
//                 'Content-Type': 'application/json'
//             },
//             body: JSON.stringify(fieldData)
//         }).then(async data => {
//             if (data.ok) {
//                 return data.json()
//             } else {
//                 console.log('error while adding field to agro', data.statusText);
//                 reject(data.statusText);
//             }
//         }).then(body => {
//             resolve(body);
//         })
//     })
// }

// const deleteFieldFromAgro = (fieldId) => {
//     return new Promise((resolve, reject) => {
//         fetch(`${agroAPIURL}/polygons/${fieldId}?appid=83e9d92cb19c29c0045da2e0282321f5`, {
//             method: 'DELETE'
//         }).then(data => {
//             if (data.ok) {
//                 resolve()
//             } else {
//                 console.log('error while deleting field from agro', data.statusText);
//                 reject(data.statusText);
//             }
//         })
//     })
// }

// const idFromResId = (resId) => {
//     let seperator = resId.lastIndexOf(":");
//     let id = resId.substring(seperator + 1);
//     return id;
// }