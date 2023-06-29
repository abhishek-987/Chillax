import { StatusBar } from 'expo-status-bar';
import { StyleSheet, Text, View } from 'react-native';
import Login from './components/screen/login/Login';
import IosFonts from './assets/fonts/AppleFontsDisplay';
import Test from './components/test/Test';
import {NavigationContainer} from '@react-navigation/native';
import * as React from 'react';
import {createNativeStackNavigator} from '@react-navigation/native-stack';
import Signup from './components/screen/signup/Signup';

export default function App() {

  const Stack = createNativeStackNavigator();

  return (

    <NavigationContainer>


      <Stack.Navigator>
        <Stack.Screen
          name="Login"
          component={Login}
          options={{title: 'Login'}}
        />
        <Stack.Screen
          name="Signup"
          component={Signup}
          options={{title: 'Signup'}}
        />
      </Stack.Navigator>

      
    </NavigationContainer>

    // <Login />
  );
}

