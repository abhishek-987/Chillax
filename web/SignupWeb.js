import { Alert } from "react-native";
import '../global'

const callSignUpApi = async (username, password) => {
    try {
        console.log("Loading signup")
        const hashedPassword = bcrypt.hashSync(password, '$2a$10$CwTycUXWue0Thq9StjUM0u')
        const response = await fetch(apiHost+'/insertUser',
            {
                method: 'POST',
                headers: {
                    Accept: 'application/json',
                    'Content-Type': 'application/json',
                },
                body: JSON.stringify({
                    username: username,
                    password: hashedPassword,
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