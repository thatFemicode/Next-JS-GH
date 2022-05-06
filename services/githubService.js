import axios from "axios";

const axiosConfig = axios.create({
  baseURL: "https://api.github.com",
  auth: {
    username: process.env.NEXT_PUBLIC_GITHUB_CLIENT_ID,
    password: process.env.NEXT_PUBLIC_GITHUB_CLIENT_SECRET,
  },
});

// this will accept two argeuments
function searchRepos(searchText, language) {
  const query = language ? `${searchText}+language:${language}` : searchText;

  return axiosConfig.get(
    `search/repositories?q=${query}&sort=stars&order=desc`
    // `/search/repositories?q=tetris+language:assembly&sort=stars&order=desc`
  );
}

export { searchRepos };
