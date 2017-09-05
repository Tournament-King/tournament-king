select row_to_json(t)
from (
  select
  id,
  name,
  type,
  description,
  creator,
  active,
  get_matches($1) as rounds
  from tournaments
  where id = $1
) t;
