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
        loader: async ({ params }) => {
          const [arabicSurah, audioSurah, banglaSurah] = await Promise.all([
            fetch(
              `https://api.alquran.cloud/v1/surah/${params.surahNumber}/quran-simple`
            ),
            fetch(
              `https://api.alquran.cloud/v1/surah/${params.surahNumber}/ar.alafasy`
            ),
            fetch(
              `https://api.alquran.cloud/v1/surah/${params.surahNumber}/bn.bengali`
            ),
          ]);
          if (!arabicSurah.ok || !audioSurah.ok) {
            throw new Response("Failed to load surah data", { status: 500 });
          }
          const audio = await audioSurah.json();
          const surah = await arabicSurah.json();
          const bangla = await banglaSurah.json();
          return { surah, audio, bangla };
        },
      },
    ],
  },
]);

export default router;
