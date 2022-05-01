import { createMaterialTopTabNavigator } from '@react-navigation/material-top-tabs';
import { NavigationContainer } from '@react-navigation/native';
import { createNativeStackNavigator } from '@react-navigation/native-stack';
import { StyleSheet, Text, View,Button } from 'react-native';
import ProfileHeaderComponent from './src/components/profile_page/ProfileHeaderComponent';
import ExhibitionsPage from './src/screens/ExhibitionsPage';
import LandingPage from './src/screens/LandingPage';
import ProfilePage from './src/screens/ProfilePage';
import RevenuePage from './src/screens/RevenuePage';
import UploadsPage from './src/screens/UploadsPage';
import { useFonts,BarlowCondensed_500Medium } from '@expo-google-fonts/barlow-condensed';
import {Image,Dimensions,ScrollView} from 'react-native';
import AppLoading from 'expo-app-loading';

const Stack = createNativeStackNavigator();
const Tabs = createMaterialTopTabNavigator();

const TabNavigator = () =>{

  const [fontsLoaded] = useFonts({
    BarlowCondensed_500Medium,
  })

  if (!fontsLoaded) {
    return <AppLoading />;
  }

  return(
    <>
      <ProfilePage />
      <Tabs.Navigator
        screenOptions={{
          tabBarIndicatorStyle:{backgroundColor:'rgb(255,181,0)',width:'15%',left:(Dimensions.get('window').width)*0.10},
          tabBarStyle:{elevation:0},
          tabBarLabelStyle:{
            fontSize:14,lineHeight:24,fontFamily:'BarlowCondensed_500Medium',textTransform:'none',
          }
        }}
      >
        <Tabs.Screen 
          name='Uploads' 
          component={UploadsPage} 
          options={{
            title:'Uploads',
            tabBarIcon:()=> <Image source={require('./assets/profile_page/uploadTab.png')}/>
          }} 
        />
        <Tabs.Screen 
          name='Exhibitions' 
          component={ExhibitionsPage} 
          options={{
            tabBarIcon:()=><Image source={require('./assets/profile_page/exhibitionTab.png')} />
          }}
        />
        <Tabs.Screen 
          name='Revenue' 
          component={RevenuePage} 
          options={{
            tabBarIcon:()=><Image source={require('./assets/profile_page/revenueTab.png')} />
          }}
        />
      </Tabs.Navigator>
    </>
  )
}

const App = () => {

  return (
    <NavigationContainer>
      <Stack.Navigator>
        <Stack.Screen name='LandingPage' component={LandingPage} options={{headerShown:false}} />
        <Stack.Screen name='ProfilePage' component={TabNavigator} options={{headerShown:false}}/>
      </Stack.Navigator>
    </NavigationContainer>
  );
}



export default App;
