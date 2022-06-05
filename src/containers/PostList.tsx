import React, { useState, useEffect } from "react";
import { useHistory } from "react-router-dom";
import { fetchPostList } from "./../api/postApi";
import { PostEntity } from "./../models/post";
export const PostList = (props) => {
  const [posts, setPosts] = useState<PostEntity[]>([]);
  const history = useHistory();
  useEffect(() => {
    async function getPostList() {
      let postData = await fetchPostList();
      setPosts(postData);
    }
    getPostList();
  }, []);
  const goToDetail = (post: PostEntity) => {
    history.push(`/detail/${post.id}`);
    props.handlePost(post);
  };
  return (
    <div>
      {posts.map((item) => (
        <div key={item.id.toString()} onClick={() => goToDetail(item)}>
          <div>{item.userId}</div>
          <div>{item.title}</div>
          <div>{item.body}</div>
        </div>
      ))}
    </div>
  );
};
