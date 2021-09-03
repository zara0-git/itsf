import news1 from "assets/img/news/news5.jpg";

import sob from "assets/img/advice/sob.jpg";
import elem from "assets/img/advice/elem.jpg";
import mid from "assets/img/advice/mid.jpg";
import sw from "assets/img/advice/sw.jpg";

export const NewsLists = [
  {
    Name: "Сургуулийн өмнөх боловсрол",
    Url: "/home/methodology/sob",
    img: [sob],
  },
  { Name: "Бага боловсрол", Url: "/home/methodology/elementary", img: [elem] },

  {
    Name: "Дунд, ахлах ангийн боловсрол",
    Url: "/home/methodology",
    img: [mid],
  },
  {
    Name: "Насан туршийн боловсрол",
    Url: "/home/methodology/llc",
    img: [news1],
  },
  {
    Name: "Сургуулийн нийгмийн ажилтан , дотуур байр",
    Url: "/home/methodology/social-worker",
    img: [sw],
  },
];
export const getNews = (id) => {
  return NewsLists.filter((s) => s.id === id)[0];
};
