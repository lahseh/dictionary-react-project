import React, { useState } from "react";
import axios from "axios";
import Definition from "./Definition";
import Photos from "./Photos";
import "./Search.css";

export default function Search(props) {
  let [keyword, setKeyword] = useState(props.defaultKeyword);
  let [definition, setDefinition] = useState("");
  let [loaded, setLoaded] = useState(false);
  let [photos, setPhotos] = useState(null);

  function handleResponse(response) {
    setDefinition(response.data[0]);
  }

  function handlePhotoResponse(response) {
    setPhotos(response.data.photos);
  }

  function search() {
    // documentation: https://api.dictionaryapi.dev/api/v2/entries/en/
    let apiUrl = `https://api.dictionaryapi.dev/api/v2/entries/en/${keyword}`;
    axios.get(apiUrl).then(handleResponse);

    let photoApiKey = "46fc06b4af0o785a8td60a716534ff63";
    let photoApiUrl = `https://api.shecodes.io/images/v1/search?query=${keyword}&key=${photoApiKey}`;

    axios.get(photoApiUrl).then(handlePhotoResponse);
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
          <h1>What word do you want to look up?</h1>
          <form onSubmit={handleSubmit}>
            <input type="search" onChange={handleKeyword} />
          </form>
          <div className="hint">Suggested words: sunset, wine, yoga....</div>
        </section>
        <Definition definition={definition} />
        <Photos photos={photos} />
      </div>
    );
  } else {
    load();
    return "loading";
  }
}
