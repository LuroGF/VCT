export interface NewsSegment {
    title: string;
    description: string;
    date: string;
    author: string;
    url_path: string;
  }
  
  export interface NewsResponse {
    data: {
      status: number;
      segments: NewsSegment[];
    };
  }