export default function InsightsLoading() {
  return (
    <div className="container py-16 md:py-20">
      <div className="h-10 w-52 rounded-2xl bg-muted" />
      <div className="mt-4 h-6 w-[min(520px,90%)] rounded-2xl bg-muted" />

      <div className="mt-10 grid gap-4 md:grid-cols-3">
        {Array.from({ length: 6 }).map((_, i) => (
          <div
            key={i}
            className="rounded-3xl border border-border bg-card p-6"
          >
            <div className="flex items-center justify-between">
              <div className="h-3 w-24 rounded-full bg-muted" />
              <div className="h-3 w-16 rounded-full bg-muted" />
            </div>
            <div className="mt-4 h-5 w-[85%] rounded-full bg-muted" />
            <div className="mt-3 h-4 w-full rounded-full bg-muted" />
            <div className="mt-2 h-4 w-[92%] rounded-full bg-muted" />
            <div className="mt-8 h-4 w-16 rounded-full bg-muted" />
          </div>
        ))}
      </div>
    </div>
  );
}

