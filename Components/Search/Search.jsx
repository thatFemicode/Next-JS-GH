import React from "react";
import Select from "Components/Select/Select";
import TextInput from "Components/TextInput/TextInput";
import Languages from "Constant/language";
import styles from "./search.module.scss";

const Search = (props) => {
  const { language, searchText, onSearchTextChange, onLanguageChange } = props;

  const languages = [{ value: "", label: "All" }, ...Languages];

  return (
    <div className={styles.search}>
      <TextInput
        className={styles.searchInput}
        label="Repo Search"
        value={searchText}
        onChange={(value) => onSearchTextChange(value)}
      />
      <Select
        className={styles.languageSelect}
        label="Language"
        value={language}
        options={languages}
        onChange={(value) => onLanguageChange(value)}
      />
    </div>
  );
};

export default Search;
