import { useParams } from "react-router-dom";
// import data from "../blogs/data.json";
import Blog from "./blog";
import { BlogType } from "../App";


const BlogPost = ({blogs}:{blogs:BlogType[]}) => {
  const { id } = useParams();
  const blog = blogs.find((blog) => blog.id == parseInt(id!));


  if (!blog) {
    return <div>Blog post not found</div>;
  }

  return (
    <Blog blog={blog} />
  );
};

export default BlogPost;