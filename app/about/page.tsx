import Header from "@/components/Header";

export default function About() {
  return (
    <>
      <Header />
      <main className="min-h-screen bg-background text-foreground">
        {/* Hero */}
        <section className="max-w-3xl mx-auto px-8 py-32">
          <p className="text-xs uppercase tracking-[0.3em] text-muted-foreground mb-4">
            About
          </p>
          <h1
            className="text-6xl font-light tracking-tight mb-6"
            style={{ fontFamily: "'Georgia', serif" }}
          >
            Pathway To Space Info
          </h1>
          <div className="h-px w-24 bg-border mb-10" />
          <p className="text-xl font-light leading-relaxed text-muted-foreground">
            Pathway To Space Info is a free educational resource dedicated to making
            the story of space exploration accessible to everyone — from curious
            beginners to lifelong enthusiasts.
          </p>
        </section>

        {/* Body */}
        <section className="max-w-3xl mx-auto px-8 pb-32 flex flex-col gap-12">
          <div className="flex flex-col gap-3">
            <h2
              className="text-2xl font-light"
              style={{ fontFamily: "'Georgia', serif" }}
            >
              Our Mission
            </h2>
            <div className="h-px bg-border" />
            <p className="text-muted-foreground leading-relaxed">
              Space exploration is one of humanity's greatest achievements, yet
              the history, science, and ambition behind it can feel distant or
              overwhelming. Pathway To Space Info exists to close that gap — breaking
              down complex missions, spacecraft, and discoveries into clear,
              engaging stories that anyone can follow and appreciate.
            </p>
          </div>

          <div className="flex flex-col gap-3">
            <h2
              className="text-2xl font-light"
              style={{ fontFamily: "'Georgia', serif" }}
            >
              What You'll Find Here
            </h2>
            <div className="h-px bg-border" />
            <p className="text-muted-foreground leading-relaxed">
              From the Apollo Moon landings of the 1960s to the Artemis program
              pushing humanity back toward the lunar surface, from the Space
              Shuttle era to life aboard the International Space Station, and
              from our own solar system out to the farthest reaches of the
              observable universe — Pathway To Space Info covers the full arc of
              human spaceflight and astronomical discovery.
            </p>
          </div>

          <div className="flex flex-col gap-3">
            <h2
              className="text-2xl font-light"
              style={{ fontFamily: "'Georgia', serif" }}
            >
              Built for Curiosity
            </h2>
            <div className="h-px bg-border" />
            <p className="text-muted-foreground leading-relaxed">
              No background in science or engineering is required. Whether
              you're a student doing research, a parent exploring with your
              kids, or simply someone who looked up at the night sky and wanted
              to know more — this site is for you. Every article is written to
              inform, inspire, and invite you to look a little further.
            </p>
          </div>
        </section>
      </main>
    </>
  );
}
