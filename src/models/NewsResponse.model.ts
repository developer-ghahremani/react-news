export interface NewsResponse<T> {
  status: string;
  totalResults: number;
  articles: T;
}
