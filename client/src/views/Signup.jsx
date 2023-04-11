import { Pressable, StyleSheet, Text, View } from 'react-native'
import React from 'react'
import { useNavigation } from '@react-navigation/native'

const Signup = () => {
  const navigation = useNavigation()
  return (
    <View>
      <Text>Signup</Text>
      <Pressable onPress={() => navigation.navigate('TestScreen')}>
        <Text>Go to Test screen</Text>
      </Pressable>
    </View>
  )
}

export default Signup

const styles = StyleSheet.create({})