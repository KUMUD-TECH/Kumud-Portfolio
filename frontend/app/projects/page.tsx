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
    <article>
      <h3>{title}</h3>

      <p>{description}</p>

      <div>
        {tech.map((technology) => (
          <span key={technology}>{technology}</span>
        ))}
      </div>

      <a href="#">View Project</a>
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
    <section>
      <h2>{title}</h2>

      <div>
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
    <main>
      <h1>Projects</h1>

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