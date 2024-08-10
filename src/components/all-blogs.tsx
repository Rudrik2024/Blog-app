import data from "../blogs/data.json";
import { Link } from "react-router-dom";

const AllBlogs = () => {
  return (
    <div className="container mx-auto px-10">
      <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-x-4 gap-y-12">
        {data.blogs.map((blog, index) => {
          return (
            <Link to={`/blog/${index}`} className="group">
              <div className="">
                <div className="w-full aspect-square">
                  <img
                    src={`https://picsum.photos/300/300?random=${index}`}
                    alt={blog.title}
                    className="w-full rounded-md"
                  />
                </div>
                <div className="py-4 space-y-2">
                  <h2 className="text-sm">{blog.date}</h2>
                  <h2 className="text-xl font-bold group-hover:text-blue-600 transition-colors duration-300">{blog.title}</h2>
                  <h2 className="text-blue-600">👤 - {blog.author}</h2>
                  <div className="flex space-x-2">
                    {blog.tags.map((tag) => (
                      <h2 className="text-xs rounded-full border border-gray-600 bg-gray-100 px-3 py-1 flex items-center justify-center h-auto">
                        {tag}
                      </h2>
                    ))}
                  </div>
                </div>
              </div>
            </Link>
          );
        })}
      </div>
    </div>
  );
};

export default AllBlogs;
