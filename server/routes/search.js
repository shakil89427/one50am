const express = require("express");
const router = express.Router();
const axios = require("axios");
const Twitter = require("twitter");

router.post("/search/youtube", async (req, res) => {
  try {
    const response1 = await axios.get("https://www.googleapis.com/youtube/v3/search", {
      params: {
        q: req.body.username,
        type: "channel",
        channelType: "any",
        maxResults: 1,
        order: "rating",
        part: "id",
        key: process.env.YOUTUBE_API_KEY,
      },
    });

    const response2 = await axios.get("https://www.googleapis.com/youtube/v3/channels", {
      params: {
        id: response1.data.items[0].id.channelId,
        part: "snippet,statistics",
        key: process.env.YOUTUBE_API_KEY,
      },
    });

    const response3 = await axios.get("https://www.googleapis.com/youtube/v3/search", {
      params: {
        part: "id",
        channelId: response1.data.items[0].id.channelId,
        maxResults: 12,
        order: "date",
        type: "video",
        key: process.env.YOUTUBE_API_KEY,
      },
    });

    if (response3?.data?.items?.length > 0) {
      const videoIds = response3.data.items.map((item) => item.id.videoId);
      const response4 = await axios.get("https://www.googleapis.com/youtube/v3/videos", {
        params: {
          part: "snippet,statistics,player,contentDetails",
          id: videoIds.toString(),
          key: process.env.YOUTUBE_API_KEY,
        },
      });
      res.send({
        ...response2.data.items[0],
        videos: response4.data.items,
      });
    } else {
      res.send({ ...response2.data.items[0], videos: [] });
    }
  } catch (err) {
    res.status(404).send("Oh, something went wrong");
  }
});

router.post("/search/twitter", async (req, res) => {
  try {
    const client = new Twitter({
      consumer_key: process.env.TWITTER_CONSUMER_KEY,
      consumer_secret: process.env.TWITTER_CONSUMER_SECRET,
      access_token_key: process.env.TWITTER_ACCESS_TOKEN_KEY,
      access_token_secret: process.env.TWITTER_ACCESS_TOKEN_SECRET,
    });
    const response = await client.get("users/search.json", {
      q: req.body.username,
      count: 1,
    });
    const response1 = await client.get(`https://api.twitter.com/2/users/${response[0].id_str}`, {
      "user.fields":
        "description,entities,id,location,name,pinned_tweet_id,profile_image_url,protected,public_metrics,url,username,verified,withheld",
    });
    const response2 = await client.get(
      `https://api.twitter.com/2/users/${response[0].id_str}/tweets`,
      {
        expansions: "attachments.media_keys",
        "media.fields": "media_key,type,url",
        "tweet.fields": "attachments,created_at,public_metrics",
        max_results: 50,
      }
    );
    res.send({
      ...response1.data,
      tweets: response2?.data || [],
      media: response2?.includes?.media || [],
    });
  } catch (err) {
    res.status(404).send("Oh, something went wrong");
  }
});

module.exports = router;
