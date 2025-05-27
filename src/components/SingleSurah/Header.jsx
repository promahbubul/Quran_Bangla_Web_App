import axios from "axios";
import { useEffect, useRef, useState } from "react";
import { FaPauseCircle, FaPlayCircle } from "react-icons/fa";

const Header = ({ name, englishName, ayath, meanning, surahNumber }) => {
  const [suraAudio, setSuraAudio] = useState([]);
  const [isPlaying, setIsPlaying] = useState(false);
  const [currentIndex, setCurrentIndex] = useState(0);
  const audioRef = useRef(null);

  useEffect(() => {
    axios
      .get(`https://api.alquran.cloud/v1/surah/${surahNumber}/ar.alafasy`)
      .then(({ data }) => {
        setSuraAudio(data?.data?.ayahs.map((a) => a.audio));
      })
      .catch((err) => console.error(err));
  }, [surahNumber]);

  useEffect(() => {
    if (isPlaying && suraAudio.length > 0) {
      playAudio(currentIndex);
    }

    return () => {
      if (audioRef.current) {
        audioRef.current.pause();
        audioRef.current = null;
      }
    };
  }, [isPlaying, currentIndex]);

  const playAudio = (index) => {
    if (index >= suraAudio.length) {
      setIsPlaying(false);
      return;
    }

    const audio = new Audio(suraAudio[index]);
    audioRef.current = audio;

    audio.play();
    audio.addEventListener("ended", () => {
      setCurrentIndex((prev) => prev + 1);
    });
  };

  const handlePlayPause = () => {
    if (isPlaying) {
      // Pause everything
      if (audioRef.current) {
        audioRef.current.pause();
      }
      setIsPlaying(false);
    } else {
      setCurrentIndex(0);
      setIsPlaying(true);
    }
  };

  return (
    <div className="from-blue/0 relative to-blue/40 bg-gradi rounded-md border border-blue bg-gradient-to-br font-roboto p-3 md:p-5 font-semibold w-full mb-1 flex flex-row items-center justify-between">
      <div>
        <h1 className="text-lg md:text-xl">
          {englishName} -{" "}
          <span className="font-notoNaskhArebic text-2xl md:text-3xl font-bold text-blue">
            {name}
          </span>
        </h1>
        <p className="text-gray font-normal text-sm md:text-base">
          {meanning} - {ayath}
        </p>
      </div>
      <button
        onClick={handlePlayPause}
        className="text text-3xl md:text-6xl font-bold absolute top-1/2 -translate-y-1/2 right-1 md:right-auto md:left-1/2 -translate-x-1/2 cursor-pointer text-white"
      >
        {isPlaying ? <FaPauseCircle /> : <FaPlayCircle />}
      </button>

      <h1 className="w-12 h-12 rounded-md bg-blue text-2xl text-white justify-center items-center hidden md:flex">
        {surahNumber}
      </h1>
    </div>
  );
};

export default Header;
