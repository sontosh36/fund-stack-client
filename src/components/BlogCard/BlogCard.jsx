import { Link } from "react-router";
import { FiArrowRight, FiClock, FiUser } from "react-icons/fi";

const BlogCard = ({ blog }) => {
  return (
    <article className="overflow-hidden rounded-xl md:rounded-2xl border border-slate-200 dark:border-slate-700 bg-white dark:bg-slate-800 transition-all duration-300 hover:-translate-y-1 hover:shadow-xl h-full">
      <div className="overflow-hidden">
        <img
          src={blog.image}
          alt={blog.title}
          className=" h-52 md:h-56 lg:h-60 w-full object-cover"
        />
      </div>

      <div className="p-5 md:p-6">
        <span className="rounded-full bg-blue-50 dark:bg-blue-900/30 px-3 py-1 text-xs font-medium text-blue-700 dark:text-blue-400">
          {blog.category}
        </span>

        <h3 className="mt-4  text-lg md:text-xl font-bold line-clamp-2 text-slate-900 dark:text-white">
          {blog.title}
        </h3>

        <p className="mt-3 text-sm md:text-base text-slate-600 dark:text-slate-400">
          {blog.excerpt}
        </p>

        <div className="mt-5 flex items-center justify-between text-sm text-slate-500">
          <div className="flex items-center gap-2">
            <FiUser />
            <span>{blog.author}</span>
          </div>

          <div className="flex items-center gap-2">
            <FiClock />
            <span>{blog.readTime}</span>
          </div>
        </div>

        <button className="mt-6 inline-flex items-center gap-2 font-medium text-blue-600 dark:text-blue-400 cursor-pointer transition-all hover:gap-3">
          Read More
          <FiArrowRight />
        </button>
      </div>
    </article>
  );
};

export default BlogCard;
