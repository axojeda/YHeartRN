import AsyncStorage from "@react-native-async-storage/async-storage";

export const loadUser = async () => {
    let token = await AsyncStorage.getItem('token')
    return token || null
}

export const getAllPosts = async () => {
    let req = await fetch('http://10.129.3.211:3000/posts')
    if (req.ok) {
        let res = await req.json()
        return res
    } else {
        console.log('THE REQUEST FOR POSTS FAILED')
        return []
    }
}

export const getAllReviews = async () => {
    let req = await fetch('http://10.129.3.211:3000/reviews')
        if (req.ok) {
            let res = await req.json()
            return res
        } else {
            console.log('THE REQUEST FOR REVIEWS FAILED')
            return []
        }
}