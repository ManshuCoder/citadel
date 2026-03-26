"use client";

export default function GlobalError({
  error,
}: {
  error: Error & { digest?: string };
}) {
  return (
    <html lang="en">
      <body>
        <div style={{ padding: 24, fontFamily: "ui-sans-serif, system-ui" }}>
          <h1 style={{ fontSize: 28, margin: 0 }}>Application error</h1>
          <p style={{ marginTop: 12, opacity: 0.8 }}>
            A fatal error occurred. Check server logs for details.
            {error?.digest ? ` (${error.digest})` : ""}
          </p>
        </div>
      </body>
    </html>
  );
}

