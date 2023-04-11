import { StatusBar } from 'expo-status-bar';
import { StyleSheet, Text, View } from 'react-native';
import Login from './src/views/Login';
import Signup from './src/views/Signup';
import { NavigationContainer } from '@react-navigation/native';
import { createNativeStackNavigator } from '@react-navigation/native-stack';

import { useState, useEffect } from 'react';
import Tabs from './navigation/Tabs';
import { loadUser } from './src/functions';
import TestScreen from './src/views/TestScreen';
import Home from './src/views/Home';

const Stack = createNativeStackNavigator()

export default function App() {

  const [ user, setUser ] = useState(null)
  const [ posts, setPosts ] = useState([])

 //console.log(posts)
 //console.log(user)


  //stay logeed in
  useEffect(() => {
    const getLoggedInUser = async () => {
      let req, res // make these names accessible throughout function
      let token = await loadUser()
      if (token) {
        req = await fetch("http://10.129.3.211:3000/me", {
          headers: { Authorization: token }
        })
        if (req.ok) { // if the HTTP status of the request is 200
          res = await req.json()
          setUser(res.user)
        } else {
          // redirect to home screen/login screen
        }
      }
    }

    getLoggedInUser()
  }, [])

  return (
    <NavigationContainer>
    <Stack.Navigator screenOptions={{headerShown: true}}>
      <Stack.Screen name="Login">
        {() => <Login setUser={setUser} user={user} />}
      </Stack.Screen>
      <Stack.Screen name="Signup">
        {() => <Signup setUser={setUser} user={user} />}
      </Stack.Screen>
      <Stack.Screen
        name="TestScreen"
        component={TestScreen}
       />
        <Stack.Screen
        name="Home"
        component={Home}
       />
   </Stack.Navigator>
   </NavigationContainer> 
  )
  
}


