import { View, Video } from "react-native";
import axios from "axios";
import { useEffect, useState } from "react";

export default function Reels() {
  const [reels, setReels] = useState([]);

  useEffect(() => {
    axios.get("https://YOUR_BACKEND_URL/api/reels")
      .then(res => setReels(res.data));
  }, []);

  return (
    <View>
      {reels.map(r => (
        <Video
          key={r._id}
          source={{ uri: r.video }}
          style={{ width: "100%", height: 400 }}
          useNativeControls
        />
      ))}
    </View>
  );
}
