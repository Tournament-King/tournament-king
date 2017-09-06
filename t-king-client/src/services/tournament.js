import axios from 'axios';

export function createTournament(data) {
  return axios.post("/api/tournament", data)
}
