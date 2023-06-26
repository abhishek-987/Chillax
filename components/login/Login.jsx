import { StatusBar } from 'expo-status-bar';
import { Alert, Button, TextInput, SafeAreaView, StyleSheet, Text, View, TouchableOpacity } from 'react-native';
import React from 'react';
import callLoginApi from '../../web/LoginWeb';
import callSignUpApi from '../../web/SignupWeb';
import styles from './LoginStyles.js';


// const api = (typeof manifest.packagerOpts === `object`) && manifest.packagerOpts.dev
//   ? manifest.debuggerHost.split(`:`).shift().concat(`:3000`)
//   : `api.example.com`;

const Login = () => {
  const [username, setUsername] = React.useState('Type Any Username');
  const [password, setPassword] = React.useState('Type Any Password');
  const [result, setResult] = React.useState('No Data');

  return (
    <SafeAreaView>
      <View style = {styles.mainPage}>
        <StatusBar style="auto" />
        <View style={styles.mainContainer}>
          <Text style={styles.loginHeadingText}>Sign in to Chillax</Text>
          <View style={styles.inputTextBoxes}>
            <View style={styles.usernameTextBox}>
              <TextInput
                style={styles.textBox}
                placeholder='username, phone or email'
                onChangeText={setUsername}
              />
            </View>
            <View style={styles.usernameTextBox}>
              <TextInput
                style={styles.textBox}
                placeholder="password"
                secureTextEntry={true}
                onChangeText={setPassword}
              />
            </View>
          </View>
          <TouchableOpacity
            onPress={() => {
              callLoginApi(username, password)
            }}
            style={styles.loginButton}
          >
            <Text style={styles.loginMainText}>Sign in</Text>

          </TouchableOpacity>
          <View style={styles.createAccountView}>
            <TouchableOpacity
              onPress={() => {
                callSignUpApi(username, password)
              }}
              style = {styles.createAccountButton}
            >
              <Text style={styles.creatAccountText}>Create New Account</Text>
            </TouchableOpacity>

          </View>



        </View>
      </View>
    </SafeAreaView>
  );

}

// const styless = StyleSheet.create({
//   container: {
//     backgroundColor: 'red',
//   },
// });


export default Login;
