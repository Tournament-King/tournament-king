SELECT id, user_id, name FROM players
WHERE tournament_id = $1
ORDER BY position ASC;
