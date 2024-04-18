import React, {useState} from 'react'
import { ScrollView, View, Text,Pressable } from 'react-native'
import YoutubePlayer from 'react-native-youtube-iframe'

const VideoList = () => {

  // data
  const [isDarkMode, setIsDarkMode] = useState(false);
  return (
    <ScrollView showsVerticalScrollIndicator={false}>
     {videos.map((video) => {
     <View key={video.id}>
        <YoutubePlayer
        play={true}
        videoId={video.id}
        height={200}
        />
         <Text style={{color: isDarkMode ? 'white' : 'black'}}>
               {video.title}
        </Text>
     </View> 
     }, [])}
     
</ScrollView>
  )
}

export default VideoList