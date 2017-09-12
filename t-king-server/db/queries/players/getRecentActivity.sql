select
    matches.id as id,
    (
        case when matches.winner = players.id then true
            else false
        end
    ) as match_won,
    (
        case when matches.p_match_num is null then true
            else false
        end
    ) as final_match,
    type
from matches
inner join players
on matches.player1 = players.id or matches.player2 = players.id
inner join tournaments
on matches.tournament_id = tournaments.id
where players.user_id = $1 and matches.winner is not null
order by match_complete_timestamp
limit 5;
