import React,{useState} from 'react'
import { View,Text,StyleSheet,StatusBar,Image,Switch,TouchableOpacity } from 'react-native'
import AppLoading from 'expo-app-loading';
import { useFonts,BarlowCondensed_300Light,BarlowCondensed_200ExtraLight, BarlowCondensed_500Medium } from '@expo-google-fonts/barlow-condensed';

const ProfileHeaderComponent = () => {

    const imagePath = '../../../assets/profile_page'
    const [switchState,setSwitchState] = useState(true);

    const [fontsLoaded] = useFonts({
        BarlowCondensed_200ExtraLight,
        BarlowCondensed_300Light,
        BarlowCondensed_500Medium,
    })

    // if (!fontsLoaded) {
    //     return <AppLoading />;
    // }

    
    return (
        <View>
            <StatusBar/>

            <View style={styles.headerMain}>
                <View style={{justifyContent:'center',flex:1}}>
                    <Image style={{height:28,width:85.8}} source={require(`${imagePath}/artGallery.png`)} />
                </View>
                <View style={styles.headerMainRightPart}>
                    <View style={{backgroundColor:'rgb(217,0,52)',borderRadius:25,width:33,height:33,alignItems:'center',justifyContent:'center'}}>
                        <Image style={{height:18,width:19}} source={require(`${imagePath}/userIcon.png`)} />
                    </View>

                    <TouchableOpacity>
                        <Image style={{height:16.8,width:16.8}} source={require(`${imagePath}/addIcon.png`)} />
                    </TouchableOpacity>
                    
                    <TouchableOpacity>
                        <Image style={{height:13,width:17}} source={require(`${imagePath}/menuIcon.png`)} />
                    </TouchableOpacity>

                </View>
            </View>

            <View style={styles.headerAvatarPart}>
                <TouchableOpacity style={styles.iconStyle}>
                    <Image  source={require(`${imagePath}/upload.png`)} />
                    <Text style={[styles.iconTextStyle,{fontFamily:'BarlowCondensed_300Light'}]}>Upload</Text>
                </TouchableOpacity>

                <Image source={require(`${imagePath}/avatar.png`)} />

                <TouchableOpacity style={styles.iconStyle}>
                    <Image source={require(`${imagePath}/edit.png`)} />
                    <Text style={[styles.iconTextStyle,{fontFamily:'BarlowCondensed_300Light'}]}>Edit</Text>
                </TouchableOpacity>
            </View>

            <View style={styles.nameContainer}>
                <Text style={[styles.nameStyle,{fontFamily:'BarlowCondensed_200ExtraLight'}]}>john.doe</Text>
            </View>

            <View style={styles.switchContainer}>
                <Text style={{fontFamily:'BarlowCondensed_300Light',fontSize:14,lineHeight:24}}>My dashboard</Text>

                <Switch
                    trackColor={{ false: "#767577", true: 'rgb(68,163,61)' }}
                    thumbColor={switchState ? 'white' : "white"}
                    onValueChange={()=>setSwitchState(!switchState)}
                    value={switchState}
                />
            </View>

            <View style={styles.divider} />

            <View style={styles.statsMain}>
                <View style={styles.statsSingle}>
                    <Text style={[styles.statsText1,{fontFamily:'BarlowCondensed_300Light'}]}>2.3K</Text>
                    <Text style={[styles.statsText2,{fontFamily:'BarlowCondensed_300Light'}]}>Followers</Text>
                </View>
                <View style={styles.statsSingle}>
                    <Text style={[styles.statsText1,{fontFamily:'BarlowCondensed_300Light'}]}>50</Text>
                    <Text style={[styles.statsText2,{fontFamily:'BarlowCondensed_300Light'}]}>Artworks</Text>
                </View>
                <View style={styles.statsSingle}>
                    <Text style={[styles.statsText1,{fontFamily:'BarlowCondensed_300Light'}]}>21</Text>
                    <Text style={[styles.statsText2,{fontFamily:'BarlowCondensed_300Light'}]}>Exhibitions</Text>
                </View>
            </View>

            <View style={styles.divider} />

            <View style={styles.likesContainer}>
                <View style={{flexDirection:'row',alignItems:'center'}}>
                    <Image source={require(`${imagePath}/likes.png`)}/>
                    <Text style={[styles.likesText,{fontFamily:'BarlowCondensed_200ExtraLight'}]}>120</Text>
                </View>
                <View style={{flexDirection:'row',alignItems:'center'}}>
                    <Image source={require(`${imagePath}/arrow.png`)}/>
                    <Text style={[styles.likesText,{fontFamily:'BarlowCondensed_200ExtraLight'}]}>43K</Text>
                </View>
                <View style={{flexDirection:'row',alignItems:'center'}}>
                    <Image source={require(`${imagePath}/share.png`)}/>
                    <Text style={[styles.likesText,{fontFamily:'BarlowCondensed_200ExtraLight'}]}>2.3K</Text>
                </View>
            </View>

            <View style={{flexDirection:'row',marginHorizontal:18,height:42}}>
                <View style={{backgroundColor:'#5f0e47',flex:1,alignItems:'center',justifyContent:'center'}}>
                    <Text style={{fontFamily:'BarlowCondensed_500Medium',fontSize:14,lineHeight:24,color:'white'}}>pallette</Text>
                </View>
                <View style={{backgroundColor:'#9e003d',flex:1}}/>
                <View style={{backgroundColor:'#d90034',flex:1}}/>
                <View style={{backgroundColor:'#ff4518',flex:1}}/>
                <View style={{backgroundColor:'#ffc200',flex:1}}/>
            </View>

        </View>
    )
    
}

const styles = StyleSheet.create({
    headerMain:{
        marginTop:27,
        marginLeft:24,
        marginRight:25,
        marginBottom:38,
        flexDirection:'row',
        // borderWidth:1,
    },
    headerMainRightPart:{
        flexDirection:'row',
        justifyContent:'space-between',
        alignItems:'center',
        flex:1,
    },
    headerAvatarPart:{
        flexDirection:'row',
        alignItems:'center',
        justifyContent:'space-around'
    },
    iconStyle:{},
    iconTextStyle:{
        fontSize:14,
        lineHeight:24,
        textAlign:'center',
        color:'rgb(96,131,224)',
    },
    nameContainer:{
        marginTop:7,
    },
    nameStyle:{
        fontSize:36,
        lineHeight:28,
        letterSpacing:-1.32,
        textAlign:'center'
    },
    switchContainer:{
        marginTop:25,
        marginHorizontal:30,
        alignItems:'center',
        flexDirection:"row",
        justifyContent:'space-between'
    },
    divider:{
        height:2,
        width:'90%',
        backgroundColor:'rgb(216,216,216)',
        marginVertical:9,
        alignSelf:'center'
    },
    statsMain:{
        flexDirection:'row',
        justifyContent:'space-around',
        alignItems:'center',
    },
    statsSingle:{
        alignItems:'center'
    },
    statsText1:{
        fontSize:24,
        lineHeight:29,
    },
    statsText2:{
        fontSize:14,
        lineHeight:24,
    },
    likesContainer:{
        marginHorizontal:87,
        marginVertical:10,
        flexDirection:'row',
        justifyContent:'space-between'
    },
    likesText:{
        fontSize:18,
        lineHeight:42,
        marginLeft:10
    },
})

export default ProfileHeaderComponent;