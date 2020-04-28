export const reducer = (state, action) => {
    switch(action.type) {
        case "LOGIN_FAILED": {
            alert('No such user found. Check your email and password again.');
            break;
        }
        case "LOGIN_SUCCESS": {
            return Object.assign(state, {
                user: action.payload
            });
        }
        default:
            return state;
    }
}