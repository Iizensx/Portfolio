import { useEffect, useMemo, useState } from "react";
import { ArrowLeft, ChevronLeft, ChevronRight, ExternalLink } from "lucide-react";
import TechnologyTag from "./TechnologyTag";

export default function ProjectDetail({ project }) {
  const images = useMemo(() => project.images?.length ? project.images : [project.image], [project]);
  const isParkingProject = project.slug === "parking-system";
  const [activeImage, setActiveImage] = useState(0);
  const hasMultipleImages = images.length > 1;

  useEffect(() => {
    setActiveImage(0);
  }, [project.slug]);

  useEffect(() => {
    if (!hasMultipleImages) return undefined;

    const timer = window.setInterval(() => {
      setActiveImage((current) => (current + 1) % images.length);
    }, 5000);

    return () => window.clearInterval(timer);
  }, [hasMultipleImages, images.length]);

  const showImage = (direction) => {
    setActiveImage((current) => (current + direction + images.length) % images.length);
  };

  return (
    <main className="project-page">
      <a href={window.location.pathname} className="back-link"><ArrowLeft size={18} /> กลับไปยังผลงานทั้งหมด</a>
      <div className="project-breadcrumb">PROJECTS <span>/</span> {project.title}</div>
      <article className="project-detail-page">
        <div className="project-detail-copy">
          <p className="project-detail-date">{project.date} · {project.org}</p>
          <h1>{project.title}</h1>
          <p>{project.desc}</p>
          <h2>เทคโนโลยีที่ใช้</h2>
          <div className="project-tags project-detail-tags">
            {project.tags.map((tag) => <TechnologyTag key={tag} name={tag} />)}
          </div>
          <p className="project-detail-team">{project.team}</p>
        </div>
        <section className="project-gallery" aria-label={`แกลเลอรี ${project.title}`}>
          <img src={images[activeImage]} alt={project.imageAlt || `ภาพโครงการ ${project.title}`} />
          {hasMultipleImages && <>
            <button type="button" className="gallery-control gallery-prev" onClick={() => showImage(-1)} aria-label="รูปก่อนหน้า"><ChevronLeft /></button>
            <button type="button" className="gallery-control gallery-next" onClick={() => showImage(1)} aria-label="รูปถัดไป"><ChevronRight /></button>
            <div className="gallery-dots" aria-label="เลือกรูปภาพ">
              {images.map((image, index) => (
                <button key={image} type="button" className={index === activeImage ? "is-active" : ""} onClick={() => setActiveImage(index)} aria-label={`แสดงรูปที่ ${index + 1}`} />
              ))}
            </div>
          </>}
        </section>
      </article>
      {project.caseStudy && (
        <article className="project-case-study" aria-label={`รายละเอียดโครงการ ${project.title}`}>
          <section className="case-study-intro">
            <div>
              <p className="case-study-label">PROBLEM</p>
              <h2>ปัญหา</h2>
              <p>{project.caseStudy.problem}</p>
            </div>
            <div>
              <p className="case-study-label">SOLUTION</p>
              <h2>วิธีแก้ปัญหา</h2>
              <p>{project.caseStudy.solution}</p>
            </div>
          </section>

          <section className="case-study-section">
            <div className="case-study-heading">
              <p className="case-study-label">KEY FEATURES</p>
              <h2>ฟีเจอร์หลัก</h2>
            </div>
            <div className="case-study-list case-study-features">
              {project.caseStudy.features.map((feature, index) => (
                <article key={feature.title} className="case-study-item">
                  <span aria-hidden="true">0{index + 1}</span>
                  <div><h3>{feature.title}</h3><p>{feature.detail}</p></div>
                </article>
              ))}
            </div>
          </section>

          <section className="case-study-section">
            <div className="case-study-heading">
              <p className="case-study-label">MY CONTRIBUTION</p>
              <h2>สิ่งที่ทำ</h2>
            </div>
            <div className="case-study-list case-study-contributions">
              {project.caseStudy.contributions.map((contribution) => (
                <article key={contribution.title} className="case-study-item">
                  <div><h3>{contribution.title}</h3><p>{contribution.detail}</p></div>
                </article>
              ))}
            </div>
          </section>

          {project.caseStudy.github && (
            <section className="case-study-links">
              <div><p className="case-study-label">LINKS</p><h2>ดูผลงานเพิ่มเติม</h2></div>
              <a href={project.caseStudy.github} target="_blank" rel="noreferrer">GitHub Repository <ExternalLink size={17} aria-hidden="true" /></a>
            </section>
          )}
        </article>
      )}
    </main>
  );
}
