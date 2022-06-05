import { useHistory } from "react-router-dom";

export const PostDetail = (props) => {
  const { detailPost } = props;
  const history = useHistory();
  const goToHome = () => {
    history.push("/");
  };
  return (
    <div>
      <div>{detailPost.userId}</div>
      <div>{detailPost.title}</div>
      <div>{detailPost.body}</div>
      <button onClick={goToHome}>Go Home</button>
    </div>
  );
};
