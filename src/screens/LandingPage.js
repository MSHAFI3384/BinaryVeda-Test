import React from 'react'
import { ScrollView,SafeAreaView,View,Text,StyleSheet,StatusBar,Image,Dimensions,TouchableOpacity,FlatList } from 'react-native'
import { useFonts,Barlow_200ExtraLight } from '@expo-google-fonts/barlow'
import { BarlowCondensed_200ExtraLight,BarlowCondensed_500Medium,BarlowCondensed_300Light } from '@expo-google-fonts/barlow-condensed';
import AppLoading from 'expo-app-loading';
import { landingPageData } from '../local_data/LandingPageData';
import ListGrid from '../components/landing_page/ListGrid';


const LandingPage = ({navigation}) => {
    // const window = Dimensions.get('window').width

    const [fontsLoaded] = useFonts({
        Barlow_200ExtraLight,
        BarlowCondensed_200ExtraLight,
        Barlow_200ExtraLight,
        BarlowCondensed_300Light,
        BarlowCondensed_500Medium,
    })

    if (!fontsLoaded) {
        return <AppLoading />;
    }

    const flatlistHeader = () => {
        return (
            <View>
                <StatusBar/>
                <Image style={styles.artGallery} source={require('../../assets/landing_page/artGallery.png')} resizeMode='contain' />
                <View style={{flexDirection:'row',flex:1,}}>
                    <Image style={styles.mainImage} source={require('../../assets/landing_page/mainImage.png')}  />
                </View>

                <View style={styles.text1Container}>
                    <Text style={[styles.text1,{fontFamily:'Barlow_200ExtraLight'}]}>Lorem ipsum dolor sit amet, consectetur adipiscing elit</Text>
                </View>

                <View style={{flexDirection:'row',justifyContent:'center'}}>
                    <TouchableOpacity style={styles.registerButton} onPress={()=>navigation.navigate('ProfilePage')}>
                        <Image style={{height:18,width:20}} source={require('../../assets/landing_page/arrowWhite.png')} />
                        <Text style={[styles.registerText,{fontFamily:'BarlowCondensed_200ExtraLight'}]}>register</Text>
                    </TouchableOpacity>
                    <Text style={{fontFamily:'BarlowCondensed_200ExtraLight',fontSize:32,letterSpacing:-1.17}}>me as a collector</Text>
                </View>

                <View style={{flexDirection:'row',justifyContent:'center',alignItems:'center',marginTop:46,marginBottom:68.4}}>
                    <Image style={{marginRight:11,height:11,width:12,marginTop:3}} source={require('../../assets/landing_page/arrowBlue.png')} />
                    <Text style={[styles.text2,{fontFamily:'BarlowCondensed_200ExtraLight'}]}>track my application</Text>
                </View>
            </View>
        )
    }

    const flatlistFooter = () => {
        return (
            <View style={styles.footerContainer}>

                <View style={{flexDirection:'row',justifyContent:'center'}}>
                    <Image style={{marginRight:10}} source={require('../../assets/landing_page/facebook.png')}/>
                    <Image source={require('../../assets/landing_page/instagram.png')} />
                </View>

                <View style={styles.divider} />

                <Image source={require('../../assets/landing_page/artGallery2.png')} style={{alignSelf:'center'}} />

                <View style={{flexDirection:'row',justifyContent:'space-around',marginTop:18}}>
                    <View>
                        <Text style={[styles.footerText,{fontFamily:'BarlowCondensed_500Medium'}]}>About Us.{'\n'}Team.{'\n'}Reach us.</Text>
                    </View>
                    <View >
                        <Text style={[styles.footerText,{fontFamily:'BarlowCondensed_500Medium'}]}>Affiliattions.{'\n'}Disclaimers.{'\n'}Privacy Policy.</Text>
                    </View>
                </View>

                <View style={styles.divider} />

                <View style={styles.copyrightContainer}>
                    <Image source={require('../../assets/landing_page/copyright.png')}/>
                    <Text style={[styles.copyrightText,{fontFamily:'BarlowCondensed_300Light'}]}>Content Copyright reserved.</Text>
                </View>
            </View>
        )
    }

    return(
        <View style={styles.container}>
            <FlatList 
                    data={landingPageData}
                    keyExtractor={(item,index)=>index.toString()}
                    ListHeaderComponent={flatlistHeader}
                    ListFooterComponent={flatlistFooter}
                    renderItem={({item})=>{
                        return (
                            <ListGrid item={item}/>
                        )
                    }}
                />
        </View>
            
    )
}


const styles = StyleSheet.create({
    container: {
      flex: 1,
      backgroundColor: '#fff',
    },
    artGallery:{
        height:77,
        width:222,
        marginTop:31,
        marginLeft:24,
        marginBottom:7,
    },
    mainImage:{
        height:329,
        width:'100%', 
        marginBottom:33,
    },
    text1:{
        textAlign:'center',
        fontSize:16,
        lineHeight:24,
        letterSpacing:-0.6,
    },
    text1Container:{
        width:289,
        height:79,
        alignSelf:'center',
        marginBottom:7,
    },
    registerButton:{
        flexDirection:'row',
        height:43,
        width:123,
        backgroundColor:'rgb(236,81,81)',
        borderRadius:9,
        justifyContent:'center',
        alignItems:'center',
        marginRight:4.5
    },
    registerText:{
        color:'white',
        fontSize:32,
        lineHeight:28,
        letterSpacing:-1.17,
        textAlign:'center',
        marginLeft:5
    },
    text2:{
        marginBottom:3,
        fontSize:24,
        lineHeight:28,
        letterSpacing:-0.88,
        color:'rgb(87,123,223)'
    },
    footerContainer:{
        marginTop:68,
    },
    footerText:{
        fontSize:16,
        lineHeight:39,
    },
    divider:{
        height:2,
        width:321,
        backgroundColor:'rgb(216,216,216)',
        marginVertical:23,
        alignSelf:'center'
    },
    copyrightContainer:{
        alignItems:'center',
        flexDirection:'row',
        justifyContent:'center',
        marginBottom:49,
        marginTop:15
    },
    copyrightText:{
        fontSize:16,
        lineHeight:24,
        marginLeft:5
    },

});


export default LandingPage;