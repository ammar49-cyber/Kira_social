import React from "react";
import { NavigationContainer } from "@react-navigation/native";
import { createNativeStackNavigator } from "@react-navigation/native-stack";
import Feed from "./screens/Feed";
import Login from "./screens/Login";
import Signup from "./screens/Signup";
import Profile from "./screens/Profile";
import Chat from "./screens/Chat";
import Reels from "./screens/Reels";
import LongVideo from "./screens/LongVideo";

const Stack = createNativeStackNavigator();

export default function App() {
  return (
    <NavigationContainer>
      <Stack.Navigator>
        <Stack.Screen name="Login" component={Login}/>
        <Stack.Screen name="Signup" component={Signup}/>
        <Stack.Screen name="Feed" component={Feed}/>
        <Stack.Screen name="Profile" component={Profile}/>
        <Stack.Screen name="Chat" component={Chat}/>
        <Stack.Screen name="Reels" component={Reels}/>
        <Stack.Screen name="LongVideo" component={LongVideo}/>
      </Stack.Navigator>
    </NavigationContainer>
  );
}
