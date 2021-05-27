- setup firebase project with billing and upgrade to paid plan
- select firebase project via `firebase use --add`
- setup email authentication method:
    * `https://console.firebase.google.com/project/{project-id}/authentication/providers`
- setup config env
```
firebase functions:config:set slack.signingsecret="SIGNING_SECRET"
firebase functions:config:set slack.bottoken="BOT_OAUTH_TOKEN"
firebase functions:config:set webapp.url="WEBAPP_URL"
firebase functions:config:set foxy.channel-tech="WEBAPP_URL"
firebase functions:config:set foxy.channel-biz="WEBAPP_URL"
```
- `firebase deploy`
- create .local.env file with firebase connection details
- run locally with yarn
