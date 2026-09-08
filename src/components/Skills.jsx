import SectionLabel from "./SectionLabel";
import { TechnologyIcon } from "./TechnologyTag";
import { skills } from "../data/resumeData";

const groupDescriptions = {
  Languages: "ภาษาที่ใช้พัฒนาเว็บและระบบ",
  "Frameworks & Libraries": "เครื่องมือสำหรับสร้างประสบการณ์บนเว็บ",
  "APIs & Databases": "การเชื่อมต่อบริการและจัดการข้อมูล",
  "UX/UI & Design": "ออกแบบเส้นทางและประสบการณ์ของผู้ใช้",
  "DevOps & Tools": "เครื่องมือสำหรับพัฒนาและส่งมอบงาน",
};

export default function Skills() {
  return (
    <section id="skills" className="content-section scroll-mt-20">
      <SectionLabel n="03">ทักษะและเครื่องมือ</SectionLabel>
      <div className="skills-inventory">
        {skills.map((s) => (
          <article key={s.group} className="skill-group">
            <header className="skill-group-intro">
              <h3>{s.group}</h3>
              <p>{groupDescriptions[s.group]}</p>
            </header>
            <div className="skills-grid" role="list" aria-label={s.group}>
              {s.items.map((item) => (
                <div key={item} className="skill-card" role="listitem">
                  <TechnologyIcon name={item} variant="card" />
                  <span>{item}</span>
                </div>
              ))}
            </div>
          </article>
        ))}
      </div>
    </section>
  );
}
