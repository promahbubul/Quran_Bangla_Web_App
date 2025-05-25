import Search from "./Search";
import SurahList from "./SurahList";

const Sidebar = () => {
  
  return (
    <div className="w-3/12 p-5 h-full border-r border-r-slate-300">
      <Search />
      <SurahList  />
    </div>
  );
};
export default Sidebar;
