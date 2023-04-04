import { StyleSheet, Text, View, Image, ScrollView } from 'react-native'
import React from 'react'
import logo from '../../assets/logo.png'

const Home = () => {
  return (
    <ScrollView style={styles.root}>
        <Image source={logo} style={styles.logo}></Image>
      <View>
        
        <Text style={styles.hometitle}>About</Text>
          <View style={styles.textdiv}>
            <Text style={styles.hometext}>SHeart is a community based platform made to help women in their love journey. We are here to protect women
              and empower them. From one woman to another, no matter nationality, religion, 
              location, age...we are all connected. Date safely, love safely.</Text>
          </View>
        <Text style={styles.hometitle}>Rules</Text>
        <Text style={styles.hometext}>- Public display of personal information it`s not allowed (Ex. lastname, work-place, address, etc.)</Text>
        <Text style={styles.hometext}>- Pictures must be from a public surce ( Ex. public IG, dating apps, Google search, etc.), private pictures are not allowed.</Text>
        <Text style={styles.hometext}>- False information will be banned and along with the user who posted it.</Text>
        <Text style={styles.hometext}>- Abuse, disrespect, stalking and other innapropiete behavior will get you banned.</Text>
        <Text style={styles.hometext}>- We are here to protect women not to hate men.</Text>

        <Text style={styles.hometitle}>Icon System</Text>
        <Text style={styles.hometext}>- 🚩 Red Flag: off behavior.</Text>
        <Text style={styles.hometext}>- ⚠️ Alert: Potential risk, dangerous behavior/actions.</Text>
        <Text style={styles.hometext}>- ❓ Information request: I`m seeking information.</Text>
        <Text style={styles.hometext}>- 🍵 I got tea: I have interesting information about this person (Ex. In a rrelationship, married, etc.).</Text>
        <Text style={styles.hometext}>- ✅ Vouched: I know this man and vouche for him.</Text>
        <Text style={styles.hometext}>- 💚Green Flag: great behavior.</Text>
      </View>
    </ScrollView>
  )
}

export default Home

const styles = StyleSheet.create({
  root: {
    backgroundColor: 'white'
  },
  logo: {
    maxWidth: '100%',
    maxHeight: 100
  },
  hometitle: {
    backgroundColor: '#E4007C',
    color: 'white',
    margin: 10,
    fontSize: 30,
    fontWeight: 'bold',
    textAlign: 'center',
  },
  hometext: {
    margin: 10,
    fontSize: 20,
    color: 'purple',
  }
})