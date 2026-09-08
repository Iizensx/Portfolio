export default function SectionLabel({ n, children }) {
  return (
    <div className="section-label">
      <span>{n}</span>
      <strong>{children}</strong>
      <i />
    </div>
  );
}
