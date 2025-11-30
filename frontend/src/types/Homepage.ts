export type RedditPost = {
  title: string;
  subreddit: string;
  comments: number;
  url: string;
};

export type NewsPost = {
  title: string;
  source: string;
  url: string;
};

export type WeatherSummary = {
  temperature: number;
  windMPH: number;
  rainChance: number;
};

export type Mood = {
  emoji: string;
  description: string;
};
