import { StyleSheet, Text, View, ImageBackground, Image, Pressable } from 'react-native'
import React from 'react'
import avatar from '../../assets/avatar.jpg'
import CustomeButton from '../components/CustomeButton'

const MyProfile = () => {

  const bkimage = {uri: 'https://4my3boyz.com/content/images/thumbs/0020475_la-vida-loca-sacred-heart-fiesta-mexican-art-pink-hearts-cotton-fabric_500.jpeg'}

  return (
    <ImageBackground 
      source={bkimage} 
      style={styles.root} 
      resizeMode='cover'
      blurRadius={3}>
      <View>
        <Pressable ><Text style={styles.settings}>⚙️</Text></Pressable>
        <Image source={avatar} style={styles.avatar}></Image>
        <Text style={styles.username}>Mariainny</Text>
        <Text style={styles.location}>Manhattan</Text>
      </View>
      <View style={styles.myprofilebtn}>
        <CustomeButton text='My messages'/>
      </View>
      <View style={styles.myprofilebtn}>
        <CustomeButton text='My posts'/>
      </View>
      <View style={styles.myprofilebtn}>
        <CustomeButton text='Log out' />
      </View>
    </ImageBackground>
  )
}

export default MyProfile

const styles = StyleSheet.create({
  settings: {
    padding: 20,
    fontSize: 50,
    width: 100,
    height: 100,
    shadowColor: '#e4007c',
    shadowOpacity: 1,
  },
  avatar: {
    width: 100,
    height: 100, 
    alignSelf: 'center',
    borderRadius: 100,
    margin: 10,
    marginBottom: 25
  },
  username: {
    textAlign: 'center',
    margin: 30,
    fontSize: 50,
    color: 'white',
    backgroundColor: '#e4007c',
    fontWeight: 'bold', 
  },
  location: {
    textAlign: 'center',
    marginLeft: 30,
    marginRight: 30,
    fontSize: 30,
    color: 'white',
    backgroundColor: '#e4007c',
    marginBottom: 30
  },
  myprofilebtn: {
    paddingLeft: 70,
    marginRight: 70,
    marginTop: 30,
    shadowColor: 'black',
    shadowOpacity: 0.6,
  }
})