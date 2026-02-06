export default function Sidebar({ setPage }) {
  return (
    <div style={{ width: 200, background: "#111", color: "#fff", padding: 20 }}>
      <h3>Kira Admin</h3>
      <button onClick={() => setPage("dashboard")}>Dashboard</button>
      <button onClick={() => setPage("users")}>Users</button>
      <button onClick={() => setPage("content")}>Content</button>
      <button onClick={() => setPage("comments")}>Comments</button>
      <button onClick={() => setPage("analytics")}>Analytics</button>
    </div>
  );
}
