const projects = [
  {
    title: "AI Interview Simulator",
    description:
      "An AI-powered platform for conducting personalized mock interviews and analyzing interview performance.",
    tech: ["React", "FastAPI", "PostgreSQL", "OpenAI"],
    link: "https://github.com/KUMUD-TECH/AI-Interview-Simulator",
  },
  {
    title: "Team Task Manager",
    description:
      "A full-stack task management application with authentication, role-based access, and team collaboration.",
    tech: ["React", "Node.js", "Express", "MySQL"],
    link: "https://github.com/KUMUD-TECH/Team-Task-Manager",
  },
  {
    title: "Blogging Platform",
    description:
      "A modern blogging platform where users can create, manage, and explore blog content.",
    tech: ["React", "JavaScript", "CSS"],
    link: "https://github.com/KUMUD-TECH/BlogWebsite",
  },
  {
    title: "Maze Game",
    description:
      "A maze-solving game built using reinforcement learning where an agent learns to navigate through the maze.",
    tech: ["Python", "Q-Learning", "Reinforcement Learning"],
    link: "https://github.com/KUMUD-TECH/Maze-Game",
  },
];

export default function Projects() {
  return (
    <section className="w-full px-6 py-20 md:px-12 lg:px-20">
      <div className="mb-12">
        <p className="mb-3 text-sm font-medium uppercase tracking-[0.2em] text-[#FFC200]">
          My Work
        </p>

        <h2 className="text-4xl font-bold tracking-tight text-white sm:text-5xl">
          Featured Projects
        </h2>
      </div>

      <div className="grid grid-cols-1 gap-6 md:grid-cols-2">
        {projects.map((project) => (
          <article
            key={project.title}
            className="group flex flex-col rounded-2xl border border-white/10 bg-white/[0.03] p-7 backdrop-blur-sm transition-all duration-300 hover:-translate-y-1 hover:border-[#FF6400]/60 hover:bg-white/[0.05]"
          >
            <div className="mb-6 flex items-start justify-between gap-4">
              <h3 className="text-xl font-semibold text-white transition-colors duration-300 group-hover:text-[#FFC200]">
                {project.title}
              </h3>

              <span className="h-2 w-2 shrink-0 rounded-full bg-[#FF6400] shadow-[0_0_12px_#FF6400]" />
            </div>

            <p className="mb-7 leading-7 text-gray-400">
              {project.description}
            </p>

            <div className="mb-8 flex flex-wrap gap-2">
              {project.tech.map((technology) => (
                <span
                  key={technology}
                  className="rounded-full border border-[#FF6400]/20 bg-[#FF6400]/5 px-3 py-1 text-xs font-medium text-gray-300"
                >
                  {technology}
                </span>
              ))}
            </div>

            <a
              href={project.link}
              className="mt-auto inline-flex w-fit items-center gap-2 text-sm font-semibold text-white transition-colors duration-300 hover:text-[#FFC200]"
            >
              View Project
              <span className="transition-transform duration-300 group-hover:translate-x-1">
                →
              </span>
            </a>
          </article>
        ))}
      </div>
    </section>
  );
}