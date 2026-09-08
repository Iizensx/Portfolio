export const profile = {
  name: "ธนาภัทร แก้วเรือง",
  role: "วิทยาการคอมพิวเตอร์ · Full Stack Developer",
  location: "พลัมคอนโด แจ้งวัฒนะ",
  address: "พลัมคอนโด แจ้งวัฒนะ",
  phone: "094 325 3900",
  email: "thanaphat01ice@gmail.com",
  github: "https://github.com/Iizensx",
  githubLabel: "github.com/Iizensx",
  linkedin: "https://www.linkedin.com/in/thanaphat-kreawruang-ba861b432/",
  instagram: "https://www.instagram.com/_thanphatt/",
  mapUrl: "https://www.google.com/maps/search/?api=1&query=Plum+Condo+Chaengwattana",
  heroBio:
    "นักศึกษาชั้นปีที่ 4 สาขาวิทยาการคอมพิวเตอร์และนวัตกรรมการพัฒนาซอฟต์แวร์ ถนัดพัฒนา Web Application แบบ Full Stack พร้อมออกแบบ UX/UI มีประสบการณ์ทำงานจริงร่วมกับทีมและเดี่ยวหลายโปรเจกต์",
  aboutBio:
    "มุ่งมั่นพัฒนาตนเองสู่การเป็น Full Stack Developer มืออาชีพ โดยใช้ความรู้ด้านการพัฒนา Web Application และการออกแบบ UX/UI เข้ามาสร้างสรรค์ผลงานที่มีคุณภาพ ร่วมแก้ปัญหา และสร้าง Value ให้กับองค์กรอย่างยั่งยืน มีความรับผิดชอบสูง มุ่งมั่น และพร้อมเรียนรู้เทคโนโลยีใหม่ ๆ อยู่เสมอ",
  languages: "ไทย (มาก) · อังกฤษ (ปานกลาง) · จีน (พื้นฐาน)",
};

