import React from "react";
import Avatar from "@/layout/avatar/avatar";
import Button from "@/layout/button/button";
import { getRepo } from "services/githubservice";
import styles from "./repo.module.scss";
const Repo = ({ repo }) => {
  return (
    <div>
      <Button href="/" text="Back" />

      <div className={styles.header}>
        <span>{repo.name}</span>
      </div>
      <Avatar user={repo.owner} />
      <div className={styles.description}>{repo.description}</div>
      <div className={styles.language}>{repo.language}</div>

      <Button
        href={repo.html_url}
        text="View on Github"
        type="dark"
        target="_blank"
        external
      />
    </div>
  );
};

export default Repo;
export const getServerSideProps = async ({ query }) => {
  const res = await getRepo(query.id);
  return {
    props: { repo: res.data },
  };
};
