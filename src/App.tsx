import { BrowserRouter, Switch, Route } from "react-router-dom";
import "./styles.css";
import { PostList } from "./containers/PostList";
import { PostDetail } from "./containers/PostDetail";

export default function App() {
  return (
    <div className="App">
      <BrowserRouter>
        <Switch>
          <Route path="/" component={PostList} />
          <Route path="/detail" component={PostDetail} />
        </Switch>
        <PostList />
      </BrowserRouter>
    </div>
  );
}
