import { StatusBar } from 'expo-status-bar';
import React from 'react';
import {NavigationContainer} from '@react-navigation/native'
import {createStackNavigator} from '@react-navigation/stack'
import LandingScreen  from './components/auth/Landing'
import * as firebase from 'firebase'

const firebaseConfig = {
  apiKey: "AIzaSyAZMurwB5qJA-tHdsYk1yci4spgPKIVBns",
  authDomain: "instagram-dev-a4d6d.firebaseapp.com",
  projectId: "instagram-dev-a4d6d",
  storageBucket: "instagram-dev-a4d6d.appspot.com",
  messagingSenderId: "950766588421",
  appId: "1:950766588421:web:90feb3ffe5c3058244c26c",
  measurementId: "G-P2NDKZXQ08"
};

if(firebase.apps.length === 0) {
  firebase.initializeApp(firebaseConfig)
}


const Stack = createStackNavigator();
export default function App() {
  return (
  <NavigationContainer>
    <Stack.Navigator initialRouteName = 'Landing'>
      <Stack.Screen name='Landing' component={LandingScreen} options={{headerShown: false}} />
    </Stack.Navigator>
  </NavigationContainer>
  );
}
