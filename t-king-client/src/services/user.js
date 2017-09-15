import axios from 'axios';

export function searchUsers(name) {
  return axios.get("/api/search/users", {params: {name}})
  .then(res => res.data)
}

export function getStats(id) {
  return axios.get(`/api/user/stats/${id}`)
  .then(res => res.data)
}

export function getRecentActivity(id) {
  return axios.get(`/api/user/activity/${id}`)
  .then(res => res.data)
}

export function getUser(id) {
  return axios.get(`/api/user/${id}`)
  .then(res => res.data)
}
