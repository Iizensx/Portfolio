import { useState } from "react";
import { ArrowUpRight } from "lucide-react";
import SectionLabel from "./SectionLabel";
import TechnologyTag from "./TechnologyTag";
import { projects } from "../data/resumeData";

export default function Projects() {
  const [unavailableImages, setUnavailableImages] = useState({});

  return (
    <section id="projects" className="content-section scroll-mt-20">
      <div className="project-heading"><SectionLabel n="02">ผลงาน / โปรเจกต์</SectionLabel><p>{projects.length} PROJECTS</p></div>
      <div className="projects-grid">
        {projects.map((p, index) => (
          <article key={p.title} className={`project-tile tile-${index}`}>
            <div className="project-top"><p>{String(index + 1).padStart(2, "0")} / {p.date}</p><ArrowUpRight className="project-arrow" size={22} /></div>
            <div className="project-detail">
                <p className="project-org">{p.org}</p>
                <h3>{p.title}</h3>
                {p.image && !unavailableImages[p.image] && (
                  <figure className="project-artwork">
                    <img
                      src={p.image}
                      alt={p.imageAlt || "ภาพประกอบโครงการ"}
                      onError={() => setUnavailableImages((images) => ({ ...images, [p.image]: true }))}
                    />
                  </figure>
                )}
                <p className="project-desc">{p.desc}</p>
                <div className="project-tags">
              {p.tags.map((t) => (
                <TechnologyTag key={t} name={t} />
              ))}
            </div>
                <p className="project-team">{p.team}</p>
                <a className="project-detail-button" href={`?project=${p.slug}`}>Detail <ArrowUpRight size={17} /></a>
            </div>
          </article>
        ))}
      </div>
    </section>
  );
}

