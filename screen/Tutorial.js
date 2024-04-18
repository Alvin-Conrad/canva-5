import React, { useState } from 'react';
import { Pressable, Text, View,} from 'react-native';
import { Feather, AntDesign } from '@expo/vector-icons';
import YoutubePlayer from 'react-native-youtube-iframe';
import { useNavigation } from '@react-navigation/native';

const Tutorial = () => {
  // navigation
  const navigation = useNavigation();

  // dark mode state
  const [isDarkMode, setIsDarkMode] = useState(false);

  // state to track play state for each video
  const [playingVideos, setPlayingVideos] = useState({});

  // function to toggle dark mode
  const toggleDarkMode = () => {
    setIsDarkMode(!isDarkMode);
  };

  // function to toggle play state for a video
  const togglePlay = (videoId) => {
    setPlayingVideos((prevState) => ({
      ...prevState,
      [videoId]: !prevState[videoId],
    }));
  };

  // data
  const videos = [
    { title: 'Welcome to Canva', id: 'SGmmiq70uk4' },
    { title: 'How to Use Canva', id: 'V9LtRF6EbyY' },
    // Add more videos as needed
  ];

  return (
    <View style={{ flex: 1, backgroundColor: isDarkMode ? '#141414' : 'white' }}>
      {/* Header */}
      <View style={{ width: '100%', height: 150, justifyContent: 'center', alignItems: 'center', position: 'relative', top: 20 }}>
        {/* Navbar Container */}
        <View style={{ flexDirection: 'row', justifyContent: 'space-between', alignItems: 'center', marginHorizontal: 20 }}>
          <Text style={{ fontSize: 30, color: isDarkMode ? 'white' : 'black' }}>
            <Text style={{ color: '#8cb2ff' }}>CANVA</Text> GUIDE APP
          </Text>

          <Pressable onPress={toggleDarkMode} style={{ position: 'relative', left: 30 }}>
            <Feather name={isDarkMode ? 'moon' : 'sun'} size={30} color={isDarkMode ? 'white' : 'black'} />
          </Pressable>
        </View>
        {/* Vertical Line */}
        <View style={{ height: 1, width: '100%', backgroundColor: '#737373', marginTop: 30 }} />
      </View>

      {/* Content Container */}
      <View style={{ flex: 1, alignItems: 'center', flexDirection: 'column' }}>
        {/* VideoList Container */}
        <View style={{marginBottom: 30}}>
          
            {videos.map((video) => (
              <View key={video.id} style={{ alignItems: 'center', marginBottom: 20 }}>
                <YoutubePlayer
                  play={playingVideos[video.id]}
                  videoId={video.id}
                  height={200}
                  style={{ height: 200 }}
                  width={300}
                  controls={false}
                />
                <View style={{ alignItems: 'center' }}>
                  <Text style={{ color: isDarkMode ? 'white' : 'black', fontSize: 25, marginBottom: 10 }}>
                    {video.title}
                  </Text>
                  <Pressable
                    onPress={() => togglePlay(video.id)}
                    style={{
                      display: 'flex',
                      justifyContent: 'center',
                      alignItems: 'center',
                      borderColor: isDarkMode ? 'white' : '#171717',
                      borderWidth: 1,
                      padding: 10,
                    }}
                  >
                    <Feather
                      name={playingVideos[video.id] ? 'pause' : 'play'}
                      size={17}
                      style={{ color: isDarkMode ? 'white' : 'black' }}
                    />
                  </Pressable>
                </View>
              </View>
            ))}
         
        </View>

        {/* Button for Next Page */}
        <View>
          <Pressable style={{display: 'flex', flexDirection: 'row', alignItems: 'center', gap: 10}}
          onPress={() => navigation.navigate("Page2")}>
            <Text style={{ color: isDarkMode ? 'white' : 'black', fontSize: 20}}>Next</Text>
            <AntDesign name='doubleright' color={isDarkMode ? 'white' : 'black'} size={30}/>
          </Pressable>
        </View>
      </View>
    </View>
  );
};

export default Tutorial;
