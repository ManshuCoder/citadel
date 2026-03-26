export default function InsightLoading() {
  return (
    <div className="container py-14 md:py-16">
      <div className="max-w-3xl">
        <div className="h-4 w-28 rounded-full bg-muted" />
        <div className="mt-5 h-10 w-[min(640px,95%)] rounded-2xl bg-muted" />
        <div className="mt-4 h-6 w-[min(520px,90%)] rounded-2xl bg-muted" />
        <div className="mt-6 flex gap-2">
          <div className="h-5 w-24 rounded-full bg-muted" />
          <div className="h-5 w-20 rounded-full bg-muted" />
        </div>
      </div>
      <div className="mt-10 grid gap-8 lg:grid-cols-12">
        <div className="lg:col-span-8">
          <div className="rounded-3xl border border-border bg-card p-6">
            {Array.from({ length: 10 }).map((_, i) => (
              <div
                key={i}
                className="mt-3 h-4 w-full rounded-full bg-muted first:mt-0"
              />
            ))}
          </div>
        </div>
        <div className="lg:col-span-4">
          <div className="rounded-3xl border border-border bg-card p-6">
            <div className="h-5 w-32 rounded-full bg-muted" />
            <div className="mt-3 h-4 w-full rounded-full bg-muted" />
            <div className="mt-2 h-4 w-[90%] rounded-full bg-muted" />
            <div className="mt-6 h-4 w-20 rounded-full bg-muted" />
          </div>
        </div>
      </div>
    </div>
  );
}

