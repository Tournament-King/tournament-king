INSERT INTO users (auth0_id, name, email, profile_pic)
VALUES ($1, $2, $3, $4)
RETURNING *