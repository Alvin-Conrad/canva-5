
import React, { useState, useRef, useEffect } from 'react'
import { Pressable, Text, View , TextInput, ScrollView} from 'react-native';
import { Video,} from 'expo-av';
import { Foundation } from '@expo/vector-icons';
import { Feather } from '@expo/vector-icons';
import { ResizeMode } from 'expo-av';




 


const Tutorial = () => {
  const [isDarkMode, setIsDarkMode] = useState(false);
  const [backgroundColor, setBackgroundColor] = useState('white');
  const [tutorials, setTutorials] = useState([]);
  const Tut = useRef([]);

  useEffect(() => {
    fetch('https://alvin-conrad.github.io/testapi/data.json')
      .then((response) => response.json())
      .then((data) => setTutorials(data))
      .catch((error) => console.error('Error fetching data:', error));
  }, []);
  

  const toggleDarkMode = () => {
    setIsDarkMode(!isDarkMode);
    console.log(`Dark mode is ${isDarkMode ? 'enabled' : 'disabled'}`);
    setBackgroundColor(isDarkMode ? 'white' : 'black');

  };
 
  return (
    <View style={{ flex: 1 ,  backgroundColor: isDarkMode ? 'black' : 'white'}}>
      {/* Header */}
      <View style={{ width: '100%', height: 150, justifyContent: 'center', alignItems: 'center',}}>
        {/* Navbar Container */}
        <View style={{ flexDirection: 'row', justifyContent: 'space-between', alignItems: 'center', marginHorizontal: 20 }}>
          <Text style={{ fontSize: 30,  color: isDarkMode ? 'white' : 'black'  }}><Text style={{ color: '#8cb2ff' }}>CANVA</Text> GUIDE APP</Text>
          
          <Pressable
            onPress={toggleDarkMode}
            style={({ pressed }) => ({
            padding: 10,
            })}>
      
            <Feather name={isDarkMode ? 'moon' : 'sun'} size={24} color={isDarkMode ? 'white' : 'black'}/>
      
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
              style={{ height: 40, borderColor: 'gray', borderWidth: 1, marginBottom: 20, paddingHorizontal: 10, width: 270, borderRadius: 20,  color: isDarkMode ? 'white' : 'black'}}
              autoComplete='off'
              onChangeText={(text) => console.log(text)
              } // Add onChangeText
            />
            {/* Search Button */}
            <Pressable style={{ marginLeft: 10,height: 30, }} onPress={() => alert('Search BTN clicked')}>
              <Text><Foundation name="magnifying-glass" size={20} color={ isDarkMode ? "white": "black"} /></Text>
            </Pressable>
          </View>
          {/*VideoList COntainer*/}
          <View>
          <ScrollView>
              {tutorials.map((video) => (
                <View key={video.key} style={{ marginBottom: 10 }}>
                  <Text style={{color: isDarkMode ? 'white' : 'black'}}>{video.Title}</Text>
                  <Text style={{color: isDarkMode ? 'white' : 'black'}}>{video.type}</Text>

                    <Video
                    ref={Tut}
                    source={require('../assets/Videos/Test.mp4')}
                    useNativeControls
                    resizeMode={ResizeMode.CONTAIN}
                    style={{ width: '100%', height: 200 }}
                    />
                  
                  
                  
                </View>
              ))}
          </ScrollView>
          </View>
        </View>
       

    </View>
  );
  
}
 
  



export default Tutorial