import axios from "axios";
import { useEffect, useState } from "react";

export default function Home() {
  const [posts, setPosts] = useState([]);

  useEffect(() => {
    axios.get("https://kira_social_backend_4994/api/posts/feed")
      .then((res) => setPosts(res.data));
  }, []);

  return (
    <div>
      {posts.map((p) => (
        <div key={p._id}>
          <img src={p.image} alt="" width="300" />
          <p>{p.caption}</p>
          <span>❤️ {p.likes.length}</span>
        </div>
      ))}
    </div>
  );
}
