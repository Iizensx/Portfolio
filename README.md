# Portfolio — ธนาภัทร แก้วเรือง

โปรเจกต์พอร์ตโฟลิโอส่วนตัว สร้างด้วย React + Vite + Tailwind CSS
ข้อมูลดึงมาจาก resume.pdf ของผู้ใช้

## โครงสร้างโปรเจกต์

```
portfolio/
├── index.html
├── package.json
├── vite.config.js
├── tailwind.config.js
├── postcss.config.js
└── src/
    ├── main.jsx          # entry point
    ├── App.jsx           # ประกอบทุก section เข้าด้วยกัน
    ├── index.css         # Tailwind directives + global styles
    ├── data/
    │   └── resumeData.js # ข้อมูลทั้งหมด (แก้ตรงนี้ที่เดียวพอ)
    └── components/
        ├── Header.jsx
        ├── Hero.jsx
        ├── SectionLabel.jsx
        ├── About.jsx
        ├── Projects.jsx
        ├── Skills.jsx
        ├── Education.jsx
        ├── Contact.jsx
        └── Footer.jsx
```

## วิธีรันโปรเจกต์

```bash
npm install
npm run dev
```

จากนั้นเปิด http://localhost:5173

## Build สำหรับ deploy

```bash
npm run build
```

ไฟล์ที่ build แล้วจะอยู่ในโฟลเดอร์ `dist/` สามารถนำไป deploy ที่ Vercel, Netlify,
GitHub Pages หรือ hosting อื่น ๆ ได้ทันที

## แก้ไขข้อมูล

ข้อมูลทั้งหมด (ชื่อ, โปรเจกต์, ทักษะ, การศึกษา, ช่องทางติดต่อ) อยู่ในไฟล์เดียว:
`src/data/resumeData.js` — แก้ตรงนี้แล้วทุก component จะอัปเดตตาม ไม่ต้องไปไล่แก้ทีละไฟล์

## ที่ยังต้องเติมเอง

- รูปโปรไฟล์ (ยังไม่มีในดีไซน์ปัจจุบัน ใส่เพิ่มใน `Hero.jsx` ได้)
- ลิงก์จริงของแต่ละโปรเจกต์ (ใน `resumeData.js` ยังไม่มี field `url`)
- ลิงก์ LinkedIn หรือโซเชียลอื่น ถ้ามี
