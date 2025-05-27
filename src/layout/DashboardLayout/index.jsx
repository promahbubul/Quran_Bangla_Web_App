import { Outlet, useNavigation } from "react-router-dom";
import { Sidebar, TopHeader } from "../../components/shared";
import ReactLoading from "react-loading";
import { RevolvingDot } from "react-loader-spinner";
import { Oval } from "react-loader-spinner";

const DashboardLayout = () => {
  const navigation = useNavigation();
  return (
    <div className="max-w-7xl mx-auto h-screen">
      <TopHeader />
      <div className="flex flex-col md:flex-row items-start h-[calc(100vh-77px)]    md:h-[calc(100vh-98px)]">
        <Sidebar surah />
        {navigation.state === "loading" ? (
          <div className="w-full h-[calc(100vh-98px)]  flex justify-center items-center">
            <Oval
              visible={true}
              height="80"
              width="80"
              color="#268cfc"
              ariaLabel="oval-loading"
              wrapperStyle={{}}
              wrapperClass=""
              secondaryColor="gray"
            />
          </div>
        ) : (
          <Outlet />
        )}
      </div>
    </div>
  );
};
export default DashboardLayout;
