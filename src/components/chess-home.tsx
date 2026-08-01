"use client";

import { useState } from "react";
import {
  ArrowRight,
  Bot,
  Check,
  ChevronRight,
  Clock3,
  Flame,
  Play,
  Puzzle,
  RotateCcw,
  Sparkles,
  Trophy,
  Users,
  Zap,
} from "lucide-react";

const initialBoard = [
  ["♜", "", "♝", "♛", "", "♜", "♚", ""],
  ["♟", "♟", "", "", "♝", "♟", "♟", "♟"],
  ["", "", "♞", "", "", "♞", "", ""],
  ["", "", "♟", "♟", "", "", "", ""],
  ["", "", "", "♙", "", "", "", ""],
  ["", "", "♘", "", "♙", "♘", "", ""],
  ["♙", "♙", "", "", "♗", "♙", "♙", "♙"],
  ["♖", "", "♗", "♕", "", "♖", "♔", ""],
] as const;

const puzzleBoard = [
  ["", "", "", "", "", "", "♚", ""],
  ["", "", "", "", "♝", "♟", "♟", "♟"],
  ["", "", "", "", "", "♞", "", ""],
  ["", "", "", "♕", "", "", "", ""],
  ["", "", "", "", "", "", "", ""],
  ["", "", "", "", "", "♘", "", ""],
  ["", "", "", "", "", "♙", "♙", "♙"],
  ["", "", "", "", "", "♖", "♔", ""],
] as const;

const modes = [
  { icon: Zap, label: "Blitz", detail: "3 min", color: "text-amber-300" },
  { icon: Clock3, label: "Rapid", detail: "10 min", color: "text-sky-300" },
  { icon: Bot, label: "Computer", detail: "Choose level", color: "text-violet-300" },
] as const;

const players = [
  { rank: 1, name: "NoraKnight", rating: 2481, flag: "🇳🇴", delta: "+18" },
  { rank: 2, name: "RookRunner", rating: 2427, flag: "🇺🇸", delta: "+12" },
  { rank: 3, name: "TempoQueen", rating: 2394, flag: "🇮🇳", delta: "+9" },
] as const;

