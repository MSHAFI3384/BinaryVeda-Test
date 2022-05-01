import React from 'react';
import {View,Text,FlatList,StyleSheet,Dimensions} from 'react-native';
import PhotoGrid from '../components/profile_page/PhotoGrid';
import { profilePageData } from '../local_data/ProfilePageData'

const UploadsPage = () => {
    return (
        <View style={{backgroundColor:'white'}}>
            <FlatList 
                data={profilePageData}
                numColumns={2}
                // columnWrapperStyle={styles.columnWrap}
                keyExtractor={(item,index)=>index.toString()}
                renderItem={({item})=>{
                    return(
                        <PhotoGrid item={item} />
                    )
                }}
            />
        </View>

    );
}

const styles = StyleSheet.create({
})

export default UploadsPage;