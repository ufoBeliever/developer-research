import { Action } from "easy-peasy";

export interface IImage {
  src: string;
  alt?: string;
}

export interface IImages {
  images: Array<IImage>;
}

interface IImagesModel {
  images: Array<IImage>;
  addImage: Action<IImages, IImage>;
}
