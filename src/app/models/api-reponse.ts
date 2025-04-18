export type YoutubeSearchResponse = {
  kind: string;
  etag: string;
  nextPageToken?: string;
  regionCode: string;
  pageInfo: {
    totalResults: number;
    resultsPerPage: number;
  };
  items: YoutubeSearchItem[];
};

export type YoutubeThumbnail = {
  url: string;
  width?: number;
  height?: number;
};

export type YoutubeThumbnails = {
  default: YoutubeThumbnail;
  medium?: YoutubeThumbnail;
  high?: YoutubeThumbnail;
};

export type YoutubeSnippet = {
  publishedAt: string;
  channelId: string;
  title: string;
  description: string;
  thumbnails: YoutubeThumbnails;
  channelTitle: string;
  liveBroadcastContent: string;
  publishTime: string;
};

export type YoutubeVideoId = {
  kind: string;
  videoId: string;
};

export type YoutubeSearchItem = {
  kind: string;
  etag: string;
  id: YoutubeVideoId;
  snippet: YoutubeSnippet;
};
