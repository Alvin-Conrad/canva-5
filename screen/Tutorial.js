
import React, { useState } from 'react'
import { Feather } from '@expo/vector-icons';
import { Pressable, Text, View , TextInput} from 'react-native';
import VideoList from '../assets/Videos/VideoList';
import { Foundation } from '@expo/vector-icons';




const Tutorial = () => {
  return (
    <View style={{ flex: 1 }}>
      {/* Header */}
      <View style={{ width: '100%', height: 150, justifyContent: 'center', alignItems: 'center' }}>
        {/* Navbar Container */}
        <View style={{ flexDirection: 'row', justifyContent: 'space-between', alignItems: 'center', marginHorizontal: 20 }}>
          <Text style={{ fontSize: 30 }}><Text style={{ color: '#8cb2ff' }}>CANVA</Text> GUIDE APP</Text>
          {/* Toggle Dark Mode */}
          <Pressable onPress={() => alert('Toggle Dark')}>
            <Feather name="moon" size={24} color="black" />
          </Pressable>
        </View>

        {/* Vertical Line */}
        <View style={{ height: 1, width: '100%', backgroundColor: '#737373', marginTop: 30 }} />

       
        
      </View>
       {/* Content Container */}
       <View style={{ flex: 1, alignItems: 'center', flexDirection: 'column' }}>
          {/* Search Bar View */}
          <View style={{ padding: 20, flexDirection: 'row', justifyContent: 'space-between' }}>
            <TextInput
              style={{ height: 40, borderColor: 'gray', borderWidth: 1, marginBottom: 20, paddingHorizontal: 10, width: 270, borderRadius: 20 }}
              autoComplete='off'
              onChangeText={(text) => console.log(text)} // Add onChangeText
            />
            {/* Search Button */}
            <Pressable style={{ marginLeft: 10, backgroundColor: '#8cb2ff', height: 30 }} onPress={() => alert('Search BTN clicked')}>
              <Text><Foundation name="magnifying-glass" size={20} color="white" /></Text>
            </Pressable>
          </View>
          {/*VideoList COntainer*/}
          <View>
            <VideoList/>
          </View>
        </View>


    </View>
  );
  
}
 
  



export default Tutorial