import { BrowserRouter as Router, Route, Routes, Link } from "react-router-dom";
import AllBlogs from "./components/all-blogs";
import BlogPost from "./components/blog-post";

function App() {
  return (
    <Router>
      <div>
        <h1 className="text-3xl font-bold underline text-gray-600 w-full h-full flex items-center justify-center py-12">
          <Link to="/">Simple React Blog app</Link>
        </h1>
        <Routes>
          <Route path="/" element={<AllBlogs />} />
          <Route path="/blog/:id" element={<BlogPost />} />
        </Routes>
      </div>
    </Router>
  );
}

export default App;