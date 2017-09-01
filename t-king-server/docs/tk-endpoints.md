# Tournament King

## API
#### Tournaments
###### GET /api/tournaments
```javascript
[{
	"id": 2,
	"name" : "Nick's Tourney",
	"type" : "ping-pong",
	"active" : false,
	"creator": 2
},
{
	"id": 4,
	"name" : "White Owl Pool Tournament",
	"type" : "pool",
	"active" : true,
	"creator": 2
},
{
	"id": 5,
	"name" : "Lebron's Basketball Tournament",
	"type" : "basketball",
	"active" : true,
	"creator": 2
}]
```
##### GET /api/tournament/:id
```javascript
{
    "id": 22,
    "name": "Bob's Tournament",
    "type": "pool",
    "active": true,
    "creator": 2,
    "description": null,
    "rounds": [
        [
            {
                "id": 18,
                "player1": {
                    "id": 145,
                    "user_id": null,
                    "name": "bob"
                },
                "player2": {
                    "id": 146,
                    "user_id": null,
                    "name": "bob"
                },
                "player1_score": 55,
                "player2_score": 55,
                "winner": {
                    "id": 146,
                    "user_id": null,
                    "name": "bob"
                },
                "active": false,
                "ready": false
            },
            {
                "id": 19,
                "player1": {
                    "id": 147,
                    "user_id": null,
                    "name": "James"
                },
                "player2": {
                    "id": 148,
                    "user_id": null,
                    "name": "Jenny"
                },
                "player1_score": 55,
                "player2_score": 55,
                "winner": {
                    "id": 148,
                    "user_id": null,
                    "name": "Jenny"
                },
                "active": false,
                "ready": false
            },
            {
                "id": 20,
                "player1": {
                    "id": 149,
                    "user_id": null,
                    "name": "bob"
                },
                "player2": {
                    "id": 150,
                    "user_id": null,
                    "name": "bob"
                },
                "player1_score": null,
                "player2_score": null,
                "winner": null,
                "active": false,
                "ready": true
            },
            {
                "id": 21,
                "player1": {
                    "id": 151,
                    "user_id": null,
                    "name": "Jeremy"
                },
                "player2": {
                    "id": 152,
                    "user_id": null,
                    "name": "Brian"
                },
                "player1_score": null,
                "player2_score": null,
                "winner": null,
                "active": false,
                "ready": true
            }
        ],
        [
            {
                "id": 22,
                "player1": {
                    "id": 146,
                    "user_id": null,
                    "name": "bob"
                },
                "player2": {
                    "id": 148,
                    "user_id": null,
                    "name": "Jenny"
                },
                "player1_score": null,
                "player2_score": null,
                "winner": null,
                "active": false,
                "ready": true
            },
            {
                "id": 23,
                "player1": null,
                "player2": null,
                "player1_score": null,
                "player2_score": null,
                "winner": null,
                "active": false,
                "ready": false
            }
        ],
        [
            {
                "id": 24,
                "player1": null,
                "player2": null,
                "player1_score": null,
                "player2_score": null,
                "winner": null,
                "active": false,
                "ready": false
            }
        ]
    ]
}
```
##### POST /api/tournament
```javascript
{
  "name" : "Red's Pool Tournament",
  "type" : "pool",
	"description" : "Awesome pool tournament",
  "players" :
  [{
    "user_id" : 1,
    "name" : null
  },
  {
    "user_id" : 2,
    "name" : null
  },
  {
    "user_id" : null,
    "name" : "James"
  },
  {
    "user_id" : null,
    "name" : "Jenny"
  },
  {
    "user_id" : 3,
    "name" : null
  },
  {
    "user_id" : 4,
    "name" : null
  },
  {
    "user_id" : null,
    "name" : "Jeremy"
  },
  {
    "user_id" : null,
    "name" : "Brian"
  }]
}
```
#### Search
###### GET /api/search/users?name='clayton'
```javascript
[
    {
        "id": 1,
        "auth0_id": "google-oauth2|11454545453472115",
        "email": "clayton@gmail.com",
        "profile_pic": "https://lh3.googleusercontent.com/-JjWi8k4-76g/AAAAAAAAAAI/AAAAAAAAAtU/yFrbzDnIaCE/photo.jpg",
        "name": "Clayton",
        "username": null
    }
]
```

#### Matches
###### GET /api/match/:id
```javascript
{
    "id": 18,
    "creator": 2
}
```
#### Comments
###### GET /api/comments/:match_id
```javascript
[{
    "id": 2,
    "text": "Hello",
    "match_id": 18,
    "user_id": 2,
    "timestamp": "2017-09-01T12:03:57.355Z"
},
{
    "id": 3,
    "text": "HelloThere",
    "match_id": 18,
    "user_id": 2,
    "timestamp": "2017-09-01T12:03:57.355Z"
}]
```
###### POST /api/comments
```javascript
{
	"match_id" : 3,
  "text" : "Great match!"
}
```
