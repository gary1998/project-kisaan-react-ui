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
            console.error(err);
        })
    }
}