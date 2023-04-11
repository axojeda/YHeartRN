import { StyleSheet, Text, View, ScrollView } from 'react-native'
import React from 'react'
import { useState } from 'react'
import CustomeInput from '../components/CustomeInput'
import CustomeButton from '../components/CustomeButton'
import BouncyCheckbox from "react-native-bouncy-checkbox";

const NewPost = ({ user, posts, setPosts}) => {


  return (
    <ScrollView style={styles.root}>
      <Text style={styles.formtitle}>Create a new post</Text>
      <View style={styles.input}>
         <CustomeInput 
         name='name'
         placeholder='Name'
         />
      </View>
      <View style={styles.input}>
         <CustomeInput 
         name='age'
         placeholder='Age'
         />
      </View>
      <View style={styles.input}>
         <CustomeInput 
         name='location'
         placeholder='Location'
         />
      </View>
      <View style={styles.input}>
         <CustomeInput 
         name='ethnicity'
         placeholder='Ethnicity'
         />
      </View>
      <View style={styles.input}>
         <CustomeInput 
         name='post_img'
         placeholder='Image'/>
   </View>
     <View style={styles.checkboxcontainer}>
       <View style={styles.checkboxview}>
          <Text style={styles.label}>🚩</Text>
          <BouncyCheckbox style={styles.checkbox} fillColor='#e4007c'/>
       </View>
        <View style={styles.checkboxview}>
          <Text style={styles.label}>🍵</Text>
          <BouncyCheckbox style={styles.checkbox} fillColor='#e4007c'/>
        </View>
        <View style={styles.checkboxview}>
          <Text style={styles.label}>❓</Text>
          <BouncyCheckbox style={styles.checkbox} fillColor='#e4007c'/>
        </View>
        <View style={styles.checkboxview}>
         <Text style={styles.label}>⚠️</Text>
         <BouncyCheckbox style={styles.checkbox} fillColor='#e4007c'/>
        </View>
        <View style={styles.checkboxview}>
          <Text style={styles.label}>💚</Text>
          <BouncyCheckbox style={styles.checkbox} fillColor='#e4007c'/>
        </View>
        <View style={styles.checkboxview}>
         <Text style={styles.label}>✅</Text>
         <BouncyCheckbox style={styles.checkbox} fillColor='#e4007c'
         />
        </View>
      <View>
    </View>
  </View>
  <View style={styles.btnview}>
  <CustomeButton text='Send' />
  </View>
</ScrollView>
  )
}

export default NewPost

const styles = StyleSheet.create({
  root: {
    backgroundColor: 'white'
  },
  formtitle: {
    color: '#e4007c',
    fontWeight: 'bold',
    textAlign: 'center',
    fontSize: 30,
    padding: 20
  },
  input: {
    paddingLeft: 20,
    paddingRight: 20, 
    padding: 10
  },
  label: {
    fontSize: 40,
    paddingBottom: 10
  },
  checkboxview: {
  flexDirection: 'column',
  padding: 10
  },
  checkboxcontainer: {
    flexDirection: 'row',
    justifyContent: 'center'
  }, 
  checkbox: {
    marginLeft: 10,
  },
  btnview: {
    paddingLeft: 30,
    paddingRight: 30,
    shadowColor: 'black',
    shadowOpacity: 0.6,
  }
})