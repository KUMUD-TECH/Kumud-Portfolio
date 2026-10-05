const blogs = [
  {
    title: "Things I Learned While Building My First Next.js Application",
    description:
      "A collection of practical lessons I learned while working with Next.js App Router, layouts, components, and routing.",
    category: "Next.js",
    date: "October 1, 2026",
    slug: "learning-nextjs",
  },
  {
    title: "Understanding Git Branches and Pull Requests",
    description:
      "My practical notes on using feature branches, commits, pull requests, and keeping a project history clean.",
    category: "Git",
    date: "September 28, 2026",
    slug: "git-branches-and-pull-requests",
  },
  {
    title: "What I Learned While Building a Full-Stack Application",
    description:
      "Lessons from connecting a frontend, backend API, database, authentication, and deployment.",
    category: "Full Stack",
    date: "September 20, 2026",
    slug: "full-stack-development",
  },
  {
    title: "Exploring AI Integration in Web Applications",
    description:
      "My notes on integrating AI capabilities into web applications using APIs and backend services.",
    category: "AI",
    date: "September 15, 2026",
    slug: "ai-integration",
  },
];

export default function BlogPage() {
  return (
    <main>
      {/* Blog Header */}
      <section>
        <h1>Blog</h1>

        <p>
          Notes, experiments, and things I learn while building software,
          exploring new technologies, and working with AI.
        </p>
      </section>

      {/* Blog Cards */}
      <section>
        <h2>Latest Articles</h2>

        <div>
          {blogs.map((blog) => (
            <article key={blog.slug}>
              <span>{blog.category}</span>

              <h3>{blog.title}</h3>

              <p>{blog.description}</p>

              <p>{blog.date}</p>

              <a href={`/blog/${blog.slug}`}>Read Article</a>
            </article>
          ))}
        </div>
      </section>

      {/* Newsletter */}
      <section>
        <h2>Stay Updated</h2>

        <p>
          Subscribe to get an email whenever I publish a new article.
        </p>

        <form>
          <div>
            <label htmlFor="name">Name</label>
            <input
              id="name"
              name="name"
              type="text"
              placeholder="Your name"
            />
          </div>

          <div>
            <label htmlFor="email">Email</label>
            <input
              id="email"
              name="email"
              type="email"
              placeholder="Your email address"
            />
          </div>

          <button type="submit">Subscribe</button>
        </form>
      </section>
    </main>
  );
}