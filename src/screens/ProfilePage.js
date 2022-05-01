import React from 'react'
import { View,StyleSheet } from 'react-native'
import ProfileHeaderComponent from '../components/profile_page/ProfileHeaderComponent';

const ProfilePage = () => {

    const imagePath = '../../assets/profile_page'

    return(
        <View style={styles.container}>
            <ProfileHeaderComponent />
        </View>
    )
}

const styles = StyleSheet.create({
    container:{
        backgroundColor: '#fff',
    },
})

export default ProfilePage;