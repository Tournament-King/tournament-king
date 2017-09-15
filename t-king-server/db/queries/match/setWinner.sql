UPDATE matches SET winner = $2, match_complete_timestamp = CURRENT_TIMESTAMP WHERE id = $1
RETURNING id;

WITH m AS (
  SELECT players.id, match_num, p_match_num, matches.tournament_id, player1, player2, winner, user_id
  FROM matches
  INNER JOIN players
  ON players.id = matches.player1 OR players.id = matches.player2
  WHERE matches.id = $1
)

UPDATE users SET ranking = ranking + 1 WHERE id = (SELECT user_id from m where id = player1) OR
id = (SELECT user_id from m where id = player2);

WITH m AS (
  SELECT players.id, match_num, p_match_num, matches.tournament_id, player1, player2, winner, user_id
  FROM matches
  INNER JOIN players
  ON players.id = matches.player1 OR players.id = matches.player2
  WHERE matches.id = $1
)

UPDATE users SET ranking = ranking + 2 WHERE id = (SELECT user_id from m where id = winner);

WITH m AS (
  SELECT players.id, match_num, p_match_num, matches.tournament_id, player1, player2, winner, user_id
  FROM matches
  INNER JOIN players
  ON players.id = matches.player1 OR players.id = matches.player2
  WHERE matches.id = $1
)

UPDATE users SET ranking = ranking + 4 WHERE id = (SELECT user_id from m where id = winner and p_match_num IS NULL);

WITH m AS (
  SELECT match_num, p_match_num, tournament_id
  FROM matches
  WHERE id = $1
)

UPDATE matches
SET   player1 = CASE WHEN (SELECT match_num FROM m) % 2 = 1 THEN $2 ELSE player1 END
    , player2 = CASE WHEN (SELECT match_num FROM m) % 2 = 0 THEN $2 ELSE player2 END
WHERE match_num = (SELECT p_match_num FROM m) AND tournament_id = (SELECT tournament_id FROM m)
RETURNING id;
