update users
set username = $1, name = $2, email = $3, location = $4
where id = $5
returning *