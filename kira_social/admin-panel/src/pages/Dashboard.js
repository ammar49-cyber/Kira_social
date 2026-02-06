import { useEffect, useState } from "react";
import API from "../services/api";

export default function Dashboard() {
  const [stats, setStats] = useState({});

  useEffect(() => {
    API.get("/admin/stats").then(res => setStats(res.data));
  }, []);

  return (
    <div>
      <h2>Overview</h2>
      <p>Users: {stats.users}</p>
      <p>Creators: {stats.creators}</p>
      <p>Posts: {stats.posts}</p>
      <p>Comments: {stats.comments}</p>
    </div>
  );
}
