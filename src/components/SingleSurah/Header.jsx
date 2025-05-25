const Header = ({ name, englishName, ayath, meanning, surahNumber }) => {
  return (
    <div className="from-blue/ to-blue/40 bg-gradi rounded-md border border-blue  ent-from-tl bg-gradient-to-br font-roboto p-5 font-semibold w-full mb-1 flex flex-row items-center justify-between">
      <div className="">
        <h1 className="text-xl">
          {englishName} -{" "}
          <span className="font-notoNaskhArebic text-3xl font-bold text-blue">
            {name}
          </span>{" "}
        </h1>
        <p className="text-gray font-normal text-base">
          {meanning} - {ayath}
        </p>
      </div>
      <h1 className="w-12 h-12 rounded-md bg-blue text-2xl text-white justify-center items-center flex">
        {surahNumber}
      </h1>
    </div>
  );
};
export default Header;
