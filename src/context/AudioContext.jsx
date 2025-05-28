// src/AudioContext.js
import { createContext, useContext, useState, useRef } from "react";

const AudioContext = createContext();

export const AudioProvider = ({ children }) => {
  const currentAudioRef = useRef(null);
  const [currentId, setCurrentId] = useState(null);

  const playAudio = (id, audioRef) => {
    if (currentAudioRef.current && currentAudioRef.current !== audioRef) {
      currentAudioRef.current.audioEl.current.pause();
    }
    currentAudioRef.current = audioRef;
    setCurrentId(id);
    audioRef.audioEl.current.play();
  };

  const pauseAudio = () => {
    if (currentAudioRef.current) {
      currentAudioRef.current.audioEl.current.pause();
    }
    setCurrentId(null);
  };

  return (
    <AudioContext.Provider value={{ playAudio, pauseAudio, currentId }}>
      {children}
    </AudioContext.Provider>
  );
};

export const useAudioContext = () => useContext(AudioContext);