export function ChessHome() {
  const [board, setBoard] = useState<string[][]>(() =>
    puzzleBoard.map((row) => [...row]),
  );
  const [selected, setSelected] = useState<[number, number] | null>(null);
  const [solved, setSolved] = useState(false);

  function handleSquare(row: number, col: number) {
    if (solved) return;

    if (!selected) {
      if (board[row][col] === "♕") setSelected([row, col]);
      return;
    }

    const [fromRow, fromCol] = selected;
    if (fromRow === 3 && fromCol === 3 && row === 0 && col === 6) {
      const next = board.map((boardRow) => [...boardRow]);
      next[0][6] = "♕";
      next[fromRow][fromCol] = "";
      setBoard(next);
      setSolved(true);
    }
    setSelected(null);
  }

  function resetPuzzle() {
    setBoard(puzzleBoard.map((row) => [...row]));
    setSelected(null);
    setSolved(false);
  }

  return (
    <div className="overflow-hidden bg-[#111310] text-[#f5f5ef]">
      <section className="relative isolate">
        <div className="hero-glow" />
        <div className="chess-shell relative grid min-h-[calc(100vh-76px)] items-center gap-14 py-16 lg:grid-cols-[0.88fr_1.12fr] lg:py-20">
          <div className="relative z-10 max-w-xl">
            <div className="mb-7 inline-flex items-center gap-2 rounded-full border border-white/10 bg-white/[0.055] px-3.5 py-2 text-xs font-semibold tracking-wide text-white/70">
              <span className="flex size-5 items-center justify-center rounded-full bg-[#b6e33d] text-[#172005]">
                <Sparkles className="size-3" />
              </span>
              A smarter way to play
            </div>
            <h1 className="font-(--font-display) text-[clamp(3.5rem,7vw,6.6rem)] font-semibold leading-[0.89] tracking-[-0.065em]">
              Your move.
              <span className="mt-1 block text-[#b6e33d]">Your game.</span>
            </h1>
            <p className="mt-7 max-w-lg text-lg leading-8 text-white/55 md:text-xl">
              Play live games, sharpen your tactics, and join a global community
              that loves chess as much as you do.
            </p>
            <div className="mt-9 flex flex-col gap-3 sm:flex-row">
              <button className="lime-button group">
                <Play className="size-5 fill-current" />
                Play a game
                <ArrowRight className="size-4 transition-transform group-hover:translate-x-1" />
              </button>
              <button className="dark-button">
                <Puzzle className="size-5" />
                Solve puzzles
              </button>
            </div>
            <div className="mt-10 flex items-center gap-7 text-sm text-white/45">
              <span className="flex items-center gap-2">
                <span className="relative flex size-2">
                  <span className="absolute inline-flex size-full animate-ping rounded-full bg-[#b6e33d] opacity-60" />
                  <span className="relative inline-flex size-2 rounded-full bg-[#b6e33d]" />
                </span>
                18,942 playing now
              </span>
              <span className="hidden items-center gap-2 sm:flex">
                <Check className="size-4 text-[#b6e33d]" /> Free to join
              </span>
            </div>
          </div>

          <div className="relative mx-auto w-full max-w-[650px]">
            <div className="absolute -left-8 top-12 hidden rounded-2xl border border-white/10 bg-[#1b1e19]/90 px-4 py-3 shadow-2xl backdrop-blur xl:block">
              <div className="flex items-center gap-3">
                <span className="flex size-9 items-center justify-center rounded-full bg-amber-400 text-lg">
                  👑
                </span>
                <div>
                  <p className="text-xs text-white/40">Current streak</p>
                  <p className="text-sm font-bold">7 wins 🔥</p>
                </div>
              </div>
            </div>
            <div className="chess-card rotate-[1.5deg] p-3 sm:p-4">
              <div className="mb-3 flex items-center justify-between px-1">
                <Player name="MilaRose" rating="1846" avatar="M" light />
                <Timer value="08:42" />
              </div>
              <Board board={initialBoard} decorative />
              <div className="mt-3 flex items-center justify-between px-1">
                <Player name="You" rating="1782" avatar="Y" />
                <Timer value="09:17" active />
              </div>
            </div>
            <div className="absolute -bottom-6 -right-3 hidden rounded-2xl border border-white/10 bg-[#f1f0e8] p-3 text-[#171914] shadow-2xl sm:block xl:-right-10">
              <div className="flex items-center gap-3">
                <div className="flex size-10 items-center justify-center rounded-xl bg-[#b6e33d]">
                  <Trophy className="size-5" />
                </div>
                <div>
                  <p className="text-[10px] font-bold uppercase tracking-widest text-black/40">
                    Rating
                  </p>
                  <p className="font-(--font-display) text-xl font-bold">
                    1,782 <span className="text-xs text-[#668400]">+24</span>
                  </p>
                </div>
              </div>
            </div>
          </div>
        </div>
      </section>

      <section id="play" className="border-y border-white/[0.07] bg-[#171a16] py-24">
        <div className="chess-shell">
          <div className="flex flex-col justify-between gap-4 md:flex-row md:items-end">
            <div>
              <p className="eyebrow">Pick your pace</p>
              <h2 className="section-title">Ready when you are.</h2>
            </div>
            <p className="max-w-md text-white/45">
              Find an opponent instantly. We&apos;ll match you with someone at
              your level.
            </p>
          </div>
          <div className="mt-10 grid gap-4 md:grid-cols-3">
            {modes.map(({ icon: Icon, label, detail, color }, index) => (
              <button
                key={label}
                className="mode-card group text-left"
                type="button"
              >
                <span className="mb-10 flex items-start justify-between">
                  <span className="flex size-12 items-center justify-center rounded-2xl bg-white/[0.065]">
                    <Icon className={`size-6 ${color}`} />
                  </span>
                  <span className="text-sm font-bold text-white/20">0{index + 1}</span>
                </span>
                <span className="block font-(--font-display) text-3xl font-semibold">
                  {label}
                </span>
                <span className="mt-2 flex items-center justify-between text-sm text-white/40">
                  {detail}
                  <ChevronRight className="size-5 transition-transform group-hover:translate-x-1 group-hover:text-[#b6e33d]" />
                </span>
              </button>
            ))}
          </div>
        </div>
      </section>

      <section id="puzzles" className="bg-[#eeeee6] py-24 text-[#171914]">
        <div className="chess-shell grid items-center gap-14 lg:grid-cols-2">
          <div id="learn" className="order-2 scroll-mt-28 lg:order-1">
            <div className="max-w-md">
              <p className="eyebrow !text-[#668400]">Daily challenge</p>
              <h2 className="section-title !text-[#171914]">
                See the board differently.
              </h2>
              <p className="mt-5 text-lg leading-8 text-black/50">
                Train with bite-sized puzzles designed to build pattern
                recognition. Today&apos;s position has one winning move.
              </p>
              <div className="mt-8 flex items-center gap-3">
                <span className="flex size-11 items-center justify-center rounded-full bg-[#171914] text-white">
                  <Flame className="size-5 text-orange-400" />
                </span>
                <div>
                  <p className="font-bold">12 day streak</p>
                  <p className="text-sm text-black/40">Keep it going</p>
                </div>
              </div>
              <button onClick={resetPuzzle} className="mt-8 inline-flex items-center gap-2 text-sm font-bold">
                <RotateCcw className="size-4" />
                Reset puzzle
              </button>
            </div>
          </div>
          <div className="order-1 mx-auto w-full max-w-[520px] lg:order-2">
            <div className="rounded-[2rem] bg-[#171914] p-3 shadow-[0_30px_80px_rgba(25,27,21,0.22)] sm:p-5">
              <div className="mb-4 flex items-center justify-between px-1 text-white">
                <div>
                  <p className="text-xs font-semibold uppercase tracking-[0.18em] text-white/35">
                    White to move
                  </p>
                  <p className="mt-1 font-bold">
                    {solved ? "Brilliant! Checkmate." : "Mate in one"}
                  </p>
                </div>
                <span className={`rounded-full px-3 py-1.5 text-xs font-bold ${solved ? "bg-[#b6e33d] text-black" : "bg-white/10 text-white/60"}`}>
                  {solved ? "Solved +12" : "1,248 played"}
                </span>
              </div>
              <Board
                board={board}
                selected={selected}
                onSquare={handleSquare}
              />
              <p className="px-1 pt-4 text-center text-xs text-white/35">
                Hint: use your queen. Select it, then choose the king.
              </p>
            </div>
          </div>
        </div>
      </section>

      <section id="community" className="bg-[#111310] py-24">
        <div className="chess-shell grid gap-12 lg:grid-cols-[0.8fr_1.2fr]">
          <div>
            <p className="eyebrow">The community</p>
            <h2 className="section-title">Chess is better together.</h2>
            <p className="mt-5 max-w-md text-lg leading-8 text-white/45">
              Follow friends, join clubs, and climb the weekly leaderboard.
              There&apos;s always a game waiting.
            </p>
            <div className="mt-8 flex -space-x-3">
              {["🧑🏽", "👩🏻", "🧔🏾", "👩🏼", "🧑🏻"].map((face, index) => (
                <span
                  key={index}
                  className="flex size-12 items-center justify-center rounded-full border-4 border-[#111310] bg-[#2a2e27] text-xl"
                >
                  {face}
                </span>
              ))}
              <span className="flex size-12 items-center justify-center rounded-full border-4 border-[#111310] bg-[#b6e33d] text-xs font-extrabold text-black">
                +2M
              </span>
            </div>
          </div>
          <div className="overflow-hidden rounded-[2rem] border border-white/[0.08] bg-[#191c17]">
            <div className="flex items-center justify-between border-b border-white/[0.07] px-6 py-5">
              <div className="flex items-center gap-2 font-bold">
                <Trophy className="size-4 text-[#b6e33d]" />
                Weekly leaders
              </div>
              <button className="text-xs font-bold text-[#b6e33d]">View all</button>
            </div>
            {players.map((player) => (
              <div
                key={player.rank}
                className="grid grid-cols-[36px_1fr_auto] items-center gap-3 border-b border-white/[0.05] px-6 py-5 last:border-0"
              >
                <span className="font-(--font-display) text-lg font-bold text-white/30">
                  {player.rank.toString().padStart(2, "0")}
                </span>
                <div className="flex items-center gap-3">
                  <span className="flex size-10 items-center justify-center rounded-xl bg-white/[0.06] text-lg">
                    {player.flag}
                  </span>
                  <div>
                    <p className="font-bold">{player.name}</p>
                    <p className="text-xs text-white/35">{player.rating} rating</p>
                  </div>
                </div>
                <span className="rounded-full bg-[#b6e33d]/10 px-2.5 py-1 text-xs font-bold text-[#b6e33d]">
                  {player.delta}
                </span>
              </div>
            ))}
          </div>
        </div>
      </section>

      <section className="px-5 pb-6">
        <div className="mx-auto max-w-[1400px] overflow-hidden rounded-[2rem] bg-[#b6e33d] px-6 py-16 text-center text-[#171914] sm:px-10 md:py-20">
          <Users className="mx-auto size-8" />
          <h2 className="mx-auto mt-5 max-w-3xl font-(--font-display) text-4xl font-semibold tracking-[-0.04em] md:text-6xl">
            One move can change everything.
          </h2>
          <p className="mt-5 text-black/55">Create your free account and start playing today.</p>
          <button className="mt-8 inline-flex h-13 items-center gap-2 rounded-full bg-[#171914] px-7 font-bold text-white transition-transform hover:-translate-y-0.5">
            Join Knightly
            <ArrowRight className="size-4" />
          </button>
        </div>
      </section>
    </div>
  );
}

