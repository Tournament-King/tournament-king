import axios from 'axios';

export function createTournament(players) {
  return axios.post("/api/tournament", players)
}
