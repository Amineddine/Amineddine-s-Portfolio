// Server component: emits a schema.org JSON-LD block into the document. Rendered
// server-side, so the structured data is present in the raw HTML that crawlers
// and AI answer engines fetch — no JavaScript execution required to read it.
export default function JsonLd({ data }: { data: object }) {
  return (
    <script
      type="application/ld+json"
      // JSON.stringify drops `undefined` fields and safely escapes the payload.
      dangerouslySetInnerHTML={{ __html: JSON.stringify(data) }}
    />
  );
}
