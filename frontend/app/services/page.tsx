const services = [
  {
    title: "Full-Stack Development",
    description:
      "I build complete web applications from frontend interfaces to backend APIs and databases, focusing on scalable architecture, clean code, and reliable user experiences.",
    skills: [
      "React",
      "Next.js",
      "TypeScript",
      "Node.js",
      "Express.js",
      "Python",
      "FastAPI",
      "PostgreSQL",
      "MySQL",
      "REST APIs",
      "Git & GitHub",
    ],
    whatIDo: [
      "Build complete web applications",
      "Design frontend and backend architecture",
      "Develop REST APIs",
      "Integrate databases",
      "Implement authentication and authorization",
      "Deploy applications",
    ],
  },

  {
    title: "Frontend Development",
    description:
      "I create responsive, accessible, and modern user interfaces that work smoothly across desktop, tablet, and mobile devices.",
    skills: [
      "HTML",
      "CSS",
      "JavaScript",
      "TypeScript",
      "React",
      "Next.js",
      "Tailwind CSS",
      "Responsive Design",
      "Figma",
    ],
    whatIDo: [
      "Convert designs into responsive interfaces",
      "Build reusable React components",
      "Create modern landing pages",
      "Build dashboards and web applications",
      "Implement responsive layouts",
      "Optimize frontend performance",
    ],
  },

  {
    title: "Backend & API Development",
    description:
      "I develop secure and structured backend systems that handle business logic, APIs, authentication, database operations, and communication between services.",
    skills: [
      "Node.js",
      "Express.js",
      "Python",
      "FastAPI",
      "REST APIs",
      "PostgreSQL",
      "MySQL",
      "JWT",
      "Authentication",
      "API Integration",
      "Postman",
    ],
    whatIDo: [
      "Design REST APIs",
      "Build backend services",
      "Connect applications with databases",
      "Implement authentication and authorization",
      "Handle API validation and errors",
      "Test APIs using Postman",
    ],
  },

  {
    title: "AI & AI Integration",
    description:
      "I integrate AI capabilities into web applications to create intelligent features such as AI assistants, interview systems, content generation, and personalized experiences.",
    skills: [
      "Python",
      "OpenAI API",
      "FastAPI",
      "LLM Integration",
      "Prompt Engineering",
      "AI Application Development",
      "Speech-to-Text",
      "Machine Learning",
      "Git & GitHub",
    ],
    whatIDo: [
      "Integrate LLM APIs into applications",
      "Build AI-powered features",
      "Create AI assistants",
      "Generate personalized content",
      "Build AI interview experiences",
      "Connect AI services with backend APIs",
    ],
  },
];

export default function ServicesPage() {
  return (
    <main>
      <section>
        <h1>Services</h1>

        <p>
          I build modern digital products by combining frontend development,
          backend engineering, databases, and AI technologies.
        </p>
      </section>

      <section>
        {services.map((service) => (
          <article key={service.title}>
            <h2>{service.title}</h2>

            <p>{service.description}</p>

            <h3>Skills & Technologies</h3>

            <div>
              {service.skills.map((skill) => (
                <span key={skill}>{skill}</span>
              ))}
            </div>

            <h3>What I Can Build</h3>

            <ul>
              {service.whatIDo.map((item) => (
                <li key={item}>{item}</li>
              ))}
            </ul>
          </article>
        ))}
      </section>
    </main>
  );
}