import { useMemo, useState } from "react";

import {
  FiSearch,
  FiMail,
  FiTrendingUp,
  FiDollarSign,
  FiCreditCard,
} from "react-icons/fi";
import BlogCard from "../../components/BlogCard/BlogCard";

const categories = [
  {
    name: "All",
    icon: <FiTrendingUp />,
  },
  {
    name: "Microloan",
    icon: <FiDollarSign />,
  },
  {
    name: "Finance",
    icon: <FiTrendingUp />,
  },
  {
    name: "Credit Score",
    icon: <FiCreditCard />,
  },
];

const blogsData = [
  {
    id: 1,
    title: "How Microloans Help Small Businesses Grow",
    category: "Microloan",
    author: "FundStack Team",
    readTime: "5 min read",
    image: "https://i.ibb.co.com/HmDNjXP/small-business-grow.jpg",
    excerpt:
      "Discover how microloans empower entrepreneurs and small business owners to expand operations and increase revenue.",
  },
  {
    id: 2,
    title: "Understanding EMI Before Applying For a Loan",
    category: "Finance",
    author: "Finance Expert",
    readTime: "7 min read",
    image: "https://i.ibb.co.com/yFGsbYf1/What-is-EMI-in-loans.webp",
    excerpt:
      "Learn everything about EMI calculations and repayment strategies before taking your next loan.",
  },
  {
    id: 3,
    title: "Top Credit Score Tips To Improve Loan Approval",
    category: "Credit Score",
    author: "Credit Analyst",
    readTime: "6 min read",
    image: "https://i.ibb.co.com/0b1Cc7B/credit-score-tip.jpg",
    excerpt:
      "Simple techniques that can increase your creditworthiness and improve approval chances.",
  },
  {
    id: 4,
    title: "Loan Approval Process Explained",
    category: "Microloan",
    author: "FundStack Team",
    readTime: "4 min read",
    image: "https://i.ibb.co.com/0j5BD3dd/loan-approval-process.jpg",
    excerpt:
      "A step-by-step guide to understanding the loan review and approval workflow.",
  },
  {
    id: 5,
    title: "Managing Repayments Effectively",
    category: "Finance",
    author: "Finance Team",
    readTime: "8 min read",
    image: "https://i.ibb.co.com/Y7VBppPB/managing-repayment-effectively.jpg",
    excerpt:
      "Explore practical repayment strategies to maintain healthy financial standing.",
  },
  {
    id: 6,
    title: "Common Loan Application Mistakes",
    category: "Microloan",
    author: "Loan Advisor",
    readTime: "5 min read",
    image: "https://i.ibb.co.com/5g4vYyvp/common-loan-application-mistakes.jpg",
    excerpt:
      "Avoid the most common mistakes applicants make while requesting loans.",
  },
];

