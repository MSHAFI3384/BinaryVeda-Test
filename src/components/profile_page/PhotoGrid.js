import React from 'react'
import {View,Text,Image,StyleSheet,Dimensions} from 'react-native'

const window = Dimensions.get('window').width

const PhotoGrid = ({item}) => {

    
    return (
        <View style={styles.container}>
            <Image style={{height:168,width:(window-20)/2,margin:5}} source={item.picPath} resizeMode='stretch' />
        </View>
    );
}

const styles=StyleSheet.create({
    container:{
        backgroundColor:'#fff',
    }
})

export default PhotoGrid;