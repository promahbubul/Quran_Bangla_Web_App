import { useLoaderData } from "react-router-dom";
import { useRef, useState } from "react";
import Ayath from "../../components/SingleSurah/Ayath";
import Header from "../../components/SingleSurah/Header";
import { Helmet } from "react-helmet";

const SingleSurah = () => {
  const { audio, surah, bangla } = useLoaderData();

  // Track audioRefs for Ayath audios
  const audioRefs = useRef([]);

  // Track Header audio ref
  const headerAudioRef = useRef(null);

  // Which audio is currently playing:
  // null, "header", or "ayath-<number>"
  const [playingAudio, setPlayingAudio] = useState(null);

  // Called when Ayath audio plays
  const handleAyathPlay = (index, ayathNumber) => {
    // Pause Header audio if playing
    if (headerAudioRef.current) {
      headerAudioRef.current.pause();
    }

    // Pause all other ayath audios except the current
    audioRefs.current.forEach((audioEl, idx) => {
      if (audioEl && idx !== index) {
        audioEl.pause();
        audioEl.currentTime = 0;
      }
    });

    setPlayingAudio(`ayath-${ayathNumber}`);
  };

  // Called when Ayath audio pauses or ends
  const handleAyathPause = (ayathNumber) => {
    if (playingAudio === `ayath-${ayathNumber}`) {
      setPlayingAudio(null);
    }
  };

  // Called when Header plays
  const handleHeaderPlay = (audioEl) => {
    // Pause all ayath audios
    audioRefs.current.forEach((audioEl) => {
      if (audioEl) {
        audioEl.pause();
      }
    });
    setPlayingAudio("header");
    headerAudioRef.current = audioEl;
  };

  // Called when Header pauses/stops
  const handleHeaderPause = () => {
    if (playingAudio === "header") setPlayingAudio(null);
  };

  // Register Ayath audio refs
  const registerAudio = (ref, index) => {
    audioRefs.current[index] = ref;
  };

  return (
    <div className="w-full md:w-9/12 p-2 md:p-5 h-[calc(100%-114px)] md:h-full">
      <Helmet>
        <title>
          {surah && `Surah ${surah?.number} - ${surah?.englishName}`}
        </title>
        <meta
          name="description"
          content={`Read Surah ${surah?.englishName} online with Bangla translation`}
        />
        <link
          rel="canonical"
          href={`https://alquran-bangla-web-app.vercel.app/surah/${surah?.number}`}
        />
      </Helmet>

      <Header
        englishName={surah?.data?.englishName}
        meanning={surah?.data?.englishNameTranslation}
        name={surah?.data?.name}
        ayath={surah?.data?.numberOfAyahs}
        surahNumber={surah?.data?.number}
        onPlay={handleHeaderPlay}
        onPause={handleHeaderPause}
        playingAudio={playingAudio}
      />

      <div className="h-[calc(100%-86px)] md:h-[calc(100%-122px)] overflow-y-auto">
        {surah?.data?.ayahs?.map((ayath, index) => (
          <Ayath
            key={ayath?.number}
            ayath={ayath}
            audio={audio?.data?.ayahs[index]?.audio}
            bangla={bangla?.data?.ayahs[index]?.text}
            onPlay={() => handleAyathPlay(index, ayath.number)}
            onPause={() => handleAyathPause(ayath.number)}
            registerAudio={(ref) => registerAudio(ref, index)}
            isPlaying={playingAudio === `ayath-${ayath.number}`}
            isHeaderPlaying={playingAudio === "header"}
          />
        ))}
      </div>
    </div>
  );
};

export default SingleSurah;
