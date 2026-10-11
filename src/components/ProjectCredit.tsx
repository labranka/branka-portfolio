export function ProjectCredit({ credit }: { credit?: string }) {
  if (!credit) return null;
  return (
    <p className="text-xs leading-relaxed text-muted">
      {credit.split("COI Agency").map((part, index, parts) => (
        <span key={index}>
          {part}
          {index < parts.length - 1 && <a href="https://coiagency.com" target="_blank" rel="noopener noreferrer" className="text-link">COI Agency</a>}
        </span>
      ))}
    </p>
  );
}
