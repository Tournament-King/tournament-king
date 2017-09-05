import axios from 'axios';

export function searchUsers(name) {
  return axios.get("/api/search/users", {params: {name:name}})
  .then(res => res.data)
}
