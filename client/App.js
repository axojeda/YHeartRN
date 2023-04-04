import { StatusBar } from 'expo-status-bar';
import { StyleSheet, Text, View } from 'react-native';
import Login from './src/views/Login';
import Signup from './src/views/Signup';
import { NavigationContainer } from '@react-navigation/native';
import { createNativeStackNavigator } from '@react-navigation/native-stack';
import { useState, useEffect } from 'react';
import AsyncStorage from "@react-native-async-storage/async-storage";
import Tabs from './navigation/Tabs';

const Stack = createNativeStackNavigator()

export default function App() {

  const [ user, setUser ] = useState(null)
  const [ posts, setPosts ] = useState([])

 //console.log(posts)
 //console.log(user)


  //stay logeed in
  useEffect(() => {
    let token = AsyncStorage.getItem('token')
    if (token) {
      fetch("http://10.129.3.211:3000/me", { headers: { 'Authorization': token }})
      .then(response => {
        if(response.ok){
          response.json().then(userData => {
            setUser(userData.user)
          })
        }
        else{
          console.log(response.status)
        }
      })
    } else {
      console.log("No token found, try logging in!")
    }

  }, [])

  return (
    <NavigationContainer>
    {user ? (
    <Tabs user={user} setUser={setUser} posts={posts} setPosts={setPosts}/>
  ) : (
    <Stack.Navigator screenOptions={{headerShown: true}}>
  <Stack.Screen name="Login">
              {() => <Login setUser={setUser} user={user} />}
            </Stack.Screen>

            <Stack.Screen name="Signup">
              {() => <Signup setUser={setUser} user={user} />}
            </Stack.Screen>
   </Stack.Navigator>
   ) 
   } 
   </NavigationContainer> 
  )
  
}


