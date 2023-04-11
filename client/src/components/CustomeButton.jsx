import { StyleSheet, Text, View, Pressable } from 'react-native'
import React from 'react'

const CustomeButton = ({ onPress, text, type = "PRIMARY" }) => {
  return (
    <Pressable onPress={onPress} style={[styles.container, styles[`container_${type}`]]}>
    <Text style={[styles.text, styles[`text_${type}`]]}>{text}</Text>
  </Pressable>
  )
}

const styles = StyleSheet.create({
  container: {
      backgroundColor: '#e4007c',
      width: '100%',
      padding: 15,
      marginVertical: 15,
      alignItems: 'center',
      borderRadius: 5,
    
  },

  container_PRIMARY: {
      backgroundColor: '#e4007c',
  },

  text: {
      fontWeight: 'bold',
      color: 'white'
  }
})

export default CustomeButton

