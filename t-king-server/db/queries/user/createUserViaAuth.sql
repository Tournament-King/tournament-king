INSERT INTO users (auth0_id, name, email, profile_pic, username)
VALUES ($1, $2, $3, $4, $5)
RETURNING *