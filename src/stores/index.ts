import { createContext, useContext } from "react";
import { observable } from "mobx";

import themeStore from './Theme';

class RootStore {
  @observable themeStore = themeStore;
}

const rootStore = new RootStore()

export const StoreContext = createContext<RootStore>(rootStore)

export const useStore = (): RootStore => {
  const store = useContext(StoreContext)
  if (!store) {
    throw new Error('You have forgot to use StoreProvider, shame on you.')
  }
  return store
}

export default new RootStore()