import { useEffect, useState } from "react";
import { nanoid } from "nanoid";
import "./news.css";

export default function News() {
  const [news, setNews] = useState([]);

  useEffect(() => {
    fetch(
      `https://gnews.io/api/v4/top-headlines?category=general&lang=en&apikey=f6392cbd575bee8d4ac0f3ee93d9f301`
    )
      .then((res) => res.json()) // Return the promise from res.json()
      .then((data) =>
        setNews(() => {
          return [
            {
              main: {
                id: nanoid(),
                ...data.articles[0],
              },
              rest: [
                ...data.articles.splice(1, 6).map((article) => ({
                  id: nanoid(),
                  ...article,
                })),
              ],
            },
          ];
        })
      );
  }, []);

  const outputNews = news.map((currArticle) => {
    return currArticle.rest.map((news) => {
      return (
        <div key={news.id}>
          <h3>{news.title}</h3>
        </div>
      );
    });
  });

  // console.log(outputNews);
  return (
    <>
      <div className="news-content">
        <div className="news-category">Category</div>
        <div className="news">
          <div className="news-main">
            {news.map((currArticle) => {
              return (
                <div key={currArticle.main.id}>
                  <h3>{currArticle.main.title}</h3>
                </div>
              );
            })}
          </div>

          {outputNews}
        </div>
      </div>
    </>
  );
}
