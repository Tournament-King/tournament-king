select
  count(*) as matches_completed,
  count(*) filter (where players.id = matches.winner) as matches_won,
  count(*) filter (where players.id = matches.winner and matches.p_match_num is null) as tournaments_won
from matches
inner join players
on players.id = matches.player1 or players.id = matches.player2
where players.user_id = $1 and matches.winner is not null;
