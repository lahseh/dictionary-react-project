import React, { useState } from "react";
import axios from "axios";
import "./Search.css";

export default function Search() {
  let [keyword, setKeyword] = useState(null);

  function handleResponse(response) {
    console.log(response.data[0]);
  }

  function search(event) {
    event.preventDefault();

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
      </form>
    </div>
  );
}
