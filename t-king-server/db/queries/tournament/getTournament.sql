select row_to_json(t)
from (
  select
  id,
  name,
  type,
  description,
  creator,
  active,
  get_matches(37) as rounds
  from tournaments
  where id = 37
) t;
