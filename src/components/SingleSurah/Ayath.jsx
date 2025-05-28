import { useEffect, useRef } from "react";
import { Helmet } from "react-helmet";

const Ayath = ({
  ayath,
  audio,
  bangla,
  onPlay,
  onPause,
  registerAudio,
  isPlaying,
  isHeaderPlaying,
}) => {
  const audioRef = useRef(null);

  useEffect(() => {
    if (registerAudio) {
      registerAudio(audioRef.current);
    }
  }, [registerAudio]);

  useEffect(() => {
    if (audioRef.current) {
      if (isHeaderPlaying) {
        // Pause if header is playing
        audioRef.current.pause();
      } else if (!isPlaying) {
        // If this Ayath is not playing, pause audio
        audioRef.current.pause();
      }
    }
  }, [isPlaying, isHeaderPlaying]);

  const handlePlay = () => {
    if (onPlay) onPlay();
  };

  const handlePause = () => {
    if (onPause) onPause();
  };

  return (
    <div className="border-b border-b-silver p-3 md:p-5 relative">
      <Helmet>
        <meta name="description" content={`${ayath.text}`} />
      </Helmet>

      {/* <audio
        ref={audioRef}
        src={audio}
        controls
        className="mb-5"
        onPlay={handlePlay}
        onPause={handlePause}
        onEnded={handlePause}
      /> */}

      <div className="flex flex-row items-end md:items-center justify-end gap-2 md:gap-5 mb-5">
        <h4 className="text-right font-thin md:font-normal text-sm md:text-base text-blue">
          {ayath?.numberInSurah}
        </h4>
        <p className="font-noorehuda max-w-11/12 text-2xl md:text-3xl font-normal text-right">
          {ayath.text}
        </p>
      </div>

      <div>
        <p className="font-notoSerifBengali text-base md:text-xl font-normal md:font-medium">
          {bangla || "Loading translation..."}
        </p>
      </div>
    </div>
  );
};

export default Ayath;
