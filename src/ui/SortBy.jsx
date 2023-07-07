import React from "react";
import Select from "./Select";
import { useSearchParams } from "react-router-dom";

const SortBy = ({ options }) => {
  const [searchParam, setSearchParam] = useSearchParams();
  const sortBy = searchParam.get("sortBy") || "";
  const selectHandler = (e) => {
    searchParam.set("sortBy", e.target.value);
    setSearchParam(searchParam);
  };
  return (
    <Select
      options={options}
      onChange={selectHandler}
      type="white"
      value={sortBy}
    ></Select>
  );
};

export default SortBy;
