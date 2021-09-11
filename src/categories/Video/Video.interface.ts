export interface IYoutubeRequest {
  part: string;
  channelId: string;
  key: string;
  maxResults: number;
  type: string;
  order: string;
}

export interface IVideoYoutube {
  id: string;
  king: string;
  etag: string;
  snippet: {
    publishedAt: Date;
    channelId: string;
    title: string;
    description: string;
    thumbnails: {
      default: {
        url: string;
      };
      medium: {
        url: string;
      };
      high: {
        url: string;
      };
    };
    categoryId: number;
  };
  contentDetails: {
    duration: string;
    aspectRatio: string;
  };
  statistics: {
    viewCount: string;
    likeCount: string;
    dislikeCount: string;
    favoriteCount: string;
    commentCount: string;
  };
  status: {
    uploadStatus: string;
    privacyStatus: string;
  };
}

export interface IYoutubeResponse {
  king: string;
  etag: string;
  items: IVideoYoutube[];
}
export interface IVideo {
  title: string;
  url: string;
}
