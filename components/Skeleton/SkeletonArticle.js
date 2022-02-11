import SkeletonElement from "./SkeletonElement";
import useDarkMode from "../Hooks/useDarkMode";
import SkeletonAnimations from "./SkeletonAnimations";
export default function SkeletonArticle () {
    const [colorTheme, setTheme] = useDarkMode();
  return (
    <div className=' relative my-5 bg-slate-100 p-5 dark:bg-gray-800 rounded-lg overflow-hidden' onChange={()=>setTheme(colorTheme)}>
        <div className='skeleton--article'>
            <SkeletonElement type={"title"}/>
            <SkeletonElement type={"text"}/>
            <SkeletonElement type={"text"}/>
            <SkeletonElement type={"text"}/>
        </div>
        <SkeletonAnimations/>
    </div>
  )
}
