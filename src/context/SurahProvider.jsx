import { useState } from "react";
import { useEffect } from "react";
import { createContext } from "react";

// eslint-disable-next-line react-refresh/only-export-components
export const SurahContext = createContext(null);

const SurahProvider = ({ children }) => {
  const [surahs, setSurahs] = useState([]);

  const handleSearchQurah = (searchSura) => {
    fetch("https://api.alquran.cloud/v1/surah")
      .then((res) => res.json())
      .then((data) => {
        const result = data?.data?.filter((sura) =>
          sura?.englishName?.toLowerCase().includes(searchSura?.toLowerCase())
        );
        setSurahs(result);
      })
      .catch((err) => console.log(err));
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
