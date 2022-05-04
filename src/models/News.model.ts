import { SourceModel } from "./NewsSource.model";

export interface NewsModel {
  source: SourceModel;
  author: string;
  title: string;
  description: string;
  url: string;
  urlToImage: string;
  publishedAt: Date;
  content: string;
}
