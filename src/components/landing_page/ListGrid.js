import React from 'react'
import {View,Text,StyleSheet,Image,ActivityIndicator} from 'react-native'
import { useFonts,BarlowCondensed_300Light } from '@expo-google-fonts/barlow-condensed';
import { Barlow_200ExtraLight } from '@expo-google-fonts/barlow'

const ListGrid = ({item}) => {
    
    const [fontsLoaded] = useFonts({
        BarlowCondensed_300Light,
        Barlow_200ExtraLight
    })

    // if(!fontsLoaded){
    //     return 
    // }

    return(
        <View style={styles.container}>
            <Image style={styles.imageStyle} source={item.iconPath}/>

            <View style={styles.titleContainer}> 
                {!fontsLoaded ? <ActivityIndicator size='small' /> : <Text style={[styles.titleStyle,{fontFamily:'BarlowCondensed_300Light'}]}>{item.title}</Text>}
            </View>

            <View style={styles.contentContainer}>
                <Text style={[styles.contentStyle,{fontFamily:'Barlow_200ExtraLight'}]}>{item.content}</Text>
            </View>

        </View>
    )
}

const styles = StyleSheet.create({
    container:{

    },
    imageStyle:{
        marginLeft:40,
        marginBottom:29.8
    },
    titleContainer:{
        width:200,
        marginLeft:37
    },
    titleStyle:{
        fontSize:28,
        lineHeight:32,
        letterSpacing:0,
    },
    contentContainer:{
        marginLeft:37,
        marginTop:27.2,
        marginRight:50,
        height:220,
    },  
    contentStyle:{
        fontSize:16,
        lineHeight:24,
    }
})

export default ListGrid;