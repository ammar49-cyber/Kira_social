import { View, Text, Button } from "react-native";
import { io } from "socket.io-client";

const socket = io("https://YOUR_BACKEND_URL");

export default function Chat() {
  const send = () => socket.emit("sendMessage", { text: "Hello from mobile" });

  return (
    <View style={{ padding: 20 }}>
      <Button title="Send Message" onPress={send} />
      <Text>Chat works!</Text>
    </View>
  );
}
