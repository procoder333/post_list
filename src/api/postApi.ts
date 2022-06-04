import { PostEntity } from "../models/post";
import Axios, { AxiosResponse } from "axios";

const url = "https://jsonplaceholder.typicode.com/posts";

const mapPostListToModel = ({ data }: AxiosResponse<any[]>): PostEntity[] =>
  data.map((post) => ({
    userId: post.userId,
    id: post.id,
    title: post.title,
    body: post.body
  }));

export const fetchPostList = (): Promise<PostEntity[]> => {
  const promise = new Promise<PostEntity[]>((resolve, reject) => {
    try {
      Axios.get<PostEntity[]>(url).then((response) =>
        resolve(mapPostListToModel(response))
      );
    } catch (ex) {
      reject(ex);
    }
  });
  return promise;
};
