package com.seattlehourly.backend.utils;

import java.time.Duration;
import java.time.Instant;

public class TimeUtils {

    public static String formatTimeAgo(long createdUtc) {
        Instant created = Instant.ofEpochSecond(createdUtc);
        long minutes = Duration.between(created, Instant.now()).toMinutes();

        if (minutes < 1) return "just now";
        if (minutes == 1) return "1 min ago";
        if (minutes < 60) return minutes + " mins ago";

        long hours = minutes / 60;
        if (hours == 1) return "1 hour ago";
        return hours + " hours ago";
    }
}
