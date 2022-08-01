import { makeAutoObservable, runInAction } from "mobx";

import { StoreState } from ".";

import requestRepository from "../repository/requestRepository";

class suspensePostsStore {
  posts: Record<string, string | number>[];

  state: StoreState;

  constructor() {
    makeAutoObservable(this);
    this.posts = [];
    this.state = "none";
    this.clear();
  }

  getPosts(userId: number) {
    this.state = "pending";
    try {
      let tempData: any = null;
      const request = requestRepository.getPosts(userId).then((res) => {
        tempData = res.data;
      });

      return () => {
        if (tempData === null) {
          throw request;
        } else {
          runInAction(() => {
            this.posts = tempData;
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
    this.posts = [];
    this.state = "none";
  }
}

export default suspensePostsStore;
