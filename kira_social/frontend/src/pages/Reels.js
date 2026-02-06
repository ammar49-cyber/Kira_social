export default function Reels() {
  return (
    <div style={{ height: "100vh", background: "black" }}>
      <video
        autoPlay
        loop
        muted
        src="https://www.w3schools.com/html/mov_bbb.mp4"
        style={{ width: "100%", height: "100%", objectFit: "cover" }}
      />
    </div>
  );
}
