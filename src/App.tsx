import React, { useCallback, useEffect, useState } from "react";
import { Input } from "./components";
import "./styles/reset.scss";
import "./styles/global.scss";
import axios from "axios";

function App() {
  const [searchStr, setSearchStr] = useState<string>("");
  const URL = `https://api.pexels.com/v1/search?query=`;

  const debounce = (fn: Function, ms = 300) => {
    let timeoutId: ReturnType<typeof setTimeout>;
    return function (this: any, ...args: any[]) {
      clearTimeout(timeoutId);
      timeoutId = setTimeout(() => fn.apply(this, args), ms);
    };
  };

  const requestImages = useCallback(
    debounce(async (url: string) => {
      const { data } = await axios.get(url);
      console.log(data);
    }, 1000),
    []
  );

  useEffect(() => {
    if (searchStr) {
      requestImages(URL + searchStr);
    }
  }, [searchStr]);

  return (
    <div className="App">
      <Input value={searchStr} onChange={(e) => setSearchStr(e.target.value)} />
    </div>
  );
}

export default App;
