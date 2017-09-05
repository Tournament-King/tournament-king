create or replace function get_user(
  a NUMERIC
)
returns json
as
$$
select row_to_json(t)
from (
  select id, user_id, name
  from players
  where id = a
) t;
$$
language 'sql';
