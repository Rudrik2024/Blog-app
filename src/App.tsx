import { BrowserRouter as Router, Route, Routes, Link } from "react-router-dom";
import AllBlogs from "./components/all-blogs";
import BlogPost from "./components/blog-post";
import { useEffect, useState } from "react";

export type BlogType = {
  _id: number;
  id: number;
  title: string;
  content: string;
  date: string;
  author: string;
  tags: string[];
  likes: number;
  comments: string[];
};

function App() {
  const [blogs, setBlogs] = useState<BlogType[]>([]);

  useEffect(() => {
    try {
      const getBlogs = async () => {
        const response = await fetch(`http://localhost:5010/blogs`);
        const realData = await response.json();
        setBlogs(realData);
      }
      getBlogs();
    } catch (error) {
      console.error(error);
    }
  }, [])

  return (
    <Router>
      <div>
        <h1 className="text-3xl font-bold underline text-gray-600 w-full h-full flex items-center justify-center py-12">
          <Link to="/">Simple React Blog app</Link>
        </h1>
        <Routes>
          <Route path="/" element={<AllBlogs blogs={blogs} />} />
          <Route path="/blog/:id" element={<BlogPost blogs={blogs}/>} />
        </Routes>
      </div>
    </Router>
  );
}

export default App;