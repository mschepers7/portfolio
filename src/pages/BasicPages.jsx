import { Link } from "react-router";

export function Home() {
  return (
    <section className="hero">
      <p className="eyebrow">Computer Science Student</p>
      <h1>Hi, I'm Michelle.</h1>

      <p>
        I'm a computer science student interested in software development,
        problem solving, and building useful technology.
      </p>

      <p>
        My experience includes programming for a rocket propulsion lab,
        collaborating on coding projects, and helping lead a college coding
        club.
      </p>

      <Link className="button-link" to="/projects">
        Explore my projects
      </Link>
    </section>
  );
}

export function Experience() {
  return (
    <section>
      <h1>Experience</h1>

      <article className="card">
        <h2>Rocket Propulsion Lab</h2>
        <p>
          Contributed code to support telemetry communication and the
          transfer of rocket-related information to a ground computer.
        </p>
        <p>
          Skills: programming, debugging, code maintenance, and teamwork.
        </p>
      </article>

      <article className="card">
        <h2>Coding Club Vice President</h2>
        <p>
          Helped organize club events, communicate with Student Life, support
          the club website, and contribute to a video game for district-wide
          events.
        </p>
        <p>
          Skills: leadership, communication, planning, and collaboration.
        </p>
      </article>

      <article className="card">
        <h2>Education</h2>
        <p>
          Bachelor of Science in Computer Science — Saint Louis University.
        </p>
      </article>

      <h2>Technical Skills</h2>
      <ul>
        <li>Java</li>
        <li>C++</li>
        <li>C#</li>
        <li>Python</li>
        <li>Debugging and code maintenance</li>
        <li>Team collaboration and problem solving</li>
      </ul>
    </section>
  );
}

export function Contact() {
  return (
    <section>
      <h1>Contact</h1>
      <p>
        I'm interested in connecting about software development, technology,
        and internship opportunities.
      </p>

      <p>
        Find me on{" "}
        <a
          href="https://www.linkedin.com/in/michelleschepers"
          target="_blank"
          rel="noreferrer"
        >
          LinkedIn
        </a>
        .
      </p>
    </section>
  );
}

export function NotFound() {
  return (
    <section>
      <h1>Page not found</h1>
      <p>The page you're looking for doesn't exist.</p>
      <Link to="/">Return home</Link>
    </section>
  );
}