
import * as React from 'react';
import { Button, View ,Alert,Text} from 'react-native';
import messaging from '@react-native-firebase/messaging';

import 'react-native-gesture-handler';
import AsyncStorage from '@react-native-async-storage/async-storage'

import { createDrawerNavigator } from '@react-navigation/drawer';
import { NavigationContainer } from '@react-navigation/native';
import {PermissionsAndroid} from 'react-native';
import {Provider} from 'react-redux'
import store from './src/dataredux/store'
import Home from "./src/dataredux/page/Home";
  PermissionsAndroid.request(PermissionsAndroid.PERMISSIONS.POST_NOTIFICATIONS);
function HomeScreen({ navigation }) {
  return (
    <View style={{ flex: 1, alignItems: 'center', justifyContent: 'center' }}>
      <Button
        onPress={() => navigation.navigate('Notifications')}
        title="Go to notifications"
      />
      <Button
        onPress={() => navigation.openDrawer()}
        title="Go to Drawer"
      />
    </View>
  );
}

function NotificationsScreen({ navigation }) {
  return (
    <View style={{ flex: 1, alignItems: 'center', justifyContent: 'center' }}>
      <Button onPress={() => navigation.goBack()} title="Go back home" />
    </View>
  );
}

const Drawer = createDrawerNavigator();
function App(): JSX.Element {
 /*  React.useEffect(()=>{

   
    
    async function requestUserPermission() {
      const authStatus = await messaging().requestPermission();
      const enabled =
        authStatus === messaging.AuthorizationStatus.AUTHORIZED ||
        authStatus === messaging.AuthorizationStatus.PROVISIONAL;
    
      if (enabled) {
        console.log('Authorization status:', authStatus);
      }
    }
    requestUserPermission()
    getFcmToken()
   
  },[]) */
 
async function getFcmToken(){
  messaging().setBackgroundMessageHandler(async remoteMessage => {
    console.log('Message handled in the background!', remoteMessage);
  });
  let fcmtoken =await AsyncStorage.getItem("fcmtoken")
  console.log('====================================');
  console.log(fcmtoken,"old token");
  console.log('====================================');
  if(!fcmtoken){
    try{
      let fcmtoken = await messaging().getToken()
     
        if(fcmtoken){
          console.log('====================================');
          console.log(fcmtoken,"new token");
          console.log('====================================');
         await AsyncStorage.setItem("fcmtoken",fcmtoken)
        }
    }
    catch(err){
console.log('====================================');
console.log(err);
console.log('====================================');
    }
  }
  else{

  }
  /* const unsubscribe = messaging().onMessage(async remoteMessage => {
    Alert.alert('A new FCM message arrived!', JSON.stringify(remoteMessage));
  });

  return unsubscribe;   */
 /*    const unsubscribe = messaging().setBackgroundMessageHandler(async remoteMessage => {
    Alert.alert('A new FCM message arrived!', JSON.stringify(remoteMessage));
  });

  return unsubscribe;   */ 
  NotificationsScreen()
} 


function NotificationsScreen(){
  messaging().onNotificationOpenedApp(remoteMessage => {
    console.log(
      'Notification caused app to open from background state:',
      remoteMessage.notification,
    );
    });
    messaging()
      .getInitialNotification()
      .then(remoteMessage => {
        if (remoteMessage) {
          console.log(
            'Notification caused app to open from quit state:',
            remoteMessage.notification,
          );
         }
        });
        messaging().onMessage(async re=>{
          console.log('====================================');
          console.log("nofi",re);
          console.log('====================================');
        })
  
}
  return (
    
    <NavigationContainer>
      
      <Provider store={store}>
     
     

     <Drawer.Navigator initialRouteName="Home">
      <Drawer.Screen name="Home" component={Home} />
     {/*  <Drawer.Screen name="Notifications" component={NotificationsScreen} /> */}
    </Drawer.Navigator> 
    </Provider> 
  </NavigationContainer>
  
   
  );
}

export default App

