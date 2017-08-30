# Tournament King

## API
#### Tournaments
###### GET /api/tournaments
```javascript
[{
	"id": 2,
	"name" : "Nick's Tourney",
	"type" : "ping-pong",
	"active" : false
},
{
	"id": 4,
	"name" : "White Owl Pool Tournament",
	"type" : "pool",
	"active" : true
},
{
	"id": 5,
	"name" : "Lebron's Basketball Tournament",
	"type" : "basketball",
	"active" : true
}]
```
##### GET /api/tournament/:id
```javascript
{
	"id": 1,
	"name": "basketball tournament",
	"type": "basketball",
	"active" : true,
	"rounds": [
		[{
			"id": 1,
			"player1": 1,
			"player2" : 2,
			"player1_score" : 12,
			"player2_score" : 25,
			"active" : false,
			"winner" : 2
		},
		{
			"id": 2,
			"player1": 3,
			"player2" : 4,
			"player1_score" : 13,
			"player2_score" : 26,
			"active" : true,
			"winner" : null
		},
		{
			"id": null,
			"player1": 5,
			"player2" : 6,
			"player1_score" : null,
			"player2_score" : null,
			"active" : false,
			"winner" : null
		},
		{
			"id": null,
			"player1": 7,
			"player2" : 8,
			"player1_score" : null,
			"player2_score" : null,
			"active" : false,
			"winner" : null
		}],
		[{
			"id": null,
			"player1": 2,
			"player2" : null,
			"player1_score" : null,
			"player2_score" : null,
			"active" : false,
			"winner" : null
		},
		{
			"id": null,
			"player1": null,
			"player2" : null,
			"player1_score" : null,
			"player2_score" : null,
			"active" : false,
			"winner" : null
		}],
		[{
			"id": null,
			"player1": null,
			"player2" : null,
			"player1_score" : null,
			"player2_score" : null,
			"active" : false,
			"winner" : null
		}]
	]
}
```
##### POST /api/tournament
```javascript
{
  "name" : "Red's Pool Tournament",
  "type" : "pool",
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
###### GET /api/search?keywords=basketball
```javascript
[{
	"id": 2,
	"name" : "Nick's Tourney",
	"type" : "basketball",
	"active" : false
},
{
	"id": 4,
	"name" : "The Backyard",
	"type" : "basketball",
	"active" : true
},
{
	"id": 5,
	"name" : "Grandma's Basketball Tournament",
	"type" : "basketball",
	"active" : true
}]
```
#### Users
###### GET /api/user/:id
```javascript
{
  "id" : 1,
  "auth0_id" : "auth0|5993ce2c15c5c05d1b5de9e1",
  "email" : "yellowbird@gmail.com",
  "profile_pic" : "http://i.imgur.com/8hV3Gmu.jpg",
  "name": "Yellow Bird",
  "username" : "YellowBird"
}
```
###### POST /api/user
```javascript
{
  "auth0_id" : "auth0|5993ce2c15c5c05d1b5de9e1",
  "email" : "yellowbird@gmail.com",
  "profile_pic" : "http://i.imgur.com/8hV3Gmu.jpg",
  "name": "Yellow Bird",
  "username" : "YellowBird"
}
```
#### Matches
###### GET /api/match/:id
```javascript
{
  "id": 1,
  "tournament_id" : 2,
	"type" : "ping-pong",
  "player1" : {
    "id" : 1,
    "name" : "YellowBird"
  },
  "player2" : {
    "id" : null,
    "name" : "GreenMan"
  },
  "player1_score": 10,
  "player2_score": 12,
  "winner" : {
    "id" : null,
    "name" : "GreenMan"
  },
  "active" : false
}
```
###### POST /api/match
```javascript
{
  "tournament_id" : 1,
  "player1" : 3,
  "player2" : 4
}
```
###### PATCH /api/match/:id
```javascript
{
  "winner" : 3
}
```
#### Comments
###### GET /api/comments/:match_id
```javascript
[{
  "id" : 3,
  "text" : "Great match!",
  "timestamp" : "2017-08-16 04:09:20.617719",
  "user_id" : 4
},
{
  "id" : 4,
  "text" : "What an awesome match!",
  "timestamp" : "2017-08-16 04:09:20.617719",
  "user_id" : 4
},
{
  "id" : 5,
  "text" : "Player1 Rules!",
  "timestamp" : "2017-08-16 04:09:20.617719",
  "user_id" : 4
}]
```
###### POST /api/comments/:match_id
```javascript
{
  "text" : "Great match!"
}
```
