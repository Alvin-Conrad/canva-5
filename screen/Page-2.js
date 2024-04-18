import React, { useState } from 'react';
import { Pressable, ScrollView, Text, View, SafeAreaView} from 'react-native';
import { Feather, AntDesign } from '@expo/vector-icons';
import YoutubePlayer from 'react-native-youtube-iframe';
import { useNavigation } from '@react-navigation/native';


const Page2 = () => {
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
        { title: 'How to Create Folders', id: 'cv8rd-q7kZs' },
        { title: 'How to share and collaborate on designs', id: 'hyaMhBqGT9Q' },
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
             <View key={video.id} style={{ alignItems: 'center', marginBottom: 20 , paddingTop: 30}}>
               <YoutubePlayer
                 play={playingVideos[video.id]}
                 videoId={video.id}
                 height={200}
                 style={{ height: 200 }}
                 width={300}
                 controls={false}
                 forceAndroidAutoplay={false}
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
       </View>
         </ScrollView>
         <View style={{display: 'flex', justifyContent: 'center', alignItems: 'center'}}>
          {/* Numbers  */}
          <View style={{display: 'flex', flexDirection: 'row', gap: 20,}}>
            <Pressable onPress={() => navigation.navigate("Tutorial")}>
              <Text style={{color:'black',  fontSize: 30,}}>1</Text>
            </Pressable>
            <Pressable onPress={() => navigation.navigate("Page2")} style={{backgroundColor: isDarkMode ? "white" : "#141414"}}>
              <Text style={{color: "white", fontSize: 30, paddingLeft: 5, paddingRight: 5}}>2</Text>
            </Pressable>
            <Pressable onPress={() => navigation.navigate("Page3")}>
              <Text style={{color: "black", fontSize: 30}}>3</Text>
            </Pressable>
            <Pressable onPress={() => navigation.navigate("Page4")}>
              <Text style={{color: "black", fontSize: 30}}>4</Text>
            </Pressable>
          </View>
        </View>
       </View>

       {/* Button for Next Page */}
       
     </View>
   </View>
    </SafeAreaView>
  );
};

export default Page2;
