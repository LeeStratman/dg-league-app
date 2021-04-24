import React, { useState } from "react";
import Search from "../Search";
import LeagueList from "./LeagueList";
import useDebounce from "../../hooks/useDebounce";

const LeagueSearch = () => {
  const [name, setName] = useState("");
  const onSearch = useDebounce(setName);

  return (
    <>
      <Search onSearch={onSearch} placeholder="Search leagues..." />
      <LeagueList name={name} />
    </>
  );
};

export default LeagueSearch;
