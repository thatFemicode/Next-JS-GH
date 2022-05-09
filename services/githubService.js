import axios from "axios";
import { axiosGetCancellable } from "helpers/axiosHelpers";

const axiosConfig = {
  baseURL: "https://api.github.com",
  auth: {
    username: process.env.GITHUB_CLIENT_ID,
    password: process.env.GITHUB_CLIENT_SECRET,
  },
};

// this will accept two argeuments
function searchRepos(searchText, language) {
  const query = language ? `${searchText}+language:${language}` : searchText;

  // return axios.get(
  //   `search/repositories?q=${query}&sort=stars&order=desc`,
  //   axiosConfig
  //   // `/search/repositories?q=tetris+language:assembly&sort=stars&order=desc`
  // );
  if (isServer()) {
    return axios.get(
      `search/repositories?q=${query}&sort=stars&order=desc`,
      axiosConfig
    );
  }
  return axiosGetCancellable(`api/search/?q=${query}&sort=stars&order=desc`);
}

function getRepo(id) {
  return axios.get(`repositories/${id}`, axiosConfig);
}

function getProfile(username) {
  return axios.get(`users/${username}`, axiosConfig);
}
function isServer() {
  return typeof window === "undefined";
}
export { searchRepos };
