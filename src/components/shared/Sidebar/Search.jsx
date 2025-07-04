import { useContext } from "react";
import { IoSearch } from "react-icons/io5";
import { SurahContext } from "../../../context/SurahProvider";

const Search = () => {
  const { handleSearchQurah } = useContext(SurahContext);

  return (
    <div className="mb-1 md:mb-5 rounded-md relative w-full bg-[#f1f1f1]">
      <input
        onChange={(e) => handleSearchQurah(e.target.value)}
        type="text"
        className=" w-full border-0 outline-0 p-2 placeholder:text-[#a3a3a3] pl-10"
        placeholder="Search Surah"
      />
      <button className="text-2xl absolute font-light -translate-y-1/2 left-2 textg-[#313131] top-1/2">
        <IoSearch />
      </button>
    </div>
  );
};
export default Search;
