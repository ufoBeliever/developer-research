import { createTypedHooks } from "easy-peasy";
import { IImagesModel } from "./types";

const typedHooks = createTypedHooks<IImagesModel>();

export const useStoreActions = typedHooks.useStoreActions;
export const useStoreDispatch = typedHooks.useStoreDispatch;
export const useStoreState = typedHooks.useStoreState;
