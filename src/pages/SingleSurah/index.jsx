import { useLoaderData } from "react-router-dom";
import Header from "../../components/SingleSurah/Header";
import Ayath from "../../components/SingleSurah/Ayath";
import { Helmet } from "react-helmet";

const SingleSurah = () => {
  const surah = useLoaderData().data;

  console.log(surah);

  return (
    <div className="w-full md:w-9/12 p-2 md:p-5 h-[calc(100%-114px)] md:h-full  ">
      <Helmet>
        <title>
          Surah {surah?.number} - {surah?.englishName}
        </title>
        <meta
          name="description"
          content={`Read Surah ${surah?.englishName} online with Bangla translation`}
        />
        <link
          rel="canonical"
          href={`https://alquran-bangla-web-app.vercel.app/surah/${surah?.number}`}
        />
      </Helmet>
      <Header
        ayath={surah?.numberOfAyahs}
        surahNumber={surah?.number}
        name={surah?.name}
        englishName={surah?.englishName}
        meanning={surah?.englishNameTranslation}
      />
      <div className="h-[calc(100%-86px)]  md:h-[calc(100%-122px)] overflow-y-auto">
        {surah?.ayahs?.map((ayath) => (
          <Ayath key={ayath?.number} ayath={ayath} />
        ))}
      </div>
    </div>
  );
};
export default SingleSurah;
