import React, { useState } from "react";
import axios from "axios";
import "./Search.css";
import Definition from "./Definition";

export default function Search(props) {
  let [keyword, setKeyword] = useState(props.defaultKeyword);
  let [definition, setDefinition] = useState("");
  let [loaded, setLoaded] = useState(false);

  function handleResponse(response) {
    setDefinition(response.data[0]);
  }

  function search() {
    // documentation: https://api.dictionaryapi.dev/api/v2/entries/en/
    let apiUrl = `https://api.dictionaryapi.dev/api/v2/entries/en/${keyword}`;
    axios.get(apiUrl).then(handleResponse);
  }

  function handleSubmit(event) {
    event.preventDefault();
    search();
  }

  function handleKeyword(event) {
    setKeyword(event.target.value);
  }

  function load() {
    setLoaded(true);
    search();
  }

  if (loaded) {
    return (
      <div className="Search">
        <section>
          <form onSubmit={handleSubmit}>
            <input
              type="search"
              placeholder="Search for a word"
              onChange={handleKeyword}
            />
            <div className="hint">
              Suggested words: power, money, singer, prayer, sunset...
            </div>
            <Definition definition={definition} />
          </form>
        </section>
      </div>
    );
  } else {
    load();
    return "Loading";
  }
}