const Blogs = () => {
  const [search, setSearch] = useState("");
  const [activeCategory, setActiveCategory] = useState("All");

  const filteredBlogs = useMemo(() => {
    return blogsData.filter((blog) => {
      const matchCategory =
        activeCategory === "All" || blog.category === activeCategory;

      const matchSearch = blog.title
        .toLowerCase()
        .includes(search.toLowerCase());

      return matchCategory && matchSearch;
    });
  }, [search, activeCategory]);

  return (
    <div className="bg-slate-50 dark:bg-slate-900 transition-colors duration-300 min-h-screen
text-slate-900 dark:text-slate-100">
      <div className="mx-auto max-w-7xl px-4 py-8 md:px-6 md:py-10 lg:px-8 lg:py-12">
        {/* Hero */}

        <section className="rounded-xl bg-gradient-to-r from-blue-600 to-slate-700 text-white  p-6 md:p-10 lg:p-16">
          <div className="max-w-3xl">
            <span className="rounded-full bg-white/20 px-4 py-2 text-sm">
              Financial Knowledge Hub
            </span>

            <h1 className="mt-6 text-3xl md:text-5xl lg:text-6xl font-bold leading-tight">
              Insights for Smarter Lending & Borrowing
            </h1>

            <p className="mt-5 text-sm md:text-base lg:text-lg text-white/90 max-w-2xl">
              Learn about microloans, financial planning, credit scores,
              repayments, and business growth.
            </p>

            <div className="relative mt-6 md:mt-8">
              <FiSearch
                size={20}
                className=" absolute left-4 top-1/2 -translate-y-1/2 text-slate-500 dark:text-slate-400"
              />

              <input
                type="text"
                placeholder="Search articles..."
                value={search}
                onChange={(e) => setSearch(e.target.value)}
                className="w-full rounded-xl bg-white h-12 md:h-14 dark:bg-slate-800 py-4 pl-12 pr-4 text-slate-900 dark:text-white border border-transparent dark:border-slate-700 outline-none focus:ring-2 focus:ring-blue-500 text-sm md:text-base"
              />
            </div>
          </div>
        </section>

        {/* Categories */}

        <div className="flex flex-wrap gap-3 mt-8 overflow-x-auto pb-2 lg:flex-wrap">
          {categories.map((category) => (
            <button
              key={category.name}
              onClick={() => setActiveCategory(category.name)}
              className={`flex items-center shrink-0 gap-2 rounded-full text-sm px-4 py-2 md:px-5 md:py-2.5 cursor-pointer border transition-all ${
                activeCategory === category.name
                  ? "border-blue-600 bg-blue-600 text-white"
                  : "border-slate-300 dark:border-slate-700 bg-white dark:bg-slate-800 text-slate-700 dark:text-slate-300 hover:border-blue-500 hover:text-blue-600"
              }`}
            >
              {category.icon}
              {category.name}
            </button>
          ))}
        </div>

        {/* Featured Blog */}

        <section className=" mt-16 overflow-hidden rounded-3xl bg-white dark:bg-slate-800 border border-slate-200 dark:border-slate-700 shadow-sm">
          <div className="grid gap-6 lg:grid-cols-2">
            <img
              src="https://i.ibb.co.com/Ng9Pd0JF/ten-essential-bank-statement.jpg"
              alt="featured"
              className="h-64 md:h-80 lg:h-full w-full object-cover"
            />

            <div className="flex flex-col justify-center p-6 md:p-8 lg:p-12">
              <span className=" w-fit rounded-full bg-blue-100 dark:bg-blue-900/30 px-4 py-1 text-sm font-medium text-blue-700 dark:text-blue-400">
                Featured Article
              </span>

              <h2 className="mt-4 text-xl md:text-3xl lg:text-4xl font-bold text-slate-900 dark:text-white">
                10 Essential Financial Tips Before Applying For a Loan
              </h2>

              <p className="mt-5 text-slate-600 dark:text-slate-400">
                Learn how budgeting, credit management, and proper financial
                planning can improve your chances of getting approved.
              </p>

              <button className="mt-6 w-fit rounded-xl bg-blue-600 hover:bg-blue-700 px-6 py-3 text-white transition cursor-pointer">
                Read Article
              </button>
            </div>
          </div>
        </section>

        {/* Blog Grid */}

        <section className="mt-16">
          <div className="mb-6 md:mb-8 flex flex-col gap-2 md:flex-row md:items-center md:justify-between">
            <h2 className=" text-3xl font-bold text-slate-900 dark:text-white">
              Latest Articles
            </h2>

            <span className=" text-slate-500 dark:text-slate-400">
              {filteredBlogs.length} Articles
            </span>
          </div>

          <div className=" grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 xl:grid-cols-4 gap-5 md:gap-6">
            {filteredBlogs.map((blog) => (
              <BlogCard key={blog.id} blog={blog} />
            ))}
          </div>
        </section>

        {/* Newsletter */}

        <section className="mt-16 md:mt-20 rounded-xl md:rounded-2xl p-6 md:p-10 bg-slate-700 dark:bg-slate-800 text-white">
          <div className="mx-auto max-w-2xl text-center">
            <div className="mb-5 flex justify-center">
              <div className=" flex h-16 w-16 items-center justify-center rounded-full bg-white/10">
                <FiMail size={28} />
              </div>
            </div>

            <h2 className="text-4xl font-bold">Stay Updated</h2>

            <p className="mt-4 text-slate-300 dark:text-slate-400">
              Get financial tips, loan insights, and LoanLink updates directly
              in your inbox.
            </p>

            <form className="mt-8 flex flex-col gap-3 md:flex-row">
              <input
                type="email"
                placeholder="Enter your email"
                className=" h-12 md:h-14 flex-1 rounded-xl px-4 py-3 bg-white dark:bg-slate-900 text-slate-900 dark:text-white border border-slate-200 dark:border-slate-700"
              />

              <button
                type="submit"
                className=" h-12 md:h-14 rounded-xl bg-blue-600 hover:bg-blue-700 px-6 md:px-8 text-white"
              >
                Subscribe
              </button>
            </form>
          </div>
        </section>
      </div>
    </div>
  );
};

export default Blogs;
