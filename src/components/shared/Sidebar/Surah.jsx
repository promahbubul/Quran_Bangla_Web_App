/* eslint-disable no-unused-vars */
import { NavLink, useParams } from "react-router-dom";

const Surah = ({ surah }) => {
  const { surahNumber } = useParams();

  console.log(surahNumber);

  console.log(surah.number == surahNumber);
  return (
    <NavLink
      to={`/surah/${surah?.number}`}
      key={surah?.number}
      className={({ isActive }) =>
        surah?.number == surahNumber
          ? "flex  cursor-pointer flex-row  border-1 duration-500 bg-lightBlue border-blue  rounded-md gap-2 p-2"
          : "flex  cursor-pointer flex-row  border-1 duration-500 hover:bg-lightBlue hover:border-blue border-lightGray rounded-md gap-2 p-2"
      }
    >
      <h1 className="bg-blue w-10 h-10 text-xl text-white rounded-full flex justify-center items-center font-semibold">
        {surah?.number}
      </h1>
      <div className="">
        <h1 className="text-lg font-medium text-black">{surah?.englishName}</h1>
        <p className="text-gray text-sm font-roboto font-normal">
          {surah?.englishNameTranslation} - {surah?.numberOfAyahs}
        </p>
      </div>
    </NavLink>
  );
};
export default Surah;
