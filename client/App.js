import { StatusBar } from 'expo-status-bar';
import { StyleSheet, Text, View } from 'react-native';
import Login from './src/views/Login';
import Signup from './src/views/Signup';
import { NavigationContainer } from '@react-navigation/native';
import { createNativeStackNavigator } from '@react-navigation/native-stack';
import { useState, useEffect } from 'react';
import Tabs from './navigation/Tabs';
import { loadUser } from './src/functions';
import Home from './src/views/Home';
import Feed from './src/views/Feed';
import { createBottomTabNavigator } from '@react-navigation/bottom-tabs';
import Reviews from './src/views/Reviews';

const HomeStack = createNativeStackNavigator()
const FeedStack = createNativeStackNavigator()
const Stack = createNativeStackNavigator()

function HomeStackScreen() {
  return(
    <HomeStack.Navigator>
      <HomeStack.Screen name="Home" component={Home} />
    </HomeStack.Navigator>
  )
}

function FeedStackScreen() {
  return(
    <FeedStack.Navigator>
      <FeedStack.Screen name="Feed" component={Feed} />
      <FeedStack.Screen name="Reviews" component={Reviews} />
    </FeedStack.Navigator>
  )
}

const Tab = createBottomTabNavigator()

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
      <Tab.Navigator screenOptions={{ headerShown: false }}>
        <Tab.Screen name="Home" component={HomeStackScreen} />
        <Tab.Screen name="Feed" component={FeedStackScreen} />
      </Tab.Navigator>
    </NavigationContainer>
  )
  
}


