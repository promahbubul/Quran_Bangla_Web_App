/* eslint-disable react-hooks/exhaustive-deps */
import { useState, useEffect } from "react";
import { useInView } from "react-intersection-observer";

const banglaAyahCache = {}; // Simple cache

const Ayath = ({ ayath }) => {
  const { ref, inView } = useInView({ triggerOnce: true });
  const [banglaAyath, setBanglaAyath] = useState();

  useEffect(() => {
    if (inView && !banglaAyath) {
      const cached = banglaAyahCache[ayath.number];
      if (cached) {
        setBanglaAyath(cached);
      } else {
        fetch(`/api/ayah/${ayath?.number}/bn.bengali`)
          .then((res) => res.json())
          .then((data) => {
            banglaAyahCache[ayath.number] = data.data;
            setBanglaAyath(data.data);
          })
          .catch((err) => console.error("Fetch error:", err));
      }
    }
  }, [inView, ayath]);

  return (
    <div ref={ref} className="border-b border-b-silver p-5">
      {/* Arabic */}
      <div className="flex flex-row items-center justify-end gap-5 mb-5">
        <h4 className="text-right h-10 w-10 font-thin text-base bg-blue rounded-full flex justify-center items-center text-white">
          {ayath?.numberInSurah}
        </h4>
        <p className="font-amiriQuran  max-w-11/12 text-3xl font-extrabold text-right leading-loose">
          {ayath.text}
        </p>
      </div>

      {/* Bangla */}
      <div>
        <p className="font-notoSerifBengali text-xl font-medium">
          {banglaAyath?.text || "Loading translation..."}
        </p>
      </div>
    </div>
  );
};

export default Ayath;