export const projects = [
  {
    slug: "parking-system",
    image: "/images/parking-system.png.jpg",
    images: ["/images/parking-system.png.jpg", "/images/InfographicPARKING.png"],
    imageAlt: "ภาพหน้าจอระบบค้นหาลานจอดรถ พร้อมการสแกนและชำระเงิน",
    date: "2567–2568",
    title: "ระบบค้นหาลานจอดรถ",
    org: "โปรเจกต์บริษัท Metthier",
    desc: "แอปพลิเคชันค้นหาลานจอดรถ สแกนเข้าใช้งาน ชำระเงิน และตรวจสอบข้อมูลรถและประวัติการใช้บริการ พัฒนาแบบ Full Stack พร้อมวิเคราะห์ Business Requirement และออกแบบ UX/UI ร่วมกับทีม 3 คน",
    tags: ["JavaScript", "React", "Node.js", "MySQL", "UX/UI", "Full Stack"],
    team: "ทีม 3 คน · 2 เดือน",
    caseStudy: {
      problem: "การหาที่จอดรถในอาคารหรือห้างสรรพสินค้าช่วงคนเยอะสร้างความล่าช้า ผู้ใช้ต้องเสียเวลาวนหาที่จอด ก่อให้เกิดการจราจรติดขัดภายในอาคาร และขั้นตอนการรับบัตร/ชำระเงินเดิมทำให้เกิดคิวสะสมบริเวณทางเข้า-ออก",
      solution: "พัฒนา Web Application ค้นหาลานจอดรถแบบ Real-time ช่วยให้ผู้ใช้เช็กสถานะช่องจอดว่างได้ทันที พร้อมระบบสแกน QR Code เข้า-ออก และชำระเงินแบบดิจิทัลครบวงจร ช่วยลดเวลาวนหาที่จอด เพิ่มความสะดวกสบาย และลดความยุ่งยากในการจอดรถในพื้นที่จำกัด",
      features: [
        { title: "Real-time Space Checking", detail: "เช็กและพยากรณ์สถานะที่จอดรถว่างล่วงหน้า" },
        { title: "QR Code Check-in", detail: "สแกน QR Code เข้า-ออกลานจอดได้รวดเร็ว" },
        { title: "Digital Payment", detail: "คำนวณค่าจอดตามจริง พร้อมระบบชำระเงินออนไลน์" },
        { title: "User & History System", detail: "บันทึกประวัติการใช้บริการ และรองรับผู้ใช้ทั้ง Member / Visitor" },
      ],
      contributions: [
        { title: "UX/UI Design", detail: "ร่วมวิเคราะห์ Business Requirement, วาง User Journey และออกแบบ Interactive Prototype ใน Figma" },
        { title: "Frontend Development", detail: "พัฒนา UI หน้าจอค้นหา สแกน และชำระเงินด้วย React" },
        { title: "Backend & Database", detail: "เขียน RESTful API ด้วย Node.js และออกแบบฐานข้อมูล MySQL สำหรับจัดการสถานะลานจอดและประวัติการใช้งาน" },
      ],
      github: "https://github.com/Iizensx/SmartparkingP100",
    },
  },
  {
    slug: "pet-management-system",
    image: "/images/Info-HemeyPets-Info.png",
    images: ["/images/PetManagementSystem.png", "/images/Info-HemeyPets-Info.png", "/images/Pet1.jpg", "/images/Pet2.jpg"],
    imageAlt: "ภาพหน้าจอระบบจัดการร้านรับฝากสัตว์เลี้ยง HomeyPets",
    date: "2568",
    title: "ระบบจัดการร้านรับฝากสัตว์เลี้ยง",
    org: "โปรเจกต์กลุ่ม",
    desc: "เว็บแอปสำหรับจัดการการรับฝากสัตว์เลี้ยง รองรับการตรวจสอบวันรับฝากแบบ Real-time ติดตามกิจกรรมของสัตว์เลี้ยง ระบบโปรโมชั่น ตรวจสอบวัคซีน และแบ่งโซนพื้นที่รับฝาก",
    tags: ["JavaScript", "React", "Node.js", "MongoDB", "UX/UI", "Full Stack"],
    team: "ทีม 3 คน · 2 เดือน",
    caseStudy: {
      problem: "ร้านรับฝากสัตว์เลี้ยงส่วนใหญ่ยังขาดระบบบริหารจัดการข้อมูลแบบศูนย์กลาง ทั้งข้อมูลลูกค้า สัตว์เลี้ยง ประวัติวัคซีน และการจอง ส่งผลให้กระบวนการทำงานซ้ำซ้อน เกิดข้อผิดพลาดด้านเอกสารได้ง่าย และลูกค้าไม่สามารถเช็กสถานะการฝากได้สะดวก",
      solution: "พัฒนา Web Application สำหรับบริหารจัดการร้านรับฝากสัตว์เลี้ยงแบบอัตโนมัติ รองรับการจองฝากออนไลน์ ชำระเงินผ่าน QR Code อัปเดตสถานะสัตว์เลี้ยงแบบ Real-time และมีระบบ Dashboard ช่วยบริหารจัดการโซนฝาก คิวงาน และรายงานรายได้ครบจบในที่เดียว",
      features: [
        { title: "Online Booking & Real-time Tracking", detail: "จองฝากสัตว์เลี้ยงออนไลน์ เลือกบริการเสริม เช่น อาบน้ำหรือตัดขน พร้อมติดตามสถานะการฝากได้แบบ Real-time" },
        { title: "Smart Zone & Auto Assignment", detail: "จัดการโซนพักตามประเภทสัตว์ เช่น แมว หมาเล็ก และหมาใหญ่ พร้อมตรวจสอบและเลือกโซนว่างให้อัตโนมัติ" },
        { title: "Multi-Role Management System", detail: "รองรับการใช้งาน 3 สิทธิ์ ได้แก่ Customer, Staff และ Admin ครอบคลุมการเช็กอิน เช็กเอาท์ จัดการคิวงาน และควบคุมโปรโมชั่น" },
        { title: "Automated Payment & Financial Reports", detail: "คำนวณค่าฝาก ส่วนลด และค่าปรับเกินเวลาอัตโนมัติ รองรับการชำระเงินออนไลน์ พร้อมสรุปรายได้ผ่าน Dashboard" },
      ],
      contributions: [
        { title: "Database Architecture", detail: "ออกแบบโครงสร้างฐานข้อมูลและความสัมพันธ์ระหว่างข้อมูลลูกค้า สัตว์เลี้ยง ประวัติวัคซีน และสถานะการจอง" },
        { title: "Backend Development", detail: "ร่วมพัฒนา RESTful API จัดการ Business Logic ระบบคำนวณราคา โปรโมชั่น และการอัปเดตสถานะเรียลไทม์ผ่าน Socket.io" },
        { title: "Frontend Development", detail: "ร่วมพัฒนา User Interface สำหรับหน้าจอการจองและการจัดการข้อมูลภายในระบบ" },
      ],
    },
  },
  {
    slug: "chatbot-homeypets",
    image: "/images/ChatbotHomey.png",
    images: ["/images/ChatbotHomey.png", "/images/chatbot.jpg", "/images/chatbot2.jpg", "/images/chatbot3.jpg", "/images/Info-HemeyPets-Info.png"],
    imageAlt: "ภาพหน้าจอ ChatBot HomeyPets สำหรับให้คำแนะนำเกี่ยวกับสัตว์เลี้ยง",
    date: "2568",
    title: "ChatBot HomeyPets",
    org: "โปรเจกต์กลุ่ม",
    desc: "เว็บแชทบอทให้คำแนะนำเกี่ยวกับสัตว์เลี้ยง ครอบคลุมอาการ อาหาร การป้องกันโรค และกฎหมายการเลี้ยงสัตว์ พร้อมรวบรวมและทำความสะอาดข้อมูลเพื่อใช้ตอบคำถามของระบบ",
    tags: ["JavaScript", "React", "Node.js", "MongoDB", "UX/UI", "Full Stack"],
    team: "ทีม 3 คน · 2 เดือน",
    caseStudy: {
      problem: "เจ้าของสัตว์เลี้ยงมักเจอปัญหาข้อมูลการดูแลสัตว์เลี้ยงกระจายอยู่ตามแหล่งต่างๆ ค้นหายาก และอาจได้ข้อมูลที่ไม่ถูกต้อง ครอบคลุมทั้งเรื่องวัคซีน โภชนาการ การสังเกตอาการป่วย การป้องกันโรค ตำแหน่งสถานพยาบาล ตลอดจนข้อบัญญัติและกฎหมายที่เกี่ยวข้อง",
      solution: "พัฒนา Web Chatbot ภาษาไทยที่ประยุกต์ใช้แนวคิด RAG ดึงข้อมูลจาก Knowledge Base ที่ผ่านการจัดเตรียมและทำความสะอาดแล้ว มาประมวลผลร่วมกับ AI เพื่อตอบคำถามผู้ใช้ได้อย่างแม่นยำ ตรงจุด และครบถ้วนในที่เดียว",
      features: [
        { title: "Pet Health & Vaccination Guide", detail: "ให้คำแนะนำเรื่องวัคซีนตามช่วงวัย การป้องกันเห็บหมัดและพยาธิ รวมถึงการสังเกตอาการป่วยเบื้องต้นเพื่อประเมินการพาไปพบแพทย์" },
        { title: "Nutrition & Care Advisory", detail: "แนะนำอาหารที่เหมาะสมตามช่วงวัย อาหารอันตรายที่ควรหลีกเลี่ยง และการดูแลสุขอนามัยของสัตว์เลี้ยงอย่างถูกวิธี" },
        { title: "Hospital Finder & Local Regulations", detail: "ค้นหาและแนะนำโรงพยาบาลสัตว์ใกล้เคียงในเขตกรุงเทพฯ พร้อมให้ข้อมูลข้อบัญญัติและกฎหมายเกี่ยวกับการเลี้ยงสัตว์เลี้ยง" },
        { title: "Chat History & Session Management", detail: "ระบบสมาชิกช่วยบันทึกและย้อนดูประวัติการสนทนากับ AI ได้ตลอดเวลา พร้อมจัดการ Session การใช้งาน" },
      ],
      contributions: [
        { title: "Full Stack Development", detail: "พัฒนาระบบทั้ง Frontend และ Backend ในส่วนหน้า Home, Login และ Interface ห้องแชท พร้อมเชื่อมต่อ API รับส่งคำตอบจาก AI มาแสดงผล" },
        { title: "Database & System Architecture", detail: "ออกแบบโครงสร้างฐานข้อมูลสำหรับจัดเก็บข้อมูลผู้ใช้ ประวัติการสนทนา และจัดการ Session การใช้งาน" },
        { title: "Dataset & Knowledge Base Preparation", detail: "ร่วมจัดเตรียม รวบรวม และทำความสะอาดชุดข้อมูลด้านสุขภาพ อาหาร โรงพยาบาล และกฎหมาย เพื่อทำ Knowledge Base สำหรับระบบ RAG" },
      ],
    },
  },
  {
    slug: "bakery",
    image: "/images/Bakery.png",
    images: [
      "/images/Bakery.png",
      "/images/Bakery/bakery%20(1).png",
      "/images/Bakery/bakery%20(2).png",
      "/images/Bakery/bakery%20(3).png",
      "/images/Bakery/bakery%20(4).png",
      "/images/Bakery/bakery%20(5).png",
      "/images/Bakery/bakery%20(6).png",
    ],
    imageAlt: "ภาพหน้าจอเว็บไซต์ Bakery สำหรับสั่งซื้อเบเกอรี่และจัดการร้าน",
    date: "2569",
    title: "Project-Bagery",
    org: "โปรเจกต์เดี่ยว",
    desc: "Full Stack Web Application สำหรับธุรกิจร้านเบเกอรี่แบบ End-to-End ครอบคลุมระบบหน้าร้าน การสั่งซื้อ ติดตามการจัดส่ง Real-time ระบบโปรโมชั่น Admin Dashboard และการจัดการสต็อกหลังบ้าน",
    tags: ["C#", ".NET", "MySQL", "UX/UI", "Developer"],
    team: "พัฒนาคนเดียว · 2 เดือน",
    caseStudy: {
      problem: "ร้านเบเกอรี่ขนาดเล็กถึงกลางมักประสบปัญหาการบริหารจัดการออเดอร์ที่ล่าช้า ไม่มีระบบติดตามสถานะการจัดส่งแบบ Real-time ให้ลูกค้า การจัดโปรโมชั่นทำได้ซับซ้อน และการเช็กสต็อกสินค้าสดแบบวันต่อวันเกิดข้อผิดพลาดได้ง่าย",
      solution: "พัฒนาระบบบริหารจัดการร้านเบเกอรี่ครบวงจรที่แบ่งสิทธิ์ 3 บทบาท ได้แก่ Customer, Staff และ Admin ให้ลูกค้าสั่งซื้อ ชำระเงิน และติดตามสถานะจัดส่ง พร้อมยืนยันการรับสินค้าอัตโนมัติภายใน 2 ชั่วโมง ขณะที่พนักงานและแอดมินสามารถควบคุมสต็อก อัปเดตออเดอร์ และจัดการโปรโมชั่นได้แบบ Real-time",
      features: [
        { title: "Order & Real-time Delivery Tracking", detail: "สั่งซื้อสินค้าออนไลน์ ติดตามสถานะการจัดส่งแบบ Real-time พร้อมระบบ Auto-Confirm ยืนยันการรับสินค้าอัตโนมัติภายใน 2 ชั่วโมงหากลูกค้าไม่ได้กดรับ" },
        { title: "Flexible Dynamic Promotion System", detail: "รองรับโปรโมชั่น 5 รูปแบบ ได้แก่ ซื้อ 5 แถม 2 ส่วนลดสมาชิก แคมเปญตามเทศกาล สินค้า Limited Stock และจัดส่งฟรีเมื่อซื้อครบ 200 บาท" },
        { title: "Staff Operations & On-site Check-in", detail: "ระบบพนักงานสำหรับรับและตรวจสอบออเดอร์ อัปเดตสต็อกสินค้าสด และยืนยันการ Check-in หน้าร้านเพื่อรับของแถมพิเศษ" },
        { title: "Admin Dashboard & Inventory Control", detail: "จัดการเพิ่ม ลบ และแก้ไขสินค้าและหมวดหมู่ ควบคุมสต็อก พร้อมสรุปรายงานยอดขายและรายได้ของร้านค้า" },
      ],
      contributions: [
        { title: "Sole Developer", detail: "พัฒนาคนเดียวทั้งระบบ ตั้งแต่การออกแบบ Architecture และ Database รวมถึง Role-based Access Control สำหรับ Customer, Staff และ Admin" },
        { title: "Frontend Development", detail: "พัฒนา UI/UX หน้าร้าน ระบบตะกร้าสินค้า หน้าติดตาม Delivery และ Admin Dashboard" },
        { title: "Backend & Business Logic", detail: "เขียน RESTful API เชื่อมต่อฐานข้อมูล ระบบคำนวณโปรโมชั่น 5 เงื่อนไขอัตโนมัติ และระบบ Auto-confirm ภายใน 2 ชั่วโมง" },
      ],
      github: "https://github.com/Iizensx/Project-Bagery",
    },
  },
];

export const skills = [
  { group: "Languages", items: ["JavaScript", "Python", "Java", "C#", "HTML", "CSS"] },
  { group: "Frameworks & Libraries", items: ["React", "Next.js", "Node.js", "Tailwind CSS"] },
  { group: "APIs & Databases", items: ["RESTful APIs", "MySQL", "MongoDB", "SQL"] },
  { group: "UX/UI & Design", items: ["Figma", "Wireframing", "Interactive Prototyping", "User Flow"] },
  { group: "DevOps & Tools", items: ["Git", "Docker", "CI/CD Pipelines"] },
];

export const education = [
  {
    date: "2566–2569",
    school: "มหาวิทยาลัยศรีปทุม",
    detail: "คณะเทคโนโลยีสารสนเทศ · สาขาวิทยาการคอมพิวเตอร์และนวัตกรรมการพัฒนาซอฟต์แวร์",
    gpa: "GPA 3.5 / 4.0",
  },
  {
    date: "2563–2566",
    school: "โรงเรียนวังไกลกังวล ในพระบรมราชูปถัมภ์",
    detail: "ห้องศิลป์ภาษาจีน",
    gpa: "GPA 3.8 / 4.0",
  },
];
