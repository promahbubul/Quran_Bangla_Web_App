import { useState } from "react";
import { useEffect } from "react";
import { createContext } from "react";

// eslint-disable-next-line react-refresh/only-export-components
export const SurahContext = createContext(null);

const SurahProvider = ({ children }) => {
  const [surahs, setSurahs] = useState([]);
  // const surahList = useLoaderData();

  useEffect(() => {
    fetch("http://api.alquran.cloud/v1/surah")
      .then((res) => res.json())
      .then((data) => setSurahs(data.data));
  }, []);
  const surahValue = { surahs, setSurahs };
  return (
    <SurahContext.Provider value={surahValue}>{children}</SurahContext.Provider>
  );
};

export default SurahProvider;
