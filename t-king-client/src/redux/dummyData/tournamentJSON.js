export const tournamentJSON = {
	"id": 1,
	"name": "basketball tournament",
	"type": "basketball",
	"active" : true,
	"rounds": [
		[{}, {}, {}, {}, {}, {}, {}, {}, {}, {}, {}, {},
			
		{
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
		[ {}, {}, {}, {}, {}, {},
			
		{
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
		[{}, {}, {
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
		[{}, {
			"id": null,
			"player1": null,
			"player2" : null,
			"player1_score" : null,
			"player2_score" : null,
			"active" : false,
			"winner" : null
		}], [{}]
	]
}

export const tournamentJSONnew = {
	"id": 1,
	"name": "basketball tournament",
	"type": "basketball",
	"active" : true,
	"rounds": [
		[
			{
				"id": 2,
				"player1": {
					"id": 9,
					"tournament_id": 5,
					"position": 1,
					"user_id": 1,
					"name": null
				},
				"player2": {
					"id": 10,
					"tournament_id": 5,
					"position": 2,
					"user_id": null,
					"name": "Rodney"
				},
				"winner": {
					"id": 10,
					"tournament_id": 5,
					"position": 2,
					"user_id": null,
					"name": "Rodney"
				},
				"player1_score": 50,
				"player2_score": null,
				"active": null
			},
			{
				"id": 3,
				"player1": {
					"id": 11,
					"tournament_id": 5,
					"position": 3,
					"user_id": null,
					"name": "James"
				},
				"player2": {
					"id": 12,
					"tournament_id": 5,
					"position": 4,
					"user_id": null,
					"name": "Jenny"
				},
				"winner": {
					"id": 12,
					"tournament_id": 5,
					"position": 4,
					"user_id": null,
					"name": "Jenny"
				},
				"player1_score": 14,
				"player2_score": 21,
				"active": null
			},
			{
				"id": 4,
				"player1": {
					"id": 13,
					"tournament_id": 5,
					"position": 5,
					"user_id": null,
					"name": "Carrie"
				},
				"player2": {
					"id": 14,
					"tournament_id": 5,
					"position": 6,
					"user_id": null,
					"name": "Steven"
				},
				"winner": {
					"id": 13,
					"tournament_id": 5,
					"position": 5,
					"user_id": null,
					"name": "Carrie"
				},
				"player1_score": 26,
				"player2_score": 25,
				"active": null
			},
			{
				"id": 5,
				"player1": {
					"id": 15,
					"tournament_id": 5,
					"position": 7,
					"user_id": null,
					"name": "Jeremy"
				},
				"player2": {
					"id": 16,
					"tournament_id": 5,
					"position": 8,
					"user_id": null,
					"name": "Brian"
				},
				"winner": {
					"id": 16,
					"tournament_id": 5,
					"position": 8,
					"user_id": null,
					"name": "Brian"
				},
				"player1_score": null,
				"player2_score": null,
				"active": null
			}
		],
		[
			{
				"id": 7,
				"player1": {
					"id": 10,
					"tournament_id": 5,
					"position": 2,
					"user_id": null,
					"name": "Rodney"
				},
				"player2": {
					"id": 12,
					"tournament_id": 5,
					"position": 4,
					"user_id": null,
					"name": "Jenny"
				},
				"winner": {
					"id": 10,
					"tournament_id": 5,
					"position": 2,
					"user_id": null,
					"name": "Rodney"
				},
				"player1_score": null,
				"player2_score": null,
				"active": null
			},
			{
				"id": 6,
				"player1": {
					"id": 13,
					"tournament_id": 5,
					"position": 5,
					"user_id": null,
					"name": "Carrie"
				},
				"player2": {
					"id": 16,
					"tournament_id": 5,
					"position": 8,
					"user_id": null,
					"name": "Brian"
				},
				"winner": {
					"id": 16,
					"tournament_id": 5,
					"position": 8,
					"user_id": null,
					"name": "Brian"
				},
				"player1_score": null,
				"player2_score": null,
				"active": null
			}
		],
		[
			{
				"id": 8,
				"player1": {
					"id": 10,
					"tournament_id": 5,
					"position": 2,
					"user_id": null,
					"name": "Rodney"
				},
				"player2": {
					"id": 16,
					"tournament_id": 5,
					"position": 8,
					"user_id": null,
					"name": "Brian"
				},
				"winner": {
					"id": 10,
					"tournament_id": 5,
					"position": 2,
					"user_id": null,
					"name": "Rodney"
				},
				"player1_score": null,
				"player2_score": null,
				"active": null
			}
		]
	]
}

export const redsPool = {
    "id": 5,
    "name": "Red's Pool Tournament",
    "type": "pool",
    "active": false,
    "creator": 2,
    "rounds": [
        [
            {
                "id": 2,
                "player1": {
                    "id": 9,
                    "user_id": 1,
                    "name": null
                },
                "player2": {
                    "id": 10,
                    "user_id": null,
                    "name": "Rodney"
                },
                "winner": {
                    "id": 10,
                    "user_id": null,
                    "name": "Rodney"
                },
                "player1_score": 51,
                "player2_score": null,
                "active": null
            },
            {
                "id": 3,
                "player1": {
                    "id": 11,
                    "user_id": null,
                    "name": "James"
                },
                "player2": {
                    "id": 12,
                    "user_id": null,
                    "name": "Jenny"
                },
                "winner": {
                    "id": 12,
                    "user_id": null,
                    "name": "Jenny"
                },
                "player1_score": null,
                "player2_score": null,
                "active": null
            },
            {
                "id": 4,
                "player1": {
                    "id": 13,
                    "user_id": null,
                    "name": "Carrie"
                },
                "player2": {
                    "id": 14,
                    "user_id": null,
                    "name": "Steven"
                },
                "winner": {
                    "id": 13,
                    "user_id": null,
                    "name": "Carrie"
                },
                "player1_score": null,
                "player2_score": null,
                "active": null
            },
            {
                "id": 5,
                "player1": {
                    "id": 15,
                    "user_id": null,
                    "name": "Jeremy"
                },
                "player2": {
                    "id": 16,
                    "user_id": null,
                    "name": "Brian"
                },
                "winner": {
                    "id": 16,
                    "user_id": null,
                    "name": "Brian"
                },
                "player1_score": null,
                "player2_score": null,
                "active": null
            }
        ],
        [
            {
                "id": 7,
                "player1": {
                    "id": 10,
                    "user_id": null,
                    "name": "Rodney"
                },
                "player2": {
                    "id": 12,
                    "user_id": null,
                    "name": "Jenny"
                },
                "winner": {
                    "id": 10,
                    "user_id": null,
                    "name": "Rodney"
                },
                "player1_score": null,
                "player2_score": null,
                "active": null
            },
            {
                "id": 6,
                "player1": {
                    "id": 13,
                    "user_id": null,
                    "name": "Carrie"
                },
                "player2": {
                    "id": 16,
                    "user_id": null,
                    "name": "Brian"
                },
                "winner": {
                    "id": 16,
                    "user_id": null,
                    "name": "Brian"
                },
                "player1_score": null,
                "player2_score": null,
                "active": null
            }
        ],
        [
            {
                "id": 8,
                "player1": {
                    "id": 10,
                    "user_id": null,
                    "name": "Rodney"
                },
                "player2": {
                    "id": 16,
                    "user_id": null,
                    "name": "Brian"
                },
                "winner": {
                    "id": 10,
                    "user_id": null,
                    "name": "Rodney"
                },
                "player1_score": null,
                "player2_score": null,
                "active": null
            }
        ]
    ]
}

export const dummyMatch = {
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