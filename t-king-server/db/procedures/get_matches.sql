create or replace function get_matches(
  a NUMERIC
)
returns json
as
$$
select (
  select json_agg(f)
  from (
    select id,
    get_user(matches.player1) as player1,
    get_user(matches.player2) as player2,
    player1_score,
    player2_score,
    get_user(matches.winner) as winner,
    (
      select case when matches.winner is not null then 'complete'
                  when matches.player1_score is not null then 'active'
                  when matches.player1 is not null and matches.player2 is not null then 'ready'
                  else 'waiting'
                end
    ) as status
    from matches
    where tournament_id = a
    order by match_num
  ) f
) as rounds;
$$
language 'sql';
