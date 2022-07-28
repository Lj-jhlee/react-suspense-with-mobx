import { makeAutoObservable, runInAction } from "mobx";

import { StoreState } from ".";

import requestRepository from "../repository/requestRepository";

class postsStore {
  posts: Record<string, string | number>[];

  state: StoreState;

  constructor() {
    makeAutoObservable(this);
    this.posts = [];
    this.state = "none";
    this.clear();
  }

  async getPosts(userId: number) {
    this.state = "pending";
    try {
      const { data } = await requestRepository.getPosts(userId);
      runInAction(() => {
        this.posts = data;
        this.state = "done";
      });
    } catch (error) {
      this.state = "error";
      throw error;
    }
  }

  clear(): void {
    this.posts = [];
    this.state = "none";
  }
}

export default postsStore;
