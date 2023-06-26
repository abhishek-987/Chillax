import { Alert } from "react-native";
import '../global'

const callSignUpApi = async (username, password) => {
    try {
        console.log("Loading signup")
        const response = await fetch(apiHost+'/insertUser',
            {
                method: 'POST',
                headers: {
                    Accept: 'application/json',
                    'Content-Type': 'application/json',
                },
                body: JSON.stringify({
                    username: username,
                    password: password,
                }),
            },



        );
        const json = await response.text();
        console.log(json)
    } catch (error) {
        console.error(error);
    }
}

export default callSignUpApi;