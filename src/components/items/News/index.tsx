import { NewsModel } from "models/News.model";
import React from "react";
import moment from "moment";

type Props = {
  news: NewsModel;
  imageHeight?: number;
};

const News = ({ imageHeight = 32, ...props }: Props) => {
  return (
    <a
      href={props.news.url}
      target="_blank"
      rel="noopener noreferrer"
      className="cursor-pointer">
      <img
        src={props.news.urlToImage}
        className={`w-full h-${imageHeight}`}
        alt=""
      />
      <p className="news-title text-ellipsis whitespace-nowrap my-2 overflow-hidden font-semibold leading-4">
        {props.news.title}
      </p>
      <p className="h-16 overflow-hidden text-xs font-semibold leading-4">
        {props.news.description}
        <span className="text-xs text-gray-400">
          {`  ${moment(props.news.publishedAt).fromNow()}`}
        </span>
      </p>
      {/* <p >{props.news.source.name}</p> */}
      <div className="h-[1px] bg-gray-200 my-2"></div>
    </a>
  );
};

export default News;
