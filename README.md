[![Build Status](https://travis-ci.org/Consdata/foxy-news.svg?branch=master)](https://travis-ci.org/Consdata/foxy-news)

### Setting up slack signing secret and bot token

```
$ firebase functions:config:set slack.signingsecret="SIGNING_SECRET"
$ firebase functions:config:set slack.bottoken="BOT_OAUTH_TOKEN"
```

### Setting up slack channel for new links notifications

```
$ firebase functions:config:set foxy.channel-tech="CHANNEL"
$ firebase functions:config:set foxy.channel-biz="CHANNEL"
```

### Setting up webapp url for slack notifications

```
$ firebase functions:config:set webapp.url="WEBAPP_URL"
```
