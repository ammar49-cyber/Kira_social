import React from "react";
import { View, Text, Video, Button } from "react-native";

export default function PostCard({post}){
  return (
    <View style={{marginBottom:20,background:"#1E1E2F",padding:10,borderRadius:10}}>
      <Text style={{color:"white",fontWeight:"bold"}}>{post.title}</Text>
      <Video source={{uri:post.url}} style={{width:"100%",height:200,borderRadius:10}} useNativeControls/>
      <Button title={`❤️ ${post.likes}`} onPress={()=>{}}/>
    </View>
  );
}
