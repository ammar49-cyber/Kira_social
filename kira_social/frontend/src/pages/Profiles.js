import SubscribeButton from "../components/SubscribeButton";

export default function Profile() {
  return (
    <div style={{ background: "#0B0B0F", minHeight: "100vh", color: "white", padding: 20 }}>
      
      <img
        src="https://picsum.photos/150"
        alt=""
        style={{ borderRadius: "50%" }}
      />

      <h2>Creator Name</h2>
      <p style={{ opacity: 0.7 }}>Content creator | Videos | Stories</p>

      <button style={{
        background: "#6C5CE7",
        border: "none",
        padding: "10px 20px",
        borderRadius: 20,
        color: "white",
        marginRight: 10
      }}>
        Follow
      </button>

      <SubscribeButton />

      <h3 style={{ marginTop: 30 }}>Posts</h3>
    </div>
  );
}
