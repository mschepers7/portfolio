import { useState } from "react";
import { projects } from "../data/projects.js";
import ProjectCard from "../components/ProjectCard.jsx";

export default function Projects() {
  const [query, setQuery] = useState("");

  const normalized = query.trim().toLowerCase();

  const visible = projects.filter((project) => {
    const searchableText = [
      project.title,
      project.category,
      ...project.technologies,
    ]
      .join(" ")
      .toLowerCase();

    return searchableText.includes(normalized);
  });

  return (
    <section>
      <h1>Projects</h1>

      <p>
        Explore my projects and the technologies and skills behind them.
      </p>

      <label htmlFor="project-search">
        Filter by title, category, or technology
      </label>

      <input
        id="project-search"
        type="search"
        value={query}
        onChange={(event) => setQuery(event.target.value)}
        placeholder="Try C++, systems, or game development"
      />

      <p role="status">
        {visible.length} project(s) found
      </p>

      {visible.length > 0 ? (
        <div className="grid">
          {visible.map((project) => (
            <ProjectCard
              key={project.slug}
              project={project}
            />
          ))}
        </div>
      ) : (
        <p>No projects match your search. Try another term.</p>
      )}
    </section>
  );
}