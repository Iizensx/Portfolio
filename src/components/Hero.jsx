import { ArrowRight, Github, Instagram, Linkedin, MapPin } from "lucide-react";
import { profile } from "../data/resumeData";

export default function Hero() {
  return (
    <section id="top" className="hero-section">
      <div className="hero-copy">
        <p className="hero-kicker hero-line-from-right">ยินดีที่ได้รู้จัก ผม</p>
        <h1 className="hero-line-from-left">{profile.name}</h1>
        <p className="hero-role">Full Stack Developer</p>
        <p className="hero-bio">{profile.heroBio}</p>
        <div className="hero-actions">
          <a href="#projects" className="button-primary">ดูผลงาน <ArrowRight size={18} /></a>
          <a href="#contact" className="button-secondary">ติดต่อผม</a>
        </div>
        <div className="connect-row">
          <span>CONNECT</span>
          <div><a href={profile.github} target="_blank" rel="noreferrer" aria-label="Github"><Github size={21}/></a><a href="#contact" aria-label="Instagram"><Instagram size={21}/></a><a href="#contact" aria-label="LinkedIn"><Linkedin size={21}/></a></div>
        </div>
        <div className="hero-marquee" aria-label={`${profile.name} Full Stack Developer`}>
          <div className="hero-marquee-line hero-marquee-line-left"><span>{profile.name} · {profile.name} · </span></div>
          <div className="hero-marquee-line hero-marquee-line-right"><span>FULL STACK DEVELOPER · FULL STACK DEVELOPER · </span></div>
        </div>
      </div>
      <div className="hero-visual">
        <div className="portrait-orb">
          <img src="/images/thanaphat-profile.png" alt="ธนาภัทร แก้วเรือง" />
        </div>
        <div className="fact-card fact-one"><span>✦</span><strong>Full Stack<br />Developer</strong></div>
        <div className="fact-card fact-two"><MapPin size={23}/><strong>{profile.location}</strong></div>
      </div>
    </section>
  );
}
