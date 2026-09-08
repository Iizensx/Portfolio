import { profile } from "../data/resumeData";

export default function About() {
  const details = [
    ["ชื่อ", profile.name],
    ["สถานที่เกิด", "หัวหิน, ประเทศไทย"],
    ["โทรศัพท์", profile.phone],
    ["GPA", "3.50"],
    ["อีเมล", profile.email],
    ["มหาวิทยาลัย", "มหาวิทยาลัยศรีปทุม"],
    ["คณะ", "เทคโนโลยีสารสนเทศ"],
    ["สาขา", "วิทยาการคอมพิวเตอร์และนวัตกรรมการพัฒนาซอฟต์แวร์"],
  ];

  return (
    <section id="about" className="about-section scroll-mt-20">
      <div className="about-heading">
        <p>DISCOVER</p>
        <h2>ข้อมูลส่วนตัว</h2>
      </div>
      <div className="about-showcase">
        <div className="about-photo-wrap">
          <img src="/images/thanaphat-profile.png" alt="ธนาภัทร แก้วเรือง" className="about-photo" />
          <span className="photo-shadow" />
        </div>
        <div className="about-content">
          <div className="about-intro-grid">
            <article>
              <h3>ผมคือใคร</h3>
              <p>{profile.aboutBio}</p>
            </article>
            <article>
              <h3>แนวทางการทำงาน</h3>
              <p>ผมให้ความสำคัญกับการทำความเข้าใจปัญหา ออกแบบประสบการณ์ที่ใช้งานง่าย และพัฒนาเว็บแอปพลิเคชันที่ดูแลต่อได้ในระยะยาว โดยพร้อมเรียนรู้เทคโนโลยีใหม่อยู่เสมอ</p>
            </article>
          </div>
          <div className="personal-details">
            <h3>ข้อมูลส่วนตัว</h3>
            <div className="details-grid">
              {details.map(([label, value]) => (
                <div key={label}><span>{label}</span><strong>{value}</strong></div>
              ))}
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}
// อันนี้คือคอมเมนต์บรรทัดเดียว
