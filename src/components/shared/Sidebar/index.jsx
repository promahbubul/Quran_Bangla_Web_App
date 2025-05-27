import Search from "./Search";
import SurahList from "./SurahList";

const Sidebar = () => {
  
  return (
    <div className="w-full md:w-3/12 p-2 pb-0 md:pb-5 md:p-5 md:h-full border-r border-r-slate-300 ">
      <Search />
      <SurahList />
    </div>
  );
};
export default Sidebar;
