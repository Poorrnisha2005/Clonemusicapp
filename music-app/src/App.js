import React, { useState } from "react";

const songs = [
  { name: "Aasa Kooda", file: "music/AasaKooda.mp3", cover: "covers/AasaKooda.jpg" },
  { name: "Adangaatha Asuran", file: "music/AdangaathaAsuran.mp3", cover: "covers/AdangaathaAsuran.jpg" },
  { name: "Chillanjirukkiye", file: "music/Chillanjirukkiye.mp3", cover: "covers/Chillanjirukkiye.jpg" },
  { name: "Hey Minnale", file: "music/HeyMinnale.mp3", cover: "covers/HeyMinnale.jpg" },
  { name: "Kanave", file: "music/Kanave.mp3", cover: "covers/Kanave.jpg" },
  { name: "Kanimaa", file: "music/Kanimaa.mp3", cover: "covers/Kanimaa.jpg" },
  { name: "Kannadi Poove", file: "music/KannadiPoove.mp3", cover: "covers/KannadiPoove.jpg" },
  { name: "Rise Of Dragon", file: "music/RiseOfDragon.mp3", cover: "covers/RiseOfDragon.jpg" },
  { name: "Thatha Vararu", file: "music/ThathaVasthaade.mp3", cover: "covers/ThathaVasthaade.jpg" },
  { name: "Uyirey", file: "music/Uyirey.mp3", cover: "covers/Uyirey.jpg" }
];

function App() {
  const [currentSong, setCurrentSong] = useState(null);
  const [likedSongs, setLikedSongs] = useState([]);

  const playSong = (file) => {
    setCurrentSong(file);
  };

  const toggleLike = (song) => {
    setLikedSongs((prev) =>
      prev.includes(song) ? prev.filter((s) => s !== song) : [...prev, song]
    );
  };

  return (
    <div style={{ textAlign: "center", padding: "20px", fontFamily: "Arial, sans-serif" }}>
      <h1 style={{ color: "#333" }}>🎵 Music App</h1>

      <h2 style={{ marginTop: "30px" }}>All Songs</h2>
      <div style={{
        display: "grid",
        gridTemplateColumns: "repeat(auto-fill, minmax(200px, 1fr))",
        gap: "20px",
        justifyContent: "center",
        padding: "20px"
      }}>
        {songs.map((song, index) => (
          <div key={index} style={{
            border: "1px solid #ccc",
            padding: "15px",
            borderRadius: "10px",
            textAlign: "center",
            backgroundColor: "#f9f9f9",
            boxShadow: "2px 2px 10px rgba(0,0,0,0.1)"
          }}>
            <img src={song.cover} alt={song.name} style={{ width: "150px", height: "150px", borderRadius: "10px" }} />
            <h3 style={{ fontSize: "16px", margin: "10px 0" }}>{song.name}</h3>
            <button onClick={() => playSong(song.file)} style={buttonStyle}>▶ Play</button>
            <button onClick={() => toggleLike(song)} style={buttonStyle}>
              {likedSongs.includes(song) ? "💔 Unlike" : "❤️ Like"}
            </button>
          </div>
        ))}
      </div>

      {currentSong && (
        <div style={{ marginTop: "30px", backgroundColor: "#eee", padding: "15px", borderRadius: "10px", display: "inline-block" }}>
          <h2>Now Playing</h2>
          <audio controls autoPlay src={currentSong} style={{ width: "100%" }}></audio>
        </div>
      )}

      <h2 style={{ marginTop: "30px" }}>❤️ Liked Songs</h2>
      {likedSongs.length > 0 ? (
        <div style={{ display: "flex", justifyContent: "center", gap: "20px", flexWrap: "wrap" }}>
          {likedSongs.map((song, index) => (
            <div key={index} style={{
              border: "1px solid #ccc",
              padding: "10px",
              borderRadius: "10px",
              backgroundColor: "#ffecec",
              textAlign: "center"
            }}>
              <h4>{song.name}</h4>
              <button onClick={() => toggleLike(song)} style={buttonStyle}>💔 Remove</button>
            </div>
          ))}
        </div>
      ) : <p>No liked songs yet.</p>}
    </div>
  );
}

const buttonStyle = {
  margin: "5px",
  padding: "8px 12px",
  fontSize: "14px",
  borderRadius: "5px",
  border: "none",
  cursor: "pointer",
  backgroundColor: "#007BFF",
  color: "#fff"
};

export default App;
