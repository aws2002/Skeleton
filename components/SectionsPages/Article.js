import React from "react";
import SkeletonArticle from "../Skeleton/SkeletonArticle";
export default function Article() {
  const [article, setArticle] = React.useState(null);
  React.useEffect(() => {
    setTimeout(async () => {
      const rse = await fetch("https://jsonplaceholder.typicode.com/posts");
      const data = await rse.json();
      setArticle(data);
    }, 5000);
  }, []);
  return (
    <>
      <h1 className=" text-5xl font-bold mb-5">Article</h1>
      {article &&
        article.map((article) => (
          <div className="article my-5 p-5" key={article.id}>
            <h3 className=" text-xl font-bold">{article.title}</h3>
            <p>{article.body}</p>
          </div>
        ))}
      {!article && [1,2,3,4,5].map((n)=>(
          <SkeletonArticle key={n}/>
      ))
      }
    </>
  );
}
