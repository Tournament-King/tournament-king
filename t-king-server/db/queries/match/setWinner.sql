UPDATE matches SET winner = $2 WHERE id = $1
RETURNING id;

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
