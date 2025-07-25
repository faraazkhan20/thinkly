import { Routes, Route } from "react-router-dom";
import PostList from "./components/PostList";

function App() {
  return (
    <Routes>
      <Route path="/" element={<PostList />} />
    </Routes>
  );
}

export default App;
