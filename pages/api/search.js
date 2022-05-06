// Next.js API route support: https://nextjs.org/docs/api-routes/introduction

import axios from "axios";

const axiosConfig = {
  baseURL: "https://api.github.com/",
  auth: {
    username: process.env.GITHUB_CLIENT_ID,
    password: process.env.GITHUB_CLIENT_SECRET,
  },
};

export default async function handler(req, res) {
  const { q, sort, order } = req.query;

  const response = await axios.get(
    `search/repositories?q=${q}&sort=${sort}&order=${order}`,
    axiosConfig
  );

  res.json(response.data);
}
