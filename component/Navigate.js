import React from "react";
import { NavigationContainer } from "@react-navigation/native";
import { createNativeStackNavigator } from "@react-navigation/native-stack";
import { HomeScreen} from './Home';
import {TutorialScreen} from './Tutorial';
 


const Stack = createNativeStackNavigator();
export default function Navigate(){
    return(
        <NavigationContainer>
           <Stack.Navigator initialRouteName="Home">
            <Stack.Screen name="Home" component={HomeScreen} />
            <Stack.Screen name="Tutorial" component={TutorialScreen} />
           </Stack.Navigator>
        </NavigationContainer>
    )
}