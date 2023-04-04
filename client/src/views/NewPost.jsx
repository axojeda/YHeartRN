import { StyleSheet, Text, View,  } from 'react-native'
import React from 'react'
import { useState } from 'react'
import CustomeInput from '../components/CustomeInput'
import CustomeButton from '../components/CustomeButton'
import BouncyCheckbox from "react-native-bouncy-checkbox";

const NewPost = ({ user, posts, setPosts}) => {

  // const [formData, setFormData] = useState({
  //   user_id: user.id
  // })
  
  // console.log(user)

  // const handleSubmit = (e) => {
  //   e.preventDefault();
  //   fetch("http://localhost:3000/posts", {
  //     method: "POST",
  //     headers: {
  //       "Content-Type": "application/json",
  //     },
  //     body: JSON.stringify(formData),
  //   })
  //     .then((res) => res.json())
  //     .then(newPost => {
  //       alert("New Post added!")
  //       setPosts(posts => [newPost, ...posts])
  //     });
  // }

  // function handleChange(event){
  //   setFormData(formData => {
  //     return {...formData, [event.target.name]: event.target.value}
  //   })
  // }

  return (
    <View style={styles.root}>
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
     <View>
       <View style={styles.checkboxview}>
          <Text style={styles.label}>🚩</Text>
          <BouncyCheckbox style={styles.checkbox}/>
       </View>
        <View style={styles.checkboxview}>
          <Text style={styles.label}>🍵</Text>
          <BouncyCheckbox style={styles.checkbox}/>
        </View>
        <View style={styles.checkboxview}>
          <Text style={styles.label}>❓</Text>
          <BouncyCheckbox style={styles.checkbox}/>
        </View>
        <View style={styles.checkboxview}>
         <Text style={styles.label}>⚠️</Text>
         <BouncyCheckbox style={styles.checkbox}/>
        </View>
        <View style={styles.checkboxview}>
          <Text style={styles.label}>💚</Text>
          <BouncyCheckbox style={styles.checkbox}/>
        </View>
        <View style={styles.checkboxview}>
         <Text style={styles.label}>✅</Text>
         <BouncyCheckbox style={styles.checkbox}/>
        </View>
      <View>
    </View>
  </View>
</View>
  )
}

export default NewPost

const styles = StyleSheet.create({
  root: {
    backgroundColor: 'white'
  },
  formtitle: {
    color: '#e4007c',
    fontWeight: 'bold'
  }
})