import { PostEntity } from "../models/post";
import Axios, { AxiosResponse } from "axios";

const dataUrl = "https://jsonplaceholder.typicode.com/posts";

const mapPostListToModel = ({ data }: AxiosResponse<any[]>): PostEntity[] =>
  data.map((post) => ({
    userId: post.userId,
    id: post.id,
    title: post.title,
    body: post.body
  }));

export async function fetchPostList() {
  try {
    const response = await Axios.get(dataUrl);
    return mapPostListToModel(response);
  } catch (err) {
    throw err;
  }
}
