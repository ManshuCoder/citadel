import Link from "next/link";

export function SiteFooter() {
  return (
    <footer className="bg-[#111310] text-[#f5f5ef]">
      <div className="chess-shell py-14">
        <div className="grid gap-12 border-b border-white/[0.08] pb-12 md:grid-cols-[1.2fr_2fr]">
          <div>
            <Link href="/" className="inline-flex items-center gap-2.5">
              <span className="flex size-9 items-center justify-center rounded-xl bg-[#b6e33d] text-2xl text-[#182006]">
                ♞
              </span>
              <span className="font-(--font-display) text-xl font-bold">Knightly</span>
            </Link>
            <p className="mt-4 max-w-xs text-sm leading-6 text-white/35">
              The modern home for players, learners, and lifelong lovers of chess.
            </p>
          </div>

          <div className="grid grid-cols-2 gap-8 sm:grid-cols-4">
            <FooterColumn
              title="Play"
              links={[
                { href: "#play", label: "Live chess" },
                { href: "#play", label: "Daily chess" },
                { href: "#play", label: "Play a bot" },
              ]}
            />
            <FooterColumn
              title="Learn"
              links={[
                { href: "#puzzles", label: "Puzzles" },
                { href: "#learn", label: "Lessons" },
                { href: "#learn", label: "Openings" },
              ]}
            />
            <FooterColumn
              title="Connect"
              links={[
                { href: "#community", label: "Community" },
                { href: "#community", label: "Clubs" },
                { href: "#community", label: "Leaderboard" },
              ]}
            />
            <FooterColumn
              title="Knightly"
              links={[
                { href: "/", label: "About" },
                { href: "/", label: "Support" },
                { href: "/", label: "Careers" },
              ]}
            />
          </div>
        </div>

        <div className="flex flex-col gap-3 pt-6 text-xs text-white/25 sm:flex-row sm:items-center sm:justify-between">
          <p>© {new Date().getFullYear()} Knightly. Play boldly.</p>
          <div className="flex gap-5">
            <a href="#" className="hover:text-white/60">Privacy</a>
            <a href="#" className="hover:text-white/60">Terms</a>
            <a href="#" className="hover:text-white/60">Cookies</a>
          </div>
        </div>
      </div>
    </footer>
  );
}

function FooterColumn({
  title,
  links,
}: {
  title: string;
  links: { href: string; label: string }[];
}) {
  return (
    <div>
      <div className="text-xs font-extrabold uppercase tracking-[0.15em] text-white/65">
        {title}
      </div>
      <ul className="mt-4 space-y-3 text-sm text-white/35">
        {links.map((l) => (
          <li key={`${l.href}-${l.label}`}>
            <Link
              href={l.href}
              className="transition-colors hover:text-white"
            >
              {l.label}
            </Link>
          </li>
        ))}
      </ul>
    </div>
  );
}

