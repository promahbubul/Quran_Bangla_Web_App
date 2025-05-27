import { useContext } from "react";
import { SurahContext } from "../../../context/SurahProvider";
import Surah from "./Surah";

const SurahList = () => {
  const { surahs } = useContext(SurahContext);
  return (
    <div className="space-y-2 md:h-[calc(100%-60px)]  flex flex-row gap-1 md:gap-2 md:flex-col overflow-y-auto">
      {surahs.map((surah) => (
        <Surah key={surah?.number} surah={surah} />
      ))}
    </div>
  );
};
export default SurahList;
