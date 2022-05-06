import React from "react";
import Select from "Components/Select/Select";
import TextInput from "Components/TextInput/TextInput";
import Languages from "Constant/language";

const Search = (props) => {
  const { language, searchText, onSearchTextChange, onLanguageChange } = props;

  const languages = [{ value: "", label: "All" }, ...Languages];

  return (
    <div>
      <TextInput
        label="Repo Search"
        value={searchText}
        onChange={(value) => onSearchTextChange(value)}
      />
      <Select
        label="Language"
        value={language}
        options={languages}
        onChange={(value) => onLanguageChange(value)}
      />
    </div>
  );
};

export default Search;
