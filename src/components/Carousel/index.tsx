import "./styles.scss";
import { ICarouselProps } from "./types";
import {
  BsFillArrowRightCircleFill,
  BsFillArrowLeftCircleFill,
} from "react-icons/bs";
import { useEffect, useState } from "react";

export const Carousel: React.FC<ICarouselProps> = ({ images }) => {
  const [currentItem, setCurrentItem] = useState<number>(0);

  useEffect(() => {
    const div = document.querySelector(".carousel__items") as HTMLDivElement;
    if (div) {
      div.style.transform = `translateX(-${currentItem * 350}px)`;
    }
  }, [currentItem]);

  const nextElement = () => {
    if (currentItem + 1 < images.length) {
      setCurrentItem((prev) => prev + 1);
    } else {
      setCurrentItem(0);
    }
  };

  const prevElement = () => {
    if (currentItem > 0) {
      setCurrentItem((prev) => prev - 1);
    } else {
      setCurrentItem(images.length - 1);
    }
  };

  return images.length ? (
    <div className="carousel">
      <button className="carousel__button" onClick={prevElement}>
        <BsFillArrowLeftCircleFill size="30px" />
      </button>
      <div className="carousel__content">
        <div className="carousel__items">
          {images.map((e, i) => {
            return (
              <div className="carousel__item" key={i}>
                <img {...e} />
              </div>
            );
          })}
        </div>
      </div>
      <button className="carousel__button" onClick={nextElement}>
        <BsFillArrowRightCircleFill size="30px" />
      </button>
    </div>
  ) : null;
};
