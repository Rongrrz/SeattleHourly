package com.seattlehourly.backend.config;

import java.util.List;

public class Constants {

    // RedditService
    public static final List<String> SUBREDDITS =
            List.of("udub", "Seattle", "SeattleWA", "Seahawks", "Mariners");

    // WeatherService
    public static final double SEATTLE_LAT = 47.6061;
    public static final double SEATTLE_LON = -122.3328;

    // Amount to return to client
    public static final int NEWS_COUNT = 6;
    public static final int REDDIT_COUNT = 6;
    public static final int REDDIT_UNIQUE_COUNT = 6;
}
