/*import React from "react";
import { Text , View , ScrollView} from "react-native";
import { useEffect , useState } from "react";
import Video from 'react-native-video';

const VideoList= () => {

    const [tutorials,setTutorials] = useState([]);
    const handleVideoClick = (video) => {
        setTutorials(video);
    }
    useEffect(() => {  fetch('https://alvin-conrad.github.io/testapi/data.json').then(response => response.json()).then(data => setTutorials(data));  }, []);
    
    return(
        <ScrollView>
        {tutorials.map((video) => (
          <View key={tutorials.id} style={{ marginBottom: 10 }}>
            <Button title={tutorials.Title} onPress={() => handleVideoClick(video)} />
            {tutorials === video && (
              <Video source={{ uri: video.url }} style={{ width: 300, height: 200 }} />
            )}
          </View>
        ))}
      </ScrollView>
    );
}

export default VideoList
*/
/*
import React, { useState, useEffect } from 'react';
import { Text, View, ScrollView, Button, Video } from 'react-native';


const VideoList = () => {
  const [tutorials, setTutorials] = useState([]); 
  const [selectedVideo, setSelectedVideo] = useState([]); 

  useEffect(() => {
    fetch('https://alvin-conrad.github.io/testapi/data.json') 
      .then((response) => response.json()) 
      .then((data) => setTutorials(data)); 
  }, []);

  return (
    <ScrollView> 
      {tutorials.map((video) => (
        <View key={video.id} style={{ marginBottom: 10 }}>
          <Button title={video.Title} onPress={() => setSelectedVideo(video)} /> 
          {selectedVideo === video && ( 
            <Video source={{ uri: video.video }} style={{ width: 300, height: 200 }} />
          )}
        </View>
      ))}
    </ScrollView>
  );
};

export default VideoList;
*/

import React, { useState, useEffect } from 'react';
import { Text, View, ScrollView, Button } from 'react-native';
import { Video } from 'react-native-video'; // Import Video from expo-av

const VideoList = () => {
  const [tutorials, setTutorials] = useState([]);
  const [selectedVideo, setSelectedVideo] = useState(null); // Use object instead of array

  useEffect(() => {
    fetch('https://alvin-conrad.github.io/testapi/data.json')
      .then((response) => response.json())
      .then((data) => setTutorials(data));
  }, []);

  return (
    <ScrollView>
      {tutorials.map((video) => (
        <View key={video.key} style={{ marginBottom: 10 }}>
          <Button title={video.Title} onPress={() => setSelectedVideo(video)} />
          {selectedVideo === video && (
            <Video
              source={{ uri: video.url }}
              style={{ width: 300, height: 200 }}
              useNativeControls // Add this if using expo-av
            />
          )}
        </View>
      ))}
    </ScrollView>
  );
};

export default VideoList;


