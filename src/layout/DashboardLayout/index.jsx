import { Outlet, useNavigation } from "react-router-dom";
import { Sidebar, TopHeader } from "../../components/shared";

const DashboardLayout = () => {
  const navigation = useNavigation();
  return (
    <div className="max-w-7xl mx-auto">
      <TopHeader />
      <div className="flex flex-row items-start  h-[calc(100vh-98px)]">
        <Sidebar surah />
        {navigation.state === "loading" ? (
          <h1 className="text-2xl font-medium">Loading....</h1>
        ) : (
          <Outlet />
        )}
      </div>
    </div>
  );
};
export default DashboardLayout;
