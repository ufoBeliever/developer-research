import React, { useCallback, useEffect, useState } from "react";
import { Input, Image, Carousel } from "./components";
import "./styles/reset.scss";
import "./styles/global.scss";
import axios from "axios";
import { useStoreActions, useStoreState } from "./store/hooks";
import { IResponse } from "./types/types";

function App() {
  const { images } = useStoreState((state) => state);
  const { addImage } = useStoreActions((actions) => actions);

  const [searchStr, setSearchStr] = useState<string>("");
  const URL = `https://api.pexels.com/v1/search?per_page=1&query=`;

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
        const data: IResponse = (await axios.get(URL + url)).data;
        addImage({ src: data.photos[0].src.large, alt: data.photos[0].alt });
      } catch {
        return null;
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

  return (
    <div className="App">
      <Input value={searchStr} onChange={(e) => setSearchStr(e.target.value)} />

      <div className="response-images">
        {images.length ? (
          <>
            <div className="response-images__elements">
              {images.map((element, i) => {
                return <Image {...element} key={i} />;
              })}
            </div>
            <Carousel images={images ? images : []} />
          </>
        ) : (
          <span className="response-images__no-images">No elements yet</span>
        )}
      </div>
    </div>
  );
}

export default App;
