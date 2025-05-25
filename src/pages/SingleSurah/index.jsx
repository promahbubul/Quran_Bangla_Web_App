import { useLoaderData } from "react-router-dom";
import Header from "../../components/SingleSurah/Header";
import Ayath from "../../components/SingleSurah/Ayath";

const SingleSurah = () => {
  const surah = useLoaderData().data;
  
  return (
    <div className="w-9/12 p-5 h-[calc(100vh-98px)]  ">
      <Header
        ayath={surah?.numberOfAyahs}
        surahNumber={surah?.number}
        name={surah?.name}
        englishName={surah?.englishName}
        meanning={surah?.englishNameTranslation}
      />
      <div className="h-[calc(100%-122px)] overflow-y-auto">
        {surah?.ayahs?.map((ayath) => (
          <Ayath key={ayath?.number} ayath={ayath} />
        ))}
      </div>
    </div>
  );
};
export default SingleSurah;
