UPDATE matches
SET player1_score = $1, player2_score = $2
WHERE matches.id = $3 and (SELECT creator FROM tournaments WHERE id = matches.tournament_id) = $4;

SELECT get_match($3);
