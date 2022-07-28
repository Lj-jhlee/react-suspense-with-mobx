import { makeAutoObservable, runInAction } from "mobx";

import { StoreState } from ".";

import requestRepository from "../repository/requestRepository";

class userStore {
  user: Record<string, string | number>;

  state: StoreState;

  constructor() {
    makeAutoObservable(this);
    this.user = {};
    this.state = "none";
    this.clear();
  }

  async getUsers(userId: number) {
    this.state = "pending";
    try {
      const { data } = await requestRepository.getUser(userId);
      runInAction(() => {
        this.user = data;
        this.state = "done";
      });
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

export default userStore;
