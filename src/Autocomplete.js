import React from "react";
import { useState, useCallback } from "react";
import debounce from "lodash/debounce";
import axios from "axios";
import "./styles.css";
import Dropdown from "./Dropdown";

export default function Autocomplete() {
  const [data, setData] = useState([]);
  /*  const debounceOnChange = React.useCallback(debounce(onChange, 400), []);

  function onChange(value) {
    fetch(`https://github-trending-api.now.sh/repositories?language=${value}`)
      .then(res => res.json())
      .then(res => setRepos(res));
  } */
  ///////////////////////////////////////////////////////////
  /* const debounce = (func, delay = 1000) => {
    let timeoutId;
    return (...args) => {
      if (timeoutId) {
        clearTimeout(timeoutId);
      }
      timeoutId = setTimeout(() => {
        func.apply(null, args);
      }, delay);
    };
  };*/
  //////////////////////////////////////////////////////////////
  async function onInput(term) {
    if (term) {
      const items = await fetchData(term);
      setData(items.data);
    } else setData([]);
    //console.log(data[0]);
  }
  //////////////////////////////////////////////////////////////
  const deb_fn = useCallback(debounce(onInput, 380), []);
  //////////////////////////////////////////////////////////////
  const fetchData = async searchTerm => {
    const response = await axios.get(
      `https://github-trending-api.now.sh/repositories?language=${searchTerm}`
    );
    return response;
  };

  return (
    <div>
      <label className="base">
        <b>Trending Github Repos</b>
      </label>
      <h1>Search by language:</h1>
      <input
        className="input"
        onChange={e => deb_fn(e.target.value)}
        placeholder="Type a launcguage name like python, js, cpp ... "
      />
      <div>
        <Dropdown data={data} />
      </div>
    </div>
  );
}
