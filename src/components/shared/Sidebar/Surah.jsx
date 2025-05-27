/* eslint-disable no-unused-vars */
import { NavLink, useParams } from "react-router-dom";

const Surah = ({ surah }) => {
  const { surahNumber } = useParams();
  return (
    <NavLink
      to={`/surah/${surah?.number}`}
      key={surah?.number}
      className={({ isActive }) =>
        surah?.number == surahNumber
          ? "flex min-w-[140px] md:w-full cursor-pointer flex-col md:flex-row  border-1 duration-500 bg-lightBlue border-blue  rounded-md gap-1 md:gap-2 p-2 h-full"
          : "flex min-w-[140px] md:w-full  cursor-pointer flex-col md:flex-row  border-1 duration-500 hover:bg-lightBlue hover:border-blue border-lightGray rounded-md gap-1 md:gap-2 p-2 h-full"
      }
    >
      <h1 className="md:bg-blue md:w-10 md:h-10 text-xl text-blue md:text-white rounded-full flex justify-center items-center font-semibold">
        {surah?.number}
      </h1>
      <div className="">
        <h1 className="text-base text-center md:text-left  md:text-lg font-roboto md:font-medium text-black">
          {surah?.englishName}
        </h1>
        <p className="text-gray hidden md:block text-sm font-roboto font-normal">
          {surah?.englishNameTranslation} - {surah?.numberOfAyahs}
        </p>
      </div>
    </NavLink>
  );
};
export default Surah;
