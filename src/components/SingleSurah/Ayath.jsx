/* eslint-disable react-hooks/exhaustive-deps */
import { useState, useEffect, useRef } from "react";
import { useInView } from "react-intersection-observer";
import { FaPlayCircle, FaPauseCircle } from "react-icons/fa";
import axios from "axios";

const banglaAyahCache = {};

const Ayath = ({ ayath }) => {
  const { ref, inView } = useInView({ triggerOnce: true });
  const [banglaAyath, setBanglaAyath] = useState();
  const [ayathAudio, setAyathAudio] = useState(null);
  const [isPlaying, setIsPlaying] = useState(false);
  const audioRef = useRef(null);

  useEffect(() => {
    if (inView && !banglaAyath) {
      const cached = banglaAyahCache[ayath.number];
      if (cached) {
        setBanglaAyath(cached);
      } else {
        fetch(`https://api.alquran.cloud/v1/ayah/${ayath?.number}/bn.bengali`)
          .then((res) => res.json())
          .then((data) => {
            banglaAyahCache[ayath.number] = data?.data;
            setBanglaAyath(data?.data);
          });

        axios
          .get(`https://api.alquran.cloud/v1/ayah/${ayath?.number}/ar.alafasy`)
          .then(({ data }) => {
            setAyathAudio(data?.data);
          });
      }
    }
  }, [inView, ayath]);

  useEffect(() => {
    if (ayathAudio?.audio) {
      audioRef.current = new Audio(ayathAudio.audio);

      audioRef.current.addEventListener("ended", () => {
        setIsPlaying(false); 
      });
    }
    return () => {
      if (audioRef.current) {
        audioRef.current.pause();
        audioRef.current = null;
      }
    };
  }, [ayathAudio]);

  const handlePlayPause = () => {
    if (!audioRef.current) return;

    if (isPlaying) {
      audioRef.current.pause();
    } else {
      audioRef.current.play();
    }

    setIsPlaying(!isPlaying);
  };

  return (
    <div ref={ref} className="border-b border-b-silver p-5 relative">
      <button
        onClick={handlePlayPause}
        className="text text-3xl font-bold absolute top-5 left-3 cursor-pointer text-blue"
      >
        {isPlaying ? <FaPauseCircle /> : <FaPlayCircle />}
      </button>

      <div className="flex flex-row items-center justify-end gap-5 mb-5">
        <h4 className="text-right h-10 w-10 font-thin text-base bg-blue rounded-full flex justify-center items-center text-white">
          {ayath?.numberInSurah}
        </h4>
        <p className="font-amiriQuran max-w-11/12 text-3xl font-extrabold text-right leading-loose">
          {ayath.text}
        </p>
      </div>

      <div>
        <p className="font-notoSerifBengali text-xl font-medium">
          {banglaAyath?.text || "Loading translation..."}
        </p>
      </div>
    </div>
  );
};

export default Ayath;
