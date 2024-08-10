import Markdown from "react-markdown";

const Blog = ({ content }: { content: string }) => {
  return (
    <div className="container mx-auto px-10 flex items-center justify-center">
      <div className="prose">
        <Markdown>{content}</Markdown>
      </div>
    </div>
  );
};

export default Blog;