function Board({
  board,
  decorative = false,
  selected,
  onSquare,
}: {
  board: readonly (readonly string[])[];
  decorative?: boolean;
  selected?: [number, number] | null;
  onSquare?: (row: number, col: number) => void;
}) {
  return (
    <div className="grid aspect-square grid-cols-8 overflow-hidden rounded-xl shadow-inner">
      {board.flatMap((row, rowIndex) =>
        row.map((piece, colIndex) => {
          const dark = (rowIndex + colIndex) % 2 === 1;
          const isSelected =
            selected?.[0] === rowIndex && selected?.[1] === colIndex;
          return (
            <button
              type="button"
              aria-label={`${piece || "Empty"} square ${String.fromCharCode(97 + colIndex)}${8 - rowIndex}`}
              disabled={decorative}
              onClick={() => onSquare?.(rowIndex, colIndex)}
              key={`${rowIndex}-${colIndex}`}
              className={`relative flex aspect-square items-center justify-center text-[clamp(1.65rem,5.8vw,3.75rem)] leading-none transition-colors ${
                dark ? "bg-[#668447]" : "bg-[#dbe4c2]"
              } ${isSelected ? "!bg-[#b9d83e]" : ""} ${
                !decorative ? "cursor-pointer hover:brightness-105" : ""
              }`}
            >
              {colIndex === 0 && (
                <span className={`absolute left-1 top-0.5 text-[8px] font-bold ${dark ? "text-[#dbe4c2]/65" : "text-[#668447]/70"}`}>
                  {8 - rowIndex}
                </span>
              )}
              {rowIndex === 7 && (
                <span className={`absolute bottom-0 right-1 text-[8px] font-bold ${dark ? "text-[#dbe4c2]/65" : "text-[#668447]/70"}`}>
                  {String.fromCharCode(97 + colIndex)}
                </span>
              )}
              <span className="chess-piece">{piece}</span>
            </button>
          );
        }),
      )}
    </div>
  );
}

function Player({
  name,
  rating,
  avatar,
  light = false,
}: {
  name: string;
  rating: string;
  avatar: string;
  light?: boolean;
}) {
  return (
    <div className="flex items-center gap-2.5">
      <span className={`flex size-9 items-center justify-center rounded-xl text-sm font-black ${light ? "bg-rose-300 text-rose-950" : "bg-[#b6e33d] text-[#172005]"}`}>
        {avatar}
      </span>
      <div>
        <p className="text-sm font-bold">{name}</p>
        <p className="text-[11px] text-white/35">{rating}</p>
      </div>
    </div>
  );
}

function Timer({ value, active = false }: { value: string; active?: boolean }) {
  return (
    <span className={`rounded-lg px-3 py-1.5 font-mono text-sm font-bold ${active ? "bg-[#b6e33d] text-[#172005]" : "bg-white/10 text-white/60"}`}>
      {value}
    </span>
  );
}
