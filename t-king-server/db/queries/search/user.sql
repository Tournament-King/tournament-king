SELECT * FROM users
WHERE name ~* $1 OR username ~* $1;
