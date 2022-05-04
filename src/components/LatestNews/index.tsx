import {
  LatestNewsContext,
  latestNewsInitiaState,
  latestNewsReducer,
} from "./context";
import React, { useReducer } from "react";

import { NewsItem } from "components/items";
import Tags from "./Tags";
import { useGetTopHeadlineNewsQuery } from "store/news.service";
import { useI18Next } from "i18n";

type Props = { className?: string };

const LatestNews = (props: Props) => {
  const { t } = useI18Next();
  const [state, dispatch] = useReducer(
    latestNewsReducer,
    latestNewsInitiaState
  );

  const { data, isFetching, isError } = useGetTopHeadlineNewsQuery({
    q: state.tag?.value,
  });

  return (
    <LatestNewsContext.Provider value={{ state, dispatch }}>
      <div className={props.className}>
        <h1 className="text-5xl">{t("general.latestNews")}</h1>
        <Tags />

        <div className="latest-news-container animate__animated animate__slideInUp">
          <div className="md:order-1 order-2 col-span-1">
            {data?.articles.slice(0, 3).map((news) => (
              <NewsItem key={news.urlToImage} news={news} />
            ))}
          </div>
          <div className="md:order-2 md:col-span-2 order-1 col-span-1 bg-blue-900"></div>
          <div className="md:order-3 order-3 col-span-1">
            {data?.articles.slice(3, 6).map((news) => (
              <NewsItem key={news.urlToImage} news={news} />
            ))}
          </div>
        </div>
      </div>
    </LatestNewsContext.Provider>
  );
};

export default LatestNews;
