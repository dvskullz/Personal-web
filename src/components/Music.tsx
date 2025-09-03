import { useRef } from "react";

const BackgroundMusic: React.FC = () => {
  const audioRef = useRef<HTMLAudioElement | null>(null);

  // Function to play the music
  const playMusic = () => {
    if (audioRef.current) {
      audioRef.current.play().catch((err) => {
        console.error("Music play failed:", err);
      });
    }
  };

  return (
    <>
      <audio ref={audioRef} src="/music.mp3" loop />
      {/* Example button to trigger music */}
      <button
        onClick={playMusic}
        className="p-2 mt-4 bg-blue-500 text-white rounded"
      >
        Play Music
      </button>
    </>
  );
};

export default BackgroundMusic;
