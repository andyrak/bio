export default function handler(request, response) {
  response.status(200).json({
    "subject": "acct:andyrak@mastodon.social",
    "aliases":
    [
        "https://mastodon.social/@andyrak",
        "https://mastodon.social/users/andyrak"
    ],
    "links":
    [
        {
            "rel": "http://webfinger.net/rel/profile-page",
            "type": "text/html",
            "href": "https://mastodon.social/@andyrak"
        },
        {
            "rel": "self",
            "type": "application/activity+json",
            "href": "https://mastodon.social/users/andyrak"
        },
        {
            "rel": "http://ostatus.org/schema/1.0/subscribe",
            "template": "https://mastodon.social/authorize_interaction?uri={uri}"
        }
    ]
  });
}