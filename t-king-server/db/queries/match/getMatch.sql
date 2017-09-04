SELECT m.id, t.creator FROM matches m
INNER JOIN tournaments t
ON  m.tournament_id = t.id
WHERE m.id = $1;
