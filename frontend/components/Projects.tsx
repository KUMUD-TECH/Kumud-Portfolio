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
    <section>
      <h2>Featured Projects</h2>

      <div>
        {projects.map((project) => (
          <article key={project.title}>
            <h3>{project.title}</h3>

            <p>{project.description}</p>

            <div>
              {project.tech.map((technology) => (
                <span key={technology}>{technology}</span>
              ))}
            </div>

            <a href={project.link}>View Project</a>
          </article>
        ))}
      </div>
    </section>
  );
}