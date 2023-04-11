import { Pressable, StyleSheet, Text, View } from 'react-native'
import React from 'react'
import { useNavigation } from '@react-navigation/native'

const TestScreen = () => {
  const navigation = useNavigation()
  return (
    <View>
      <Text>Test Screen</Text>
      {/* <Pressable onPress={}>
        <Text>Go to Home</Text>
      </Pressable> */}
    </View>
  )
}

export default TestScreen

const styles = StyleSheet.create({})