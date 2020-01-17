import React from "react";
import PostList from "./PostList";
import Header from "./Header";

const App = () => {
  return (
    <div className="ui container">
      <Header />
      <h5>
        Uses React and Redux to fetch and format blog posts from another source
      </h5>
      <PostList />
    </div>
  );
};

export default App;
