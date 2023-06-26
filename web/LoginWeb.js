import { Alert } from "react-native";
import '../global'

const callLoginApi = async (username, password) => {
    try {
      console.log("Loading login")
      const response = await fetch(apiHost+'/checking?username=' + username + '&password=' + password, { method: 'GET' });
      const json = await response.text();
      Alert.alert(json)
    } catch (error) {
      console.error(error);
    }
  }

  export default callLoginApi