import "./styles.scss";
import { IImages } from "../../store/types";
import {
  BsFillArrowRightCircleFill,
  BsFillArrowLeftCircleFill,
} from "react-icons/bs";
import { Image } from "../Image";
import { useEffect, useState } from "react";

export const Carousel: React.FC<IImages> = ({ images }) => {
  const [currentItem, setCurrentItem] = useState<number>(0);

  useEffect(() => {
    const div = document.querySelector(".carousel__items") as HTMLDivElement;
    if (div) {
      div.style.transform = `translateX(-${currentItem * 860}px)`;
    }
  }, [currentItem]);

  const nextElement = () => {
    if (currentItem + 1 < Math.ceil(images.length / 4)) {
      setCurrentItem((prev) => prev + 1);
    } else {
      setCurrentItem(0);
    }
  };

  const prevElement = () => {
    if (currentItem > 0) {
      setCurrentItem((prev) => prev - 1);
    } else {
      setCurrentItem(Math.ceil(images.length / 4) - 1);
    }
  };

  return images.length ? (
    <div className="carousel">
      {images.length > 4 ? (
        <button className="carousel__button" onClick={prevElement}>
          <BsFillArrowLeftCircleFill size="30px" />
        </button>
      ) : (
        <div />
      )}
      <div className="carousel__content">
        <div className="carousel__items">
          {images.map((e, i) => {
            return (
              <div className="carousel__item" key={i}>
                <Image {...e} />
              </div>
            );
          })}
        </div>
      </div>
      {images.length > 4 ? (
        <button className="carousel__button" onClick={nextElement}>
          <BsFillArrowRightCircleFill size="30px" />
        </button>
      ) : (
        <div />
      )}
    </div>
  ) : null;
};
