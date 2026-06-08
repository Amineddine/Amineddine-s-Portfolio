export default function BrowseSkeleton() {
  return (
    <div className="min-h-screen bg-[var(--nf-bg)]">
      {/* billboard */}
      <div className="relative h-[78vh] min-h-[520px] w-full">
        <div className="shimmer h-full w-full" />
        <div className="absolute inset-x-0 bottom-[14vh] space-y-4 px-4 md:px-[clamp(1rem,4vw,3.75rem)]">
          <div className="shimmer h-12 w-3/4 max-w-lg rounded md:h-20" />
          <div className="shimmer h-4 w-full max-w-xl rounded" />
          <div className="shimmer h-4 w-2/3 max-w-md rounded" />
          <div className="flex gap-3 pt-2">
            <div className="shimmer h-11 w-36 rounded" />
            <div className="shimmer h-11 w-36 rounded" />
          </div>
        </div>
      </div>

      {/* rows */}
      <div className="space-y-8 px-4 py-8 md:px-[clamp(1rem,4vw,3.75rem)]">
        {[0, 1, 2].map((r) => (
          <div key={r} className="space-y-3">
            <div className="shimmer h-5 w-48 rounded" />
            <div className="flex gap-2 overflow-hidden">
              {Array.from({ length: 6 }).map((_, i) => (
                <div
                  key={i}
                  className="shimmer aspect-video shrink-0 rounded-md"
                  style={{ width: "clamp(150px, 42vw, 256px)" }}
                />
              ))}
            </div>
          </div>
        ))}
      </div>
    </div>
  );
}
