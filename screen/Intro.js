import React from 'react'
import { View, Text, Pressable, ImageBackground } from 'react-native'
import { StatusBar } from 'expo-status-bar'
import { useNavigation } from '@react-navigation/native'
import Tutorial from './Tutorial'
import { MaterialIcons } from '@expo/vector-icons'; 


const Intro = () => {
  const image = { uri: 'https://i.pinimg.com/564x/59/f7/e3/59f7e3c963993ca2ce195b045fc7657f.jpg' };
  const navigation = useNavigation();

  return (
    <View style={{flex: 1}}>
    {/*BG image*/}
    <ImageBackground source={image} resizeMode="cover" style={{flex: 1, justifyContent: 'center'}}>
    {/*Title Info*/}  
       <View style={{flex: 1, padding: 20, position :'relative', top: 200}}>
          <Text style={{fontSize: 40, marginBottom: 20}}>Canva Guide App</Text>
          <Text style={{width: '70%', fontSize: 20,marginBottom:20}}>Welcome to the Canva Guide App, your personalized tutor for mastering the art of design with Canva. This app is designed especially for beginners, providing step-by-step tutorials to help you navigate Canva with ease.</Text>
     
            {/*BTN*/}
          <Pressable style={{backgroundColor: 'black',width: 145, padding: 5,position: 'absolute', right: 20,top: 350,}} onPress={() => navigation.navigate('Tutorial')}>
            <Text style={{color: 'white', fontSize: 20, borderRadius: 50, textAlign: 'center'}}>Let's Start  <MaterialIcons name="double-arrow" size={20} color="white"/></Text>
          </Pressable>
        </View>
      </ImageBackground>
    <StatusBar style='auto'/>
   </View>
  );
}
export default Intro