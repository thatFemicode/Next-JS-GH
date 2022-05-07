import React from "react";
import RepoItem from "@/layout/RepoItem/RepoItem";
const RepoList = ({ repos, loading }) => {
  if (loading) {
    return "Loading...";
  }

  if (!repos || repos.length === 0) {
    return <span>No repositories found.</span>;
  }

  return (
    <div>
      {repos.map((repo) => (
        <RepoItem key={repo.id} repo={repo}></RepoItem>
      ))}
    </div>
  );
};

export default RepoList;
