import React from "react"
import { NavigationContainer } from "@react-navigation/native";
import { createNativeStackNavigator } from "@react-navigation/native-stack";
import Intro from './screen/Intro'
import Tutorial  from './screen/Tutorial'
import Page2 from "./screen/Page-2";
import Page3 from "./screen/Page-3";
import Page4 from "./screen/Page-4";


const Stack = createNativeStackNavigator();
export default function App() {
  return(
    <NavigationContainer>
       <Stack.Navigator initialRouteName="Home">
            <Stack.Screen name="Intro" component={Intro} options={{headerShown: false}}/>
            <Stack.Screen name="Tutorial" component={Tutorial} options={{headerShown: false}}/> 
            <Stack.Screen name="Page2" component={Page2} options={{headerShown: false}}/> 
            <Stack.Screen name="Page3" component={Page3} options={{headerShown: false}}/>  
            <Stack.Screen name="Page4" component={Page4} options={{headerShown: false}}/>
       </Stack.Navigator>
    </NavigationContainer>
)

}

