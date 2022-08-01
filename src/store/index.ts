import React from "react";
import { configure } from "mobx";

import userStore from "./userStore";
import postStore from "./postStore";
import raceStore from "./raceStore";
import suspenseUserStore from "./suspenseUserStore";
import suspensePostsStore from "./suspensePostStore";

configure({
  useProxies: "never",
});

const BaseStore = React.createContext({
  userStore: new userStore(),
  postStore: new postStore(),
  raceStore: new raceStore(),
  suspenseUserStore: new suspenseUserStore(),
  suspensePostsStore: new suspensePostsStore(),
});

export type StoreState = "none" | "pending" | "done" | "error";
export default BaseStore;
