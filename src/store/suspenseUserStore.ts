import { makeAutoObservable, runInAction } from "mobx";

import { StoreState } from ".";

import requestRepository from "../repository/requestRepository";

class suspenseUserStore {
  user: Record<string, string | number>;

  state: StoreState;

  constructor() {
    makeAutoObservable(this);
    this.user = {};
    this.state = "none";
    this.clear();
  }

  getUsers(userId: number) {
    this.state = "pending";
    try {
      let tempData: any = null;
      const request = requestRepository.getUser(userId).then((res) => {
        tempData = res.data;
      });

      return () => {
        if (tempData === null) {
          throw request;
        } else {
          runInAction(() => {
            this.user = tempData;
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
    this.user = {};
    this.state = "none";
  }
}

export default suspenseUserStore;
