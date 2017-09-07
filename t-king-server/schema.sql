CREATE TABLE "tournaments" (
	"id" serial NOT NULL,
	"name" TEXT NOT NULL,
	"description" TEXT,
	"type" TEXT NOT NULL,
	"active" BOOLEAN NOT NULL DEFAULT 'true',
	"creator" integer NOT NULL,
	CONSTRAINT tournaments_pk PRIMARY KEY ("id")
) WITH (
  OIDS=FALSE
);



CREATE TABLE "matches" (
	"id" serial NOT NULL,
	"tournament_id" INTEGER NOT NULL,
	"player1" INTEGER,
	"player2" INTEGER,
	"player1_score" INTEGER,
	"player2_score" INTEGER,
	"winner" INTEGER,
	"match_num" INTEGER NOT NULL,
	"p_match_num" INTEGER,
	CONSTRAINT matches_pk PRIMARY KEY ("id")
) WITH (
  OIDS=FALSE
);



CREATE TABLE "players" (
	"id" serial NOT NULL,
	"tournament_id" integer NOT NULL,
	"user_id" integer,
	"name" TEXT,
	CONSTRAINT players_pk PRIMARY KEY ("id")
) WITH (
  OIDS=FALSE
);



CREATE TABLE "users" (
	"id" serial NOT NULL,
	"auth0_id" TEXT NOT NULL UNIQUE,
	"email" TEXT NOT NULL UNIQUE,
	"profile_pic" TEXT NOT NULL,
	"name" TEXT NOT NULL,
	"username" TEXT NOT NULL UNIQUE,
	"ranking" INTEGER DEFAULT 0,
	CONSTRAINT users_pk PRIMARY KEY ("id")
) WITH (
  OIDS=FALSE
);



CREATE TABLE "comments" (
	"id" serial NOT NULL,
	"text" TEXT NOT NULL,
	"match_id" int NOT NULL,
	"user_id" int NOT NULL,
	"timestamp" TIMESTAMP NOT NULL DEFAULT CURRENT_TIMESTAMP,
	CONSTRAINT comments_pk PRIMARY KEY ("id")
) WITH (
  OIDS=FALSE
);



ALTER TABLE "tournaments" ADD CONSTRAINT "tournaments_fk0" FOREIGN KEY ("creator") REFERENCES "users"("id");

ALTER TABLE "matches" ADD CONSTRAINT "matches_fk0" FOREIGN KEY ("tournament_id") REFERENCES "tournaments"("id");
ALTER TABLE "matches" ADD CONSTRAINT "matches_fk1" FOREIGN KEY ("player1") REFERENCES "players"("id");
ALTER TABLE "matches" ADD CONSTRAINT "matches_fk2" FOREIGN KEY ("player2") REFERENCES "players"("id");
ALTER TABLE "matches" ADD CONSTRAINT "matches_fk3" FOREIGN KEY ("winner") REFERENCES "players"("id");

ALTER TABLE "players" ADD CONSTRAINT "players_fk0" FOREIGN KEY ("tournament_id") REFERENCES "tournaments"("id");
ALTER TABLE "players" ADD CONSTRAINT "players_fk1" FOREIGN KEY ("user_id") REFERENCES "users"("id");

ALTER TABLE "comments" ADD CONSTRAINT "comments_fk0" FOREIGN KEY ("match_id") REFERENCES "matches"("id");
ALTER TABLE "comments" ADD CONSTRAINT "comments_fk1" FOREIGN KEY ("user_id") REFERENCES "users"("id");
