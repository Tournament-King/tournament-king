SELECT creator, tournament_id as id
FROM matches
INNER JOIN tournaments
ON matches.tournament_id = tournaments.id
WHERE matches.id = $1;
