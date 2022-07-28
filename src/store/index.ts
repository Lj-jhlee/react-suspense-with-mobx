import React from "react";
import { configure } from "mobx";

import userStore from "./userStore";
import postStore from "./postStore";

configure({
  useProxies: "never",
});

const BaseStore = React.createContext({
  userStore: new userStore(),
  postStore: new postStore(),
});

export type StoreState = "none" | "pending" | "done" | "error";
export default BaseStore;
