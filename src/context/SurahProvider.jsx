import { useState } from "react";
import { useEffect } from "react";
import { createContext } from "react";

// eslint-disable-next-line react-refresh/only-export-components
export const SurahContext = createContext(null);

const SurahProvider = ({ children }) => {
  const [surahs, setSurahs] = useState([]);

  const handleSearchQurah = (surahNumber) => {
    if (surahNumber) {
      fetch(`https://api.alquran.cloud/v1/surah/${surahNumber}/quran-simple`)
        .then((res) => res.json())
        .then((data) => {
          if (data.code == 200) {
            return setSurahs([data.data]);
          }
          setSurahs([]);
        })
        .catch((err) => console.error(err));
    } else {
      fetch("https://api.alquran.cloud/v1/surah")
        .then((res) => res.json())
        .then((data) => setSurahs(data.data));
    }
  };

  useEffect(() => {
    fetch("https://api.alquran.cloud/v1/surah")
      .then((res) => res.json())
      .then((data) => setSurahs(data.data));
  }, []);
  const surahValue = { surahs, setSurahs, handleSearchQurah };
  return (
    <SurahContext.Provider value={surahValue}>{children}</SurahContext.Provider>
  );
};

export default SurahProvider;
