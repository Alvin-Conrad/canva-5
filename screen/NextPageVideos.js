import React, { useState } from 'react';
import { Pressable, ScrollView, Text, View, SafeAreaView} from 'react-native';
import { Feather, AntDesign } from '@expo/vector-icons';
import YoutubePlayer from 'react-native-youtube-iframe';
import { useNavigation } from '@react-navigation/native';


const NextPageVideos = () => {
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
      { title: 'How to Find Help', id: 'K13aR-zx3LI' },
        { title: 'How to Create Folders', id: 'v8rd-q7kZs' },
        { title: 'How to Design Together', id: 'hyaMhBqGT9Q' },
    // Add more videos as needed
  ];

  return (
    <SafeAreaView style={{flex: 1, paddingTop: 70}}>
      <View style={{ flex: 1, backgroundColor: isDarkMode ? '#141414' : 'white' }}>
     {/* Content Container */}
     <View style={{ flex: 1, alignItems: 'center', flexDirection: 'column' }}>
       {/* VideoList Container */}
       <View style={{marginBottom: 30}}>
         <ScrollView showsVerticalScrollIndicator={false}>
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
           <View>
         <Pressable style={{display: 'flex', flexDirection: 'row', alignItems: 'center', gap: 10}}
         onPress={() => navigation.navigate("Page2")}>
           <Text style={{ color: isDarkMode ? 'white' : 'black', fontSize: 20}}>Next</Text>
           <AntDesign name='doubleright' color={isDarkMode ? 'white' : 'black'} size={30}/>
         </Pressable>
       </View>
         </ScrollView>
       </View>

       {/* Button for Next Page */}
       
     </View>
   </View>
    </SafeAreaView>
  );
};

export default NextPageVideos;
