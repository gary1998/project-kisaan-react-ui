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
        default:
            return state;
    }
}