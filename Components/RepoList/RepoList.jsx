import React from "react";
import RepoItem from "@/layout/RepoItem/RepoItem";
import img from "../../img/loader.gif";
import styles from "./repo.module.scss";
import Image from "next/image";
const RepoList = ({ repos, loading }) => {
  if (loading) {
    return <Image src={img} alt="Loading" className={styles.loader} />;
  }

  if (!repos || repos.length === 0) {
    return <span className={styles.message}>No repositories found.</span>;
  }

  return (
    <div className={styles.repoList}>
      {repos.map((repo) => (
        <RepoItem key={repo.id} repo={repo} />
      ))}
    </div>
  );
};

export default RepoList;
