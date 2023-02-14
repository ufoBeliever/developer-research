import { action, createStore } from "easy-peasy";
import { IImagesModel } from "./types";

export const store = createStore<IImagesModel>({
  images: [],
  addImage: action((state, payload) => {
    state.images.push(payload);
  }),
});
