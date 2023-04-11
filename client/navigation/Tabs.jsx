import { View, Text } from 'react-native'
import React from 'react'
import { createBottomTabNavigator } from '@react-navigation/bottom-tabs'
import Home from '../src/views/Home'
import Feed from '../src/views/Feed'
import MyProfile from '../src/views/MyProfile'
import NewPost from '../src/views/NewPost'
import { useState } from 'react'

const Tab = createBottomTabNavigator()

const Tabs = ({ handleLogout, setUser, user, posts, setPosts }) => {

    // console.warn(posts)
    return (
        <Tab.Navigator>
            <Tab.Screen 
                name='Home' 
                component={Home}
            />
            <Tab.Screen name='Feed' component={Feed} />
            <Tab.Screen name='NewPost' component={NewPost} user={user} setPosts={setPosts}  />
            <Tab.Screen name='MyProfile' component={MyProfile} user={user} setUser={setUser} />
        </Tab.Navigator>
    )
}

export default Tabs






