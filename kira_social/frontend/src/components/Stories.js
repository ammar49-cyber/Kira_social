export default function Stories() {
  const stories = [1,2,3,4,5];

  return (
    <div style={{ display: "flex", overflowX: "auto", padding: 10 }}>
      {stories.map(s => (
        <div key={s} style={{ marginRight: 12, textAlign: "center" }}>
          <div style={{
            width: 70,
            height: 70,
            borderRadius: "50%",
            border: "3px solid #6C5CE7",
            backgroundImage: `url(https://picsum.photos/seed/${s}/100)`,
            backgroundSize: "cover"
          }} />
          <small>User{s}</small>
        </div>
      ))}
    </div>
  );
}
