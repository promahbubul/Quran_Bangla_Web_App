import { createBrowserRouter } from "react-router-dom";
import DashboardLayout from "../layout/DashboardLayout";
import { ErrorPage, HomePage } from "../pages";
import SingleSurah from "../pages/SingleSurah";

const router = createBrowserRouter([
  {
    path: "/",
    element: <DashboardLayout />,
    loader: () => fetch("/api/surah"),
    errorElement: <ErrorPage />,
    children: [
      { path: "", element: <HomePage /> },
      {
        path: "/surah/:surahNumber",
        element: <SingleSurah />,
        loader: ({ params }) =>
          fetch(
            `/api/surah/${params.surahNumber}`
          ),
      },
    ],
  },
]);

export default router;
