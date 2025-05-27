import { createBrowserRouter } from "react-router-dom";
import DashboardLayout from "../layout/DashboardLayout";
import { ErrorPage, HomePage } from "../pages";
import SingleSurah from "../pages/SingleSurah";

const router = createBrowserRouter([
  {
    path: "/",
    element: <DashboardLayout />,
    loader: () => fetch("https://api.alquran.cloud/v1/surah"),
    errorElement: <ErrorPage />,
    children: [
      { path: "", element: <HomePage /> },
      {
        path: "/surah/:surahNumber",
        element: <SingleSurah />,
        loader: ({ params }) =>
          fetch(
            `https://api.alquran.cloud/v1/surah/${params.surahNumber}/quran-simple`
          ), // 1/ar.alafasy
      },
    ],
  },
]);

export default router;
