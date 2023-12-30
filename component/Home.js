import React from 'react'
import { View, Text, Pressable, ImageBackground } from 'react-native'
import { StatusBar } from 'expo-status-bar'


const Home = () => {
    <View style={{flex: 1}}>
    {/*BG image*/}
    <ImageBackground source={image} resizeMode="cover" style={{flex: 1, justifyContent: 'center'}}>
    {/*Title Info*/}  
       <View style={{flex: 1, padding: 20, position :'relative', top: 200}}>
          <Text style={{fontSize: 40, marginBottom: 20}}>Canva Guide App</Text>
          <Text style={{width: '70%', fontSize: 20,marginBottom:20}}>Welcome to the Canva Guide App, your personalized tutor for mastering the art of design with Canva. This app is designed especially for beginners, providing step-by-step tutorials to help you navigate Canva with ease.</Text>
     
            {/*BTN*/}
          <Pressable style={{backgroundColor: 'black',width: 145, padding: 3,position: 'absolute', right: 20,top: 350 }} onPress={() => alert('You Pressed')}>
            <Text style={{color: 'white', fontSize: 24, borderRadius: 50, textAlign: 'center'}}>Let's Start</Text>
          </Pressable>
        </View>
    </ImageBackground>
    <StatusBar style='auto'/>
  </View>
}
export default Home