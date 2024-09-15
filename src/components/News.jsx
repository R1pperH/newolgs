import { useEffect, useState } from "react";
import { nanoid } from "nanoid";
import "./news.css";
import NewsModal from "./NewsModal";

export default function News({ getSearch, resetQuery }) {
  const [news, setNews] = useState([]);
  const [category, setCategories] = useState("general");
  const [modal, setModal] = useState([]);

  console.log(getSearch);

  const categories = [
    "general",
    "world",
    "technology",
    "science",
    "history",
    "sports",
  ];

  useEffect(() => {
    let url = `https://gnews.io/api/v4/top-headlines?category=${category}&lang=en&apikey=f6392cbd575bee8d4ac0f3ee93d9f301`;

    if (getSearch) {
      url = `https://gnews.io/api/v4/search?q=${getSearch}&apikey=f6392cbd575bee8d4ac0f3ee93d9f301`;
    }

    fetch(url)
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
                ...data.articles.slice(1, 7).map((article) => ({
                  id: nanoid(),
                  ...article,
                })),
              ],
            },
          ];
        })
      );
  }, [category, getSearch]);

  function handleCategories(category) {
    setCategories(category);
    if (getSearch) {
      resetQuery(); // Reset the search query in the parent component
    }
  }

  const outputNews = news.map((currArticle) => {
    return currArticle.rest.map((news) => {
      return (
        <div
          key={news.id}
          className="rest-news-content"
          onClick={() => handleModal(news)}
        >
          <img src={news.image} alt={news.title} className="rest-img" />
          <h3>{news.title}</h3>
        </div>
      );
    });
  });

  function handleModal(news) {
    const modalNews = news;
    // console.log(modalNews);
    setModal(modalNews);
  }

  // console.log(modal);

  return (
    <>
      <div className="news-content">
        <div className="news-category">
          {categories.map((currCategory) => {
            return (
              <h3
                key={currCategory}
                className="categories"
                onClick={() => handleCategories(currCategory)}
              >
                {currCategory}
              </h3>
            );
          })}
          <h3 className="categories">Bookmark</h3>
        </div>
        <div className="news">
          <div className="news-main">
            {news.map((currArticle) => {
              return (
                <div
                  key={currArticle.main.id}
                  className="main-news-container"
                  onClick={() => handleModal(currArticle.main)}
                >
                  <img
                    src={currArticle.main.image}
                    alt={currArticle.main.title}
                    className="main-img"
                  />
                  <h3>{currArticle.main.title}</h3>
                </div>
              );
            })}
          </div>
          {outputNews}
        </div>
        <NewsModal setModal={modal} />
      </div>
    </>
  );
}
