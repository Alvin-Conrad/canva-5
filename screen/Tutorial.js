
import React from 'react'
import { Feather } from '@expo/vector-icons';
import { Pressable, Text, View } from 'react-native';
import VideoList from './component/VideoList';



const Tutorial = () => {
  return(
   
    <View style={{flex :1,}}>
    
     {/*Header*/}
     <View style={{width: '100%', height: 150 ,justifyContent: 'center', alignItems: 'center',}}>
     
        {/*Navbar Container*/}
        <View style={{display: 'flex', flexDirection: 'row', gap: 200,alignItems: 'center',}}>
          <View>
            <Text style={{fontSize: 30}}><Text style={{color: '#8cb2ff'}}>CANVA</Text> GUIDE APP</Text>
          </View>

          {/*Toggle Dark Mode*/}
          <View>
            <Pressable onPress={() => alert('Toggle Dark')}>
              <Feather name="moon" size={24} color="black" />
            </Pressable>
          </View>
        </View>
        {/*Vertical Line*/}
        <View style={{height: 1,width: '100%',backgroundColor: '#737373',position: 'relative', top: 30 }}/>
        
     </View>
      <VideoList/>
     <View>

     </View>      
   </View>
   
 )
}

export default Tutorial