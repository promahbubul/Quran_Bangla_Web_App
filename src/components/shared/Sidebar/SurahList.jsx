import { useContext } from "react";
import { SurahContext } from "../../../context/SurahProvider";
import Surah from "./Surah";

const SurahList = () => {
  const { surahs } = useContext(SurahContext);

  console.log("Surah Length;:", surahs.length);
  return (
    <div className="space-y-2 md:h-[calc(100%-60px)]  flex flex-row gap-1 md:gap-2 md:flex-col overflow-y-auto">
      {surahs?.length > 0 ? (
        surahs?.map((surah) => <Surah key={surah?.number} surah={surah} />)
      ) : (
        <h1 className="text-base w-full  md:text-lg font-bold text-center underline text-blue">
          No surah found. <br className="hidden md:block" /> please search by 1
          - 114
        </h1>
      )}
    </div>
  );
};
export default SurahList;
