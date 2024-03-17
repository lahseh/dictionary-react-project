import React, { useState } from "react";
import axios from "axios";
import "./Search.css";
import Definition from "./Definition";

export default function Search() {
  let [keyword, setKeyword] = useState("");
  let [definition, setDefinition] = useState("");

  function handleResponse(response) {
    setDefinition(response.data[0]);
  }

  function search(event) {
    event.preventDefault();

    // documentation: https://api.dictionaryapi.dev/api/v2/entries/en/
    let apiUrl = `https://api.dictionaryapi.dev/api/v2/entries/en/${keyword}`;

    axios.get(apiUrl).then(handleResponse);
  }

  function handleKeyword(event) {
    setKeyword(event.target.value);
  }

  return (
    <div className="Search">
      <form onSubmit={search}>
        <input type="search" onChange={handleKeyword} />
        <Definition definition={definition} />
      </form>
    </div>
  );
}
