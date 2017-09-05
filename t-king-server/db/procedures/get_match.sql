create or replace function get_match(
  a NUMERIC
)
returns json
as
$$
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
  ) as winner,
  (
    select case when matches.winner is not null then 'complete'
                when matches.player1_score is not null then 'active'
                when matches.player1 is not null and matches.player2 is not null then 'ready'
                else 'waiting'
              end
  ) as status
  from matches
  where id = a
) t;
$$
language 'sql';
