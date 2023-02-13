import React, { useCallback, useEffect, useState } from "react";
import { Input, Image, Carousel } from "./components";
import "./styles/reset.scss";
import "./styles/global.scss";
import axios from "axios";
import { ILoadingData } from "./types/types";

function App() {
  const [{ data, error }, setLoadingData] = useState<ILoadingData>({
    data: null,
    error: false,
  });

  const [searchStr, setSearchStr] = useState<string>("");
  const URL = `https://api.pexels.com/v1/search?per_page=5&query=`;

  const debounce = (fn: Function, ms = 300) => {
    let timeoutId: ReturnType<typeof setTimeout>;
    return function (this: any, ...args: any[]) {
      clearTimeout(timeoutId);
      timeoutId = setTimeout(() => fn.apply(this, args), ms);
    };
  };

  const requestImages = useCallback(
    debounce(async (url: string) => {
      try {
        const { data } = await axios.get(URL + url);
        setLoadingData({
          data,
          error: false,
        });
      } catch {
        setLoadingData({
          data: null,
          error: true,
        });
      }
    }, 1000),
    []
  );

  useEffect(() => {
    if (searchStr) {
      requestImages(searchStr);
    } else {
      requestImages("frrfreffrrferfafweqw1322d23fghny6767j");
    }
  }, [searchStr]);

  if (error) {
    return <div>Error! Reload page</div>;
  }

  return (
    <div className="App">
      <Input value={searchStr} onChange={(e) => setSearchStr(e.target.value)} />

      <div className="elements">
        {data?.photos.map((element) => {
          const { src, alt, url } = element;
          return <Image src={src.large} alt={alt} key={url} />;
        })}
      </div>
      <Carousel
        images={
          data
            ? data?.photos.map((element) => {
                const { src, alt } = element;
                return { src: src.large, alt };
              })
            : []
        }
      />
    </div>
  );
}

export default App;
