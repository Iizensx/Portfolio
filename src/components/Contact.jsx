import { ArrowUpRight, Github, Instagram, Linkedin, Mail, MapPin, Phone } from "lucide-react";
import SectionLabel from "./SectionLabel";
import { profile } from "../data/resumeData";

export default function Contact() {
  const contactLinks = [
    { icon: Phone, title: "โทรศัพท์", detail: profile.phone, href: `tel:${profile.phone.replace(/\s/g, "")}` },
    { icon: Mail, title: "Gmail", detail: profile.email, href: `mailto:${profile.email}` },
    { icon: Linkedin, title: "LinkedIn", detail: "thanaphat-kreawruang", href: profile.linkedin, external: true },
    { icon: Instagram, title: "Instagram", detail: "@_thanphatt", href: profile.instagram, external: true },
    { icon: Github, title: "GitHub", detail: profile.githubLabel, href: profile.github, external: true },
  ];

  return (
    <section id="contact" className="content-section contact-section scroll-mt-20">
      <SectionLabel n="05">ติดต่อ</SectionLabel>
      <h3 className="contact-title">ช่องทางการติดต่อ</h3>

      <div className="contact-hub">
        <div className="contact-map-card">
          <iframe
            title="แผนที่ พลัมคอนโด แจ้งวัฒนะ"
            src="https://www.google.com/maps?q=Plum%20Condo%20Chaengwattana&z=15&output=embed"
            loading="lazy"
            referrerPolicy="no-referrer-when-downgrade"
          />
          <a
            className="map-location-chip"
            href={profile.mapUrl}
            target="_blank"
            rel="noreferrer"
            aria-label={`เปิดแผนที่ ${profile.address}`}
          >
            <span><MapPin size={17} /></span>
            <span><strong>ที่อยู่ปัจจุบัน</strong><small>{profile.address}</small></span>
            <ArrowUpRight size={16} />
          </a>
        </div>

        <div className="contact-links" aria-label="ช่องทางติดต่อ">
          {contactLinks.map(({ icon: Icon, title, detail, href, external }) => (
            <a
              key={title}
              href={href}
              className="contact-link-card"
              {...(external ? { target: "_blank", rel: "noreferrer" } : {})}
            >
              <span className="contact-link-icon"><Icon size={21} strokeWidth={1.9} /></span>
              <span className="contact-link-copy"><strong>{title}</strong><small>{detail}</small></span>
              <ArrowUpRight className="contact-link-arrow" size={20} strokeWidth={1.7} />
            </a>
          ))}
        </div>
      </div>
    </section>
  );
}
