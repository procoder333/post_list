import { useState } from "react";
import { HashRouter, Switch, Route } from "react-router-dom";
import "./styles.css";
import { PostList } from "./containers/PostList";
import { PostDetail } from "./containers/PostDetail";

export default function App() {
  const [detailPost, setDetailPost] = useState("123");
  return (
    <div className="App">
      <HashRouter>
        <Switch>
          <Route
            exact
            path="/"
            render={(props) => (
              <PostList
                detailPost={detailPost}
                handlePost={(item) => setDetailPost(item)}
              />
            )}
          />
          <Route
            path="/detail/:postId"
            render={(props) => <PostDetail detailPost={detailPost} />}
          />
        </Switch>
      </HashRouter>
    </div>
  );
}
