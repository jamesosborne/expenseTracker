import React, { useState, useEffect } from 'react';
import { StyleSheet, Text, TouchableOpacity, View, Image } from 'react-native';
import { NavigationContainer } from '@react-navigation/native';
import { createBottomTabNavigator } from '@react-navigation/bottom-tabs';
import { createStackNavigator } from '@react-navigation/stack';
import { MaterialIcons } from '@expo/vector-icons';

import firebase from 'firebase';

const firebaseConfig = {
  apiKey: "AIzaSyB622gHpRg-1PKIfmmXwDhI83NFB1rU6Xk",
  authDomain: "bill-budy-2ae10.firebaseapp.com",
  projectId: "bill-budy-2ae10",
  storageBucket: "bill-budy-2ae10.appspot.com",
  messagingSenderId: "70016111705",
  appId: "1:70016111705:web:cbd8ae3a21fcea1a9a8d48",
  measurementId: "G-T3ZBPFN5V4"
};

if (firebase.apps.length === 0){
  firebase.initializeApp(firebaseConfig)
}

import LandingScreen from './Screens/auth/Landing';
import RegisterScreen from './Screens/auth/Register';
import LoginScreen from './Screens/auth/Login';
import AddBillScreen from './Screens/AddBill';
import OverviewScreen from './Screens/Overview';
import ReportScreen from './Screens/Report';

const Stack = createStackNavigator();
const Tabs = createBottomTabNavigator();

export default function App() {

  const [loggedIn, setLoggedIn] = useState(null);
  const [loaded, setLoaded] = useState(null)

  useEffect(() => {
    firebase.auth().onAuthStateChanged((user) => {
      if(!user){
        setLoggedIn(false);
        setLoaded(true);
      }else{
        setLoggedIn(true);
        setLoaded(true);
      }
    })
  }, [])

  if(!loaded) {
    return(
      <View style={{flex: 1, justifyContent: 'center', alignItems: 'center'}}>
        <Text>Loading</Text>
      </View>
    )
  }

  if(!loggedIn) {
    return(
      <NavigationContainer>
        <Stack.Navigator initialRouteName='Landing'>
          <Stack.Screen name='Landing' component={LandingScreen} options={{headerShown: false}}/>
          <Stack.Screen name='Register' component={RegisterScreen} options={{headerShown: false}}/>
          <Stack.Screen name='Login' component={LoginScreen} options={{headerShown: false}}/>
        </Stack.Navigator>
      </NavigationContainer>
    )
  }
  return (
    <NavigationContainer>
      <View style={styles.container}>
        <Tabs.Navigator>
            <Tabs.Screen options={{headerShown: false, tabBarShowLabel: false,tabBarIcon: ({focused}) =>(<MaterialIcons name='auto-awesome-mosaic' color='lightgrey' size={35}/>)}} name='Overview' component={OverviewScreen}/>
            <Tabs.Screen options={{headerShown: false, tabBarShowLabel: false, tabBarIcon: ({focused}) =>(<MaterialIcons name='pie-chart' color='lightgrey' size={35}/>)}} name='Report' component={ReportScreen}/>
            <Tabs.Screen options={{headerShown: false, tabBarShowLabel: false, tabBarIcon: ({focused}) =>(<MaterialIcons name='add-box' color='lightgrey' size={35}/>)}} name='Add Bill' component={AddBillScreen}/>
        </Tabs.Navigator>
      </View>
    </NavigationContainer>
  
  );
}




const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: 'blue',
  },
});
