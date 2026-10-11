// The AZ logo: solid #E50914, set in the display face (Bebas Neue) — heavy,
// condensed, uppercase. Rendered as live text so it stays crisp at any size and
// matches the wordmark exactly. Size it with font-size utilities.
export default function AzMark({
  className = "",
  title = "AZ",
}: {
  className?: string;
  /** accessible name; pass "" when a sibling already names the control */
  title?: string;
}) {
  return (
    <span
      className={`nf-logo inline-block font-bold leading-none tracking-[-0.02em] ${className}`}
      {...(title ? { role: "img", "aria-label": title } : { "aria-hidden": true })}
    >
      AZ
    </span>
  );
}
