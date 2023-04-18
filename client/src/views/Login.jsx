import { StyleSheet, Text, View, ScrollView, Image, useWindowDimensions } from 'react-native'
import React from 'react'
import CustomeButton from '../components/CustomeButton'
import CustomeInput from '../components/CustomeInput'
import { useState, useEffect } from 'react'
import logo from '../../assets/logo.png'
import { useNavigation } from '@react-navigation/native'
import AsyncStorage from '@react-native-async-storage/async-storage'

const Login = ({ user, setUser }) => {

  const [formData, setFormData] = useState({email:'', password: ''})

  const handleOnChange = (name, value) => {
    setFormData({...formData, [name]: value})
  }
 

  // //login fetch
  const HandleOnLogin = (e) => {
    e.preventDefault()
    fetch("http://10.129.3.211:3000/login", {
      method: "POST",
      headers: {
        "Content-Type": "application/json"
      },
      body: JSON.stringify({email: 'maria@dev.com', password: '123456'})
    })
    .then(response => {
      if(response.ok){
        response.json().then(userData => {
          console.log(userData)
          // do not use localStorage for this. But in the interest of time ...
          AsyncStorage.setItem('token', userData.token)
          setUser(userData.user)
          navigation.navigate('Home')
        })
      }
      else if(response.status === 401){
        alert("Error: Invalid username or password! Please try again!")
      }
      else{
        alert(`Error: ${response.status} ${response.statusText}`)
      }
    })
  }

  const onSignUpPress = () => {
    //console.warn('Sign up')
    navigation.navigate('Signup')
  }


  const {height} = useWindowDimensions()
  const navigation = useNavigation()
   
  return (
  <ScrollView>
    <View style={styles.root}>
      <Image source={logo} 
      style={[styles.logo, {height: height * 0.3} ]} resizeMode="contain"></Image>
      <View style= {styles.container}>
        <CustomeInput 
        placeholder="E-mail" 
        name='email'
        onChangeText={(value) => handleOnChange('email', value)} 
        />
        <CustomeInput 
        placeholder="Password" 
        name='password'
        onChangeText={(value) => handleOnChange('password', value)}
        secureTextEntry={true}
        />
       </View>
      <CustomeButton text="Log In" onPress={HandleOnLogin}/>

    <Text style={styles.signin} >You dont have an account?</Text>
      <CustomeButton text="Create one" onPress={onSignUpPress} />
      </View>
  </ScrollView>
  )
  }

  const styles = StyleSheet.create({
    root: {
      alignItems: 'center',
      padding: 80,
      backgroundColor: 'white',
    },
    logo: {
      width: '70%',
      maxWidth: 300,
      maxHeight: 200,
      marginBottom: 60
    },
    signin: {
      color: '#e4007c',
      marginTop: 30
    },
    container: {
      borderWidth: 0,
      width: '100%'
    }
  })


export default Login
