import { useState, useEffect } from "react";
import Markdown from "react-markdown";
import { BlogType } from "../App";
import clsx from "clsx";

const Blog = ({ blog }: { blog: BlogType | undefined }) => {
  const [commentText, setCommentText] = useState<string>("");
  const [error, setError] = useState<string | null>(null);
  const [isLiked, setIsLiked] = useState<boolean>(false);

  const handleAddComment = async () => {
    if (!commentText) return;

    try {
      if (blog) {
        blog.comments.push(commentText);

        await fetch(`http://localhost:5010/blogs/${blog._id}`, {
          method: "PUT",
          headers: {
            "Content-Type": "application/json",
          },
          body: JSON.stringify(blog),
        });

        setCommentText("");
      }
    } catch (error) {
      setError("Failed to add comment. Please try again.");
      console.error("Error updating blog:", error);
    }
  };

  const handleLike = async () => {
    if (blog) {
      if (isLiked) {
        blog.likes = blog.likes - 1;
        setIsLiked(false);
      } else {
        blog.likes = blog.likes + 1;
        setIsLiked(true);
      }
      await fetch(`http://localhost:5010/blogs/${blog._id}`, {
        method: "PUT",
        headers: {
          "Content-Type": "application/json",
        },
        body: JSON.stringify(blog),
      });
    }
  };

  useEffect(() => {
    console.log("Blog updated:", blog);
  }, [blog, isLiked]);

  return (
    <div className="container mx-auto px-10 flex items-center justify-center flex-col">
      <div className="prose">
        <Markdown>{blog?.content}</Markdown>
      </div>
      <div className="container w-full my-10">
        {blog && blog?.comments?.length > 0 && (<div className="bg-gray-100 p-4 rounded-lg w-full">
          <div className="text-gray-700">Comments</div>
          <div className="bg-gray-100 p-4 sapce-y-4">
            {blog?.comments.map((comment, index) => (
              <div className="py-1">
                <div key={index} className="text-gray-700">
                  👤 - {comment}
                </div>
                <hr />
              </div>
            ))}
          </div>
        </div>)}
        <div className="w-full my-5 flex flex-col space-y-4 items-center justify-center">
          {error && <div className="text-red-500">{error}</div>}
          <textarea
            placeholder="Write a comment"
            className="border border-gray-900 w-96 rounded-lg h-56 p-4"
            value={commentText}
            onChange={(e) => setCommentText(e.target.value)}
            required
          />
          <div className="flex items-center justify-center">
            <button
              className="border border-gray-900 rounded-md px-2 py-1 hover:cursor-pointer"
              onClick={handleAddComment}
            >
              Add Comment
            </button>
          </div>
        </div>
        <div className="w-full">
          <div className="flex items-center justify-center">
            Likes - {blog?.likes}
          </div>
          <div className="mt-5 mb-10 flex w-full items-center justify-center space-x-4">
            <button
              className={clsx("px-4 py-2 bg-green-500 hover:bg-green-700 border border-gray-700 rounded-lg text-3xl", {
                "bg-red-500 hover:bg-red-700": isLiked,
              })}
              onClick={handleLike}
            >
              {isLiked ? "👎" : "👍"}
            </button>
          </div>
        </div>
      </div>
    </div>
  );
};

export default Blog;
