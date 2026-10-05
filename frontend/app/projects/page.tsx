const frontendProjects = [
  {
    title: "Portfolio Website",
    description: "A modern personal portfolio built with React and Next.js.",
    tech: ["Next.js", "React", "TypeScript"],
  },
  {
    title: "Blogging Platform",
    description: "A frontend blogging platform with a clean and responsive interface.",
    tech: ["React", "JavaScript", "CSS"],
  },
  {
    title: "Dodge The Enemy",
    description: "A browser-based game built with HTML, CSS and JavaScript.",
    tech: ["HTML", "CSS", "JavaScript"],
  },
  {
    title: "Event Platform",
    description: "A modern event discovery and photography platform interface.",
    tech: ["React", "Next.js", "Tailwind"],
  },
];

const fullStackProjects = [
  {
    title: "Team Task Manager",
    description: "A full-stack application for managing teams, tasks and roles.",
    tech: ["React", "Node.js", "Express", "MySQL"],
  },
  {
    title: "AI Interview Simulator",
    description: "A full-stack platform for AI-powered mock interviews.",
    tech: ["React", "FastAPI", "PostgreSQL", "OpenAI"],
  },
  {
    title: "PayFlowX",
    description: "A full-stack financial workflow and payment management platform.",
    tech: ["React", "Node.js", "Express", "PostgreSQL"],
  },
  {
    title: "Event & Photography Platform",
    description: "A platform for discovering events and photography services.",
    tech: ["Next.js", "Node.js", "PostgreSQL"],
  },
];

const aimlProjects = [
  {
    title: "AI Interview Simulator",
    description: "An AI-based interview system that generates questions and evaluates responses.",
    tech: ["Python", "FastAPI", "OpenAI"],
  },
  {
    title: "Maze Game",
    description: "A reinforcement learning agent that learns to navigate a maze.",
    tech: ["Python", "Q-Learning", "RL"],
  },
  {
    title: "AI Study Planner",
    description: "An AI-assisted study planning application.",
    tech: ["Python", "AI", "FastAPI"],
  },
  {
    title: "AI Nutrition Assistant",
    description: "An AI-powered concept for personalized nutrition assistance.",
    tech: ["Python", "AI", "LLM"],
  },
];

const otherProjects = [
  {
    title: "GitLab Learning Project",
    description: "A modern project created to explore GitLab workflows and CI/CD.",
    tech: ["GitLab", "CI/CD"],
  },
  {
    title: "Open Source Contributions",
    description: "Collection of open-source contributions and collaborative development work.",
    tech: ["GitHub", "JavaScript"],
  },
  {
    title: "Hacktoberfest Projects",
    description: "Projects and contributions made during Hacktoberfest.",
    tech: ["GitHub", "Open Source"],
  },
  {
    title: "Experimental Projects",
    description: "Small experiments created while learning new technologies.",
    tech: ["Various Technologies"],
  },
];

function ProjectCard({
  title,
  description,
  tech,
}: {
  title: string;
  description: string;
  tech: string[];
}) {
  return (
    <article className="group flex flex-col rounded-2xl border border-white/10 bg-white/3 p-7 backdrop-blur-sm transition-all duration-300 ease-out hover:-translate-y-2 hover:border-[#FF6400]/60 hover:bg-white/5 hover:shadow-[0_20px_50px_rgba(255,100,0,0.12)] ">
      <h3 className="text-xl font-semibold tracking-tight text-white transition-colors duration-300 group-hover:text-[#FFC200]">
        {title}
        </h3>

      <p className="mt-4 leading-7 text-gray-400">
        {description}</p>

      <div className="mt-6 flex  flex-wrap gap-2">
        {tech.map((technology) => (
          <span
           key={technology}
           className = "rounded-full border border-[#FF6400]/20 bg-[#FF6400]/5 px-3 py-1 text-xs font-medium text-gray-300"
           >{technology}
           </span>
        ))}
      </div>

      <a
      href="#"
      className="mt-7 inline-flex w-fit items-center gap-2 text-sm font-semibold text-white transition-colors duration-300 hover:text-[#FFC200]">

      View Project
      <span className="transition-transform duration-300 group-hover:translate-x-1">
          →
      </span>
      </a>
    </article>
  );
}

function ProjectSection({
  title,
  projects,
}: {
  title: string;
  projects: {
    title: string;
    description: string;
    tech: string[];
  }[];
}) {
  return (
    <section className="border-t border-white/10 px-6 py-20 md:px-12 lg:px-20">

      <h2 className="mb-10 text-center text-3xl font-bold tracking-tight text-[#E0D9D9] md:text-4xl">

        {title}
      </h2>

      <div className="grid grid-cols-1 gap-6 md:grid-cols-2 ">
        {projects.map((project) => (
          <ProjectCard
            key={project.title}
            title={project.title}
            description={project.description}
            tech={project.tech}
          />
        ))}
      </div>
    </section>
  );
}

export default function ProjectsPage() {
  return (
    <main className="min-h-screen bg-black text-white">
      <ProjectSection
        title="Frontend Projects"
        projects={frontendProjects}
      />

      <ProjectSection
        title="Full Stack Projects"
        projects={fullStackProjects}
      />

      <ProjectSection
        title="AI / ML Projects"
        projects={aimlProjects}
      />

      <ProjectSection
        title="Other Projects"
        projects={otherProjects}
      />
    </main>
  );
}