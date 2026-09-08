import SectionLabel from "./SectionLabel";
import { education } from "../data/resumeData";

export default function Education() {
  return (
    <section className="content-section">
      <SectionLabel n="04">การศึกษา</SectionLabel>
      <div className="education-grid">
        {education.map((e) => (
          <div
            key={e.school}
            className="education-card"
          >
            <div>
              <h4>{e.school}</h4>
              <p>{e.detail}</p>
            </div>
            <div className="education-date">
              <p>{e.date}</p>
              <p>{e.gpa}</p>
            </div>
          </div>
        ))}
      </div>
    </section>
  );
}
