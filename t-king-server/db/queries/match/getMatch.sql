select
    json_build_object(
        'id', m.id,
        'type', t.type,
        'creator', t.creator,
        'player1_score', m.player1_score,
        'player2_score', m.player2_score,
        'active', m.active,
        'player1', json_build_object(
            'id', p1.user_id,
            'name', p1.name
        ),
        'player2', json_build_object(
            'id', p2.user_id,
            'name', p2.name
        ),
        'winner', json_build_object(
            'id', p3.user_id,
            'name', p2.name
        )
    )
from matches m
inner join tournaments t on t.id = m.tournament_id
inner join players p1 on p1.id = m.player1
inner join players p2 on p2.id = m.player2
inner join players p3 on p3.id = m.winner
where m.id = $1
limit 1;
