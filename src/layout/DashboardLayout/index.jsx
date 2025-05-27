import { Outlet, useNavigation } from "react-router-dom";
import { Sidebar, TopHeader } from "../../components/shared";
import ReactLoading from "react-loading";
import { RevolvingDot } from "react-loader-spinner";
import { Oval } from "react-loader-spinner";
import Loading from "../../components/ui/Loading";

const DashboardLayout = () => {
  const navigation = useNavigation();
  return (
    <div className="max-w-7xl mx-auto h-screen">
      <TopHeader />
      <div className="flex flex-col md:flex-row items-start h-[calc(100vh-69px)]  md:h-[calc(100vh-98px)]">
        <Sidebar surah />
        {navigation.state === "loading" ? (
          <div className="w-full md:w-9/12 h-full">
            <Loading />
          </div>
        ) : (
          <Outlet />
        )}
      </div>
    </div>
  );
};
export default DashboardLayout;
