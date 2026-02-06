export default function LongVideo() {
  return (
    <div style={{ background: "#0B0B0F", minHeight: "100vh", color: "white", padding: 20 }}>
      <video
        controls
        src="https://www.w3schools.com/html/mov_bbb.mp4"
        style={{ width: "100%", borderRadius: 16 }}
      />
      <h2>Long Video Title</h2>
      <p style={{ opacity: 0.7 }}>
        YouTube-style long content.
      </p>
    </div>
  );
}
