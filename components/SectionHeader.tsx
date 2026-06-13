import FadeIn from './FadeIn';

export default function SectionHeader({
  index,
  label,
  title,
}: {
  index: string;
  label: string;
  title: string;
}) {
  return (
    <FadeIn className="section-header">
      <span className="section-index" aria-hidden="true">
        {index}
      </span>
      <div className="section-heading">
        <p className="section-label">{label}</p>
        <h2 className="section-title">{title}</h2>
      </div>
    </FadeIn>
  );
}
