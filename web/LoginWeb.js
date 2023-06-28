import { Alert } from "react-native";
import '../global'
import bcrypt from 'bcryptjs'

const callLoginApi = async (username, password) => {
    try {
        console.log("Loading login")
        const hashedPassword = bcrypt.hashSync(password, '$2a$10$CwTycUXWue0Thq9StjUM0u')
        console.log(hashedPassword);
        const response = await fetch(apiHost+'/checking?username=' + username + '&password=' + hashedPassword, { method: 'GET' });
        const json = await response.text();
        Alert.alert(json)
    } catch (error) {
      console.error(error);
    }
  }

  export default callLoginApi