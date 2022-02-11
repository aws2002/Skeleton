import Article from "../components/SectionsPages/Article";
import User from "../components/SectionsPages/User";
import ToggleDarkMode from "../components/Tools/ToggleDarkMode";
export default function Home() {
  return (
    <div className=" bg-slate-900 dark:bg-white">
      <ToggleDarkMode />
      <div className=" container mt-14">
        <div className=" grid grid-cols-2 gap-14 mt-10">
          <div className=" md:col-span-1 col-span-2">
            <Article />
          </div>
          <div className=" md:col-span-1 col-span-2">
            <User />
          </div>
        </div>
      </div>
    </div>
  );
}
