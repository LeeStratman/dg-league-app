import React, { useState } from "react";
import Search from "../Search";
import LeagueList from "./LeagueList";

const LeagueSearch = () => {
  const [query, setQuery] = useState("");

  const handleChange = (e) => {
    setQuery(e.target.value);
  };

  return (
    <>
      <Search handleChange={handleChange} value={query} />
      <LeagueList name={query} />
    </>
  );
};

export default LeagueSearch;
