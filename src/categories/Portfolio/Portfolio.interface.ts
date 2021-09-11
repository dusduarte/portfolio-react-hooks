export interface IPortfolioData {
  portfolio: IPortfolio[];
}

export interface IPortfolio {
  id: number;
  urlSite: string;
  galleries: string[];
}

export interface ICarouselImage {
  title: string;
  url: string;
}
