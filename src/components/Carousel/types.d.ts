interface IImage {
  src: string;
  alt?: string;
}

export interface ICarouselProps {
  images: Array<IImage>;
}
