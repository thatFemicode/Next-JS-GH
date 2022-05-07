import Head from "next/head";
import Image from "next/image";
import styles from "../styles/Home.module.css";
import axios from "axios";
import { useState, useEffect } from "react";
import Search from "@/layout/Search/Search";
import { searchRepos } from "services/githubService";
import RepoList from "@/layout/RepoList/RepoList";
import { getRandomWord } from "helpers/randomWorld";

export default function Home(props) {
  // console.log(value);
  // const [searchText, setSearchText] = useState("");
  const [language, setLanguage] = useState("");
  const [searchText, setSearchText] = useState(props.searchText);
  const [repos, setRepos] = useState(props.repos);
  // const [repos, setRepos] = useState([]);
  const [loading, setLoading] = useState(false);
  // const apiKey = process.env.REACT_APP_API_KEY;
  // console.log(process.env.NEXT_PUBLIC_GITHUB_CLIENT_ID);

  const loadRepos = async (searchText, language) => {
    setLoading(true);
    const res = await searchRepos(searchText, language);
    if (res && res.data) {
      setLoading(false);
      setRepos(res.data.items);
    }
  };
  // useEffect(() => {
  //   loadRepos(props.searchText, language);
  // }, []);
  const onSearchTextChange = (text) => {
    setSearchText(text);
    if (text) {
      loadRepos(text, language);
    }
  };

  const onLanguageChange = (language) => {
    setLanguage(language);
    loadRepos(searchText, language);
  };

  return (
    // <div className={styles.container}>
    //   <Head>
    //     <title>Create Next App</title>
    //     <meta name="description" content="Generated by create next app" />
    //     <link rel="icon" href="/favicon.ico" />
    //   </Head>

    //   <p>Value SSR: {props.value}</p>
    // </div>
    <div>
      <Search
        searchText={searchText}
        language={language}
        onSearchTextChange={onSearchTextChange}
        onLanguageChange={onLanguageChange}
      />
      <RepoList loading={loading} repos={repos} />
    </div>
  );
}

// export async function getSaticProps() {
//  const res = await axios.get("https://api.chucknorris.io/jokes/random");
//   console.log(res.data.value);
//   return {
//     props: {
//       value: res.data.value,
//     },
//   };
// }
export const getServerSideProps = async () => {
  // const res = await axios.get("https://api.chucknorris.io/jokes/random");
  const searchText = getRandomWord();
  const res = await searchRepos(searchText);
  // console.log(res.data.value);
  return {
    props: {
      searchText: searchText,
      repos: res.data.items,
    },
  };
};
