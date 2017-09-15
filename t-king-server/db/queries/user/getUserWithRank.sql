with user_ranks as (
  select id, name, location, profile_pic, rank() over (order by ranking desc)
  from users
)

select * from user_ranks where id = $1;
