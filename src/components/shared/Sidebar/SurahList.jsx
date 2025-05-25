import { useContext } from "react";
import { SurahContext } from "../../../context/SurahProvider";
import Surah from "./Surah";

const SurahList = () => {
  const { surahs } = useContext(SurahContext);
  return (
    <div className="space-y-2 h-[calc(100%-60px)] overflow-y-auto">
      {surahs.map((surah) => (
        <Surah key={surah?.number} surah={surah} />
      ))}
    </div>
  );
};
export default SurahList;
