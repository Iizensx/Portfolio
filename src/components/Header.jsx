import { Menu, Moon, Sun, X } from "lucide-react";
import { useState } from "react";

const navItems = [
  ["#top", "หน้าแรก"],
  ["#about", "เกี่ยวกับ"],
  ["#projects", "ผลงาน"],
  ["#skills", "ทักษะ"],
  ["#contact", "ติดต่อ"],
];

export default function Header({ isDark, onToggleTheme }) {
  const [isMenuOpen, setIsMenuOpen] = useState(false);

  return (
    <header className="top-nav">
      <a href="#top" className="nav-brand">PORTFOLIO.</a>
      <nav className="nav-links" aria-label="เมนูหลัก">
        {navItems.map(([href, label], index) => (
          <a key={href} href={href} className={index === 0 ? "active" : undefined}>{label}</a>
        ))}
      </nav>
      <div className="nav-actions">
        <button type="button" aria-label="สลับโทนสี" onClick={onToggleTheme} className="theme-toggle">
          {isDark ? <Sun size={21} strokeWidth={1.8} /> : <Moon size={20} strokeWidth={1.8} />}
        </button>
        <button
          type="button"
          className="menu-toggle"
          aria-label={isMenuOpen ? "ปิดเมนู" : "เปิดเมนู"}
          aria-expanded={isMenuOpen}
          aria-controls="mobile-navigation"
          onClick={() => setIsMenuOpen((open) => !open)}
        >
          {isMenuOpen ? <X size={23} /> : <Menu size={24} />}
        </button>
      </div>
      <nav id="mobile-navigation" className={`mobile-nav ${isMenuOpen ? "is-open" : ""}`} aria-label="เมนูมือถือ">
        {navItems.map(([href, label]) => (
          <a key={href} href={href} onClick={() => setIsMenuOpen(false)}>{label}</a>
        ))}
      </nav>
    </header>
  );
}
