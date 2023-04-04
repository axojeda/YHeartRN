import { StyleSheet, Text, View, FlatList, Pressable, Image } from 'react-native'
import React from 'react'
import { useEffect, useState } from 'react'
import CustomeButton from '../components/CustomeButton'

const Feed = ({ user, setUser, posts, setPosts }) => {

   console.log('Posts is',posts)

const renderPostItem = ({ item }) => {
    return (
        <View style={styles.root}>
            <Pressable><Text style={styles.username}>{item.user.username}</Text></Pressable>
            <Pressable style={styles.follow}><Text>{item.follow}</Text></Pressable>
            <Image source={{uri: item.post_img}} style={styles.pic}></Image>
            <Text style={styles.characts}>👤{item.name}   🎂{item.age}   📍{item.location}   🗺️{item.ethnicity}</Text>
            <View style={styles.view}>
              <CustomeButton text='View'/>
            </View>
        </View>
    )
    }

  //fetch posts
  useEffect(() => {
    // fetch('http://10.129.3.211:3000/posts')
    // .then((r) => r.json())
    // .then((postsData) => setPosts(postsData))
  }, [])
    

  return (
      <FlatList 
          data={posts} 
          keyExtractor={item => item.id} 
          renderItem={renderPostItem}
      />
  )

}


export default Feed

const styles = StyleSheet.create({
  root: {
    backgroundColor: 'white',
    flex: 1,
    margin: 16,
    height: 270,
    borderRadius: 8,
    elevation: 4,
    shadowColor: '#e4007c',
    shadowOpacity: 0.25,
    textShadowOffset: { width: 0, height: 2},
    shadowRadius: 8,
},
pic: {
    width: '100%',
    maxWidth: 150,
    maxHeight: 150,
    marginLeft: 30
},
follow: {
    position: "absolute",
    marginHorizontal: 360,
    marginTop: 20,
    width: '100%'
},
post: { 
    width: '100%',
    borderColor: '#e4007c',
    borderWidth: 2,
    maxHeight: 270,
},
username: {
    padding: 20,
    color: '#e4007c',
    fontWeight: 'bold',
    fontSize: 16
},
characts: {
    padding: 20
},
view: {
    position: "absolute",
    marginHorizontal: 260,
    width: '20%',
    marginTop: 90,
}
})