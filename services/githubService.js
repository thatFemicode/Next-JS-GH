import axios from "axios";
import { axiosGetCancellable } from "helpers/axiosHelpers";

const axiosConfig = {
  baseURL: "https://api.github.com",
  auth: {
    username: process.env.NEXT_PUBLIC_GITHUB_CLIENT_ID,
    password: process.env.NEXT_PUBLIC_GITHUB_CLIENT_SECRET,
  },
};

// this will accept two argeuments
function searchRepos(searchText, language) {
  const query = language ? `${searchText}+language:${language}` : searchText;

  // return axiosConfig.get(
  //   `search/repositories?q=${query}&sort=stars&order=desc`, axiosConfig
  //   // `/search/repositories?q=tetris+language:assembly&sort=stars&order=desc`
  // );
  return axiosGetCancellable(
    `search/repositories?q=${query}&sort=stars&order=desc`,
    axiosConfig
  );
}

export { searchRepos };
