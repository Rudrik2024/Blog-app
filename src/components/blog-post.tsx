import { useParams } from "react-router-dom";
import data from "../blogs/data.json";
import Blog from "./blog";

const BlogPost = () => {
  const { id } = useParams();
  const blog = data.blogs[parseInt(id!)];

  if (!blog) {
    return <div>Blog post not found</div>;
  }

  return (
    <Blog content={blog.content} />
  );
};

export default BlogPost;