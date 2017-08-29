CREATE TABLE "users" (
	"id" serial NOT NULL,
	"auth0_id" TEXT NOT NULL UNIQUE,
	"email" TEXT NOT NULL UNIQUE,
	"profile_pic" TEXT NOT NULL,
	"name" TEXT NOT NULL,
	"username" TEXT UNIQUE,
	CONSTRAINT users_pk PRIMARY KEY ("id")
) WITH (
  OIDS=FALSE
);