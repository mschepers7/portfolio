import { Link, useParams } from "react-router";
import { projects } from "../data/projects.js";

export default function ProjectDetail() {
  const { slug } = useParams();

  const project = projects.find((item) => item.slug === slug);

  if (!project) {
    return (
      <section>
        <h1>Project not found</h1>
        <p>That project does not exist in this portfolio.</p>
        <Link to="/projects">Browse all projects</Link>
      </section>
    );
  }

  return (
    <article>
      <h1>{project.title}</h1>

      <p>
        <strong>Category:</strong> {project.category}
      </p>

      <p>
        <strong>Technologies:</strong>{" "}
        {project.technologies.join(", ")}
      </p>

      <h2>Problem</h2>
      <p>{project.problem}</p>

      <h2>My Contribution</h2>
      <p>{project.role}</p>

      <h2>Implementation</h2>
      <p>{project.approach}</p>

      <h2>Result or Lesson</h2>
      <p>{project.outcome}</p>

      <Link to="/projects">Back to projects</Link>
    </article>
  );
}