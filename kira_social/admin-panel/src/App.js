import { useState } from "react";
import Sidebar from "./components/Sidebar";
import Dashboard from "./pages/Dashboard";
import Users from "./pages/Users";

export default function App() {
  const [page, setPage] = useState("dashboard");

  return (
    <div style={{ display: "flex" }}>
      <Sidebar setPage={setPage} />
      <div style={{ padding: 20 }}>
        {page === "dashboard" && <Dashboard />}
        {page === "u
  );sers" && <Users />}
      </div>
    </div>
}
