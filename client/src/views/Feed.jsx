import { StyleSheet, Text, View, FlatList, Pressable, Image, ImageBackground } from 'react-native'
import React from 'react'
import { useEffect, useState } from 'react'
import CustomeButton from '../components/CustomeButton'
import { getAllPosts, getAllReviews } from '../functions'
import { useNavigation } from '@react-navigation/native'
import CustomeInput from '../components/CustomeInput'
import BouncyCheckbox from "react-native-bouncy-checkbox"
import Reviews from './Reviews'


const Feed = ({ user, setUser }) => {
    const [posts, setPosts] = useState([])
    const navigation = useNavigation()
  
    const bkimage = {uri: 'https://4my3boyz.com/content/images/thumbs/0020475_la-vida-loca-sacred-heart-fiesta-mexican-art-pink-hearts-cotton-fabric_500.jpeg'}
    
const renderPostItem = ({ item }) => {
    return (
        
        <View style={styles.post}>
            <BouncyCheckbox style={styles.follow} fillColor='red'/>
            <Pressable><Text style={styles.username}>{item.user.username}</Text></Pressable>
            <Image source={{uri: item.post_img}} style={styles.pic}></Image>
            <Text style={styles.characts}>👤{item.name}   🎂{item.age}   📍{item.location}   🗺️{item.ethnicity}</Text>
            <View style={styles.review}>
              <CustomeButton text='Reviews' onPress={() => navigation.navigate('Reviews')}/>
            </View>
            <Text style={styles.icons}>{item.red_flag}{item.tea}{item.alert}{item.request}{item.green_flag}{item.vouched}</Text>
        </View>
    )
    }

  //fetch posts
  useEffect(() => {
    const load = async () => {
      let posts = await getAllPosts()
      if (posts.length > 0) {
        setPosts(posts)
      }
    }
    load()
  }, [])
    
  if (posts.length === 0) return null;
 
  return (
    <ImageBackground 
      source={bkimage} 
      style={styles.root} 
      resizeMode= 'cover'
      blurRadius={3}>
        
        <View style={styles.search}>
            <CustomeInput 
                name='search'
                placeholder='Search...'
            />
        </View>
            <FlatList 
              data={posts} 
              keyExtractor={item => item.id} 
              renderItem={renderPostItem}
            />
    </ImageBackground>
  )

}


export default Feed

const styles = StyleSheet.create({
  root: {
    flex: 1,
    justifyContent: 'center',
    backgroundColor: '#e4007c'
  },
  post: {
    backgroundColor: 'white',
    flex: 1,
    margin: 16,
    height: 350,
    borderRadius: 8,
    elevation: 4,
    shadowColor: '#e4007c',
    shadowOpacity: 0.9,
    textShadowOffset: { width: 0, height: 2},
    shadowRadius: 8,
},
pic: {
    width: '100%',
    maxWidth: 190,
    height: 190,
    marginLeft: 30
},
follow: {
    paddingTop: 15,
    marginLeft: '90%'
},
username: {
    paddingBottom: 20,
    color: '#e4007c',
    fontWeight: 'bold',
    fontSize: 20,
    marginLeft: 60
},
characts: {
    padding: 20, 
    marginTop: 10,
    color: 'purple',
    fontSize: 15
},
review: {
    position: "absolute",
    marginHorizontal: 260,
    width: '25%',
    marginTop: 70,
    shadowColor: 'black',
    shadowOpacity: 0.6,
},
icons: {
    position: 'absolute',
    marginLeft: '65%',
    marginTop: '47%',
    fontSize: 20
},
search: {
    padding: 20,
    shadowColor: '#e4007c',
    shadowOpacity: 0.6,
}
})