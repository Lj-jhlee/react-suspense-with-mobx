import { makeAutoObservable, runInAction } from "mobx";

import { StoreState } from ".";

import { requestData } from "../fetch/raceRequestFetch";

class raceStore {
  data: Record<string, string | number>;

  state: StoreState;

  constructor() {
    makeAutoObservable(this);
    this.data = {};
    this.state = "none";
    this.clear();
  }

  getData(id: number) {
    this.state = "pending";
    try {
      let tempData: any = null;
      const fetchedData: any = requestData(id).then((res) => {
        tempData = res;
      });
      return () => {
        if (tempData === null) {
          throw fetchedData;
        } else {
          runInAction(() => {
            this.data = tempData;
            this.state = "done";
          });
          return tempData;
        }
      };
    } catch (error) {
      this.state = "error";
      throw error;
    }
  }

  clear(): void {
    this.data = {};
    this.state = "none";
  }
}

export default raceStore;
