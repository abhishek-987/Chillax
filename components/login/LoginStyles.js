import { StyleSheet } from "react-native-web";


const styles = StyleSheet.create({
  mainPage: {
    // backgroundColor: "#D4FB9F",
    // flex: 20
  },  
  textBox: {
    borderColor: '#000000',
    padding: 12,
    textAlign: 'left',
    fontSize: 15,
    borderWidth: 1,
    borderRadius: 10,
  },
  mainContainer:  {

    flexDirection: "column",
    alignItems: "center",
    marginTop: 160,
    padding : 25,
    backgroundColor: "#F5F6F3"
  },
  loginHeadingText: {
    fontSize: 40,
    marginBottom: 30
  },
  inputTextBoxes: {
    padding: 20,
  },
  usernameTextBox: {
    width: 300,
    padding: 10
  },
  loginButton: {
    backgroundColor: "#B576CB",
    borderRadius: 10,
    padding : 10,
    width: 150,
    alignItems: 'center'
  },
  loginMainText: {
    fontSize: 20,
    color: "#ffffff",
  },
  createAccountView: {
    marginTop: 130
  },
  creatAccountText: {
    fontSize: 18,
    color: "#ffffff",
  },
  createAccountButton: {
    backgroundColor: "#48344F",
    borderRadius: 10,
    padding: 15,
    width: 200,
    alignItems: "center"
  }
});

export default styles;

