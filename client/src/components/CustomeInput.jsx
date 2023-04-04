import { StyleSheet, Text, View, TextInput } from 'react-native'
import React from 'react'

const CustomeInput = ({ value, placeholder, secureTextEntry, onChangeText }) => {
  return (
    <View style= {styles.container}>
    <TextInput 
    value={value}
    onChangeText={onChangeText}
    placeholder={placeholder}
    style={styles.input}
    secureTextEntry={secureTextEntry}
    />
  </View>
  )
}

const styles = StyleSheet.create({
  container: {
      backgroundColor: '#FDE1F3', 
      width: '100%',
      borderColor: '#e4007c',
      borderWidth: 1,
      borderRadius: 5,
      padding: 15,
      marginVertical: 15
    }
})

export default CustomeInput

