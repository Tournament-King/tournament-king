select row_to_json(t)
from (
  select id,
  (
    select row_to_json(d)
    from (
      select id, user_id, name
      from players
      where id = matches.player1
    ) d
  ) as player1,
  (
    select row_to_json(e)
    from (
      select id, user_id, name
      from players
      where id = matches.player2
    ) e
  ) as player2,
  player1_score,
  player2_score,
  (
    select row_to_json(f)
    from (
      select id, user_id, name
      from players
      where id = matches.winner
    ) f
  ) as winner
  from matches
  where id = $1
) t;

select row_to_json(t)
from (
  select id,
  (
    select row_to_json(d)
    from (
      select id, user_id, name
      from players
      where id = matches.player1
    ) d
  ) as player1,
  (
    select row_to_json(e)
    from (
      select id, user_id, name
      from players
      where id = matches.player2
    ) e
  ) as player2,
  player1_score,
  player2_score,
  (
    select row_to_json(f)
    from (
      select id, user_id, name
      from players
      where id = matches.winner
    ) f
  ) as winner
  from matches
  where id = $2
) t;
